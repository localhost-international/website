import fs from 'fs'
import util from 'util'
import matter from 'gray-matter';
import marked from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM  } from 'jsdom'


import { template as testTemplate } from './templates/test.html'
import * as config from '../config.json'


const readdir = util.promisify(fs.readdir)
const window = new JSDOM('').window
// @ts-expect-error
const DOMPurify = createDOMPurify(window)


interface Page {
  markup: string,
  path: string,
  meta: PageMeta
}

interface PageMeta {
  title: string,
  slug: string,
  tags: string[],
  template: string,
  description: string
}

interface Pages {
  markdown: any[]
}

const pages:Pages = {
  markdown: []
}


function sanitize(markdown:string) {
  const sanitised = DOMPurify.sanitize(markdown)
  return sanitised
}


function parse(files:any) {
  let _pages:any = [];
  return new Promise((resolve, reject) => {
    files.map((file:any) => {
      const filePath = `${config.paths.content}/${file}`
      const fileData:any = fs.readFileSync(filePath)
      const fileMeta = matter(fileData).data
      const renderedHtml = sanitize(marked(matter(fileData).content))
      _pages.push({
        path: filePath,
        markup: renderedHtml,
        meta: {
          ...fileMeta, tags: fileMeta.tags.split(',')
        }
      })
    })
    resolve(_pages)
  });
}




function store(page:Page) {
  return new Promise((resolve, reject) => {
    const fileDist = `${config.paths.dist}/${page.meta.slug}.html`
    const fileSanitized:string = sanitize(page.markup)
    const fileMeta:PageMeta = page.meta
    const fileRendered:any = testTemplate(fileMeta, fileSanitized)

    console.log('store::', fileRendered)

    fs.writeFile(fileDist, fileRendered, (err) => {
      if (err) reject('Ooops');
    });
    resolve({fileDist, fileRendered})
  })
}

const compile = () => {
  readdir(config.paths.content).then((files) => {
    files = files.filter(file => file.match(/(\.md)|(\.markdown)/g))
    parse(files)
      .then((files:any) => {
        pages.markdown = files;
        pages.markdown.forEach((page:Page) => {
          store(page)
            .then((file:any) => {
              console.log('store::then - Successful', file.fileDist)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
  }).catch((err) => {
    console.log('Error', err)
  })
}

export default compile;