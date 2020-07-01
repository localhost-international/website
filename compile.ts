

import fs from 'fs'
import util from 'util'
import matter from 'gray-matter';
import marked from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM  } from 'jsdom'

import * as config from './config.json'


const readdir = util.promisify(fs.readdir)
const window = new JSDOM('').window
// @ts-expect-error
const DOMPurify = createDOMPurify(window)


const pages = {
  markdown: []
}


function sanitize(markdown:string) {
  console.log('compile::sanitize')
  const sanitised = DOMPurify.sanitize(markdown)
  return sanitised
}


function parse(files:any) {
  console.log('compile::parse', files)

  files.map((file:any) => {
    const fileData:any = fs.readFileSync(`${config.paths.content}/${file}`)

    const meta = matter(fileData)
    const markdown = marked(matter(fileData).content)

    console.log('compile::parse', fileData, meta)
  })
}


const compile = () => {
  
  readdir(config.paths.content).then((files) => {
    files = files.filter(file => file.match(/(\.md)|(\.markdown)/g))
    console.log('compile - files', files)
    parse(files);
  }).catch((err) => {
    console.log('Error', err)
  })


}




export default compile;