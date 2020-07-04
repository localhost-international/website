import fs from 'fs-extra'

import * as config from '../config.json'

import { Page, PageMeta } from './@types/page'

import { template as indexTemplate } from './templates/index.html'


export default function store(page:Page) {

  fs.copySync('public/assets', 'dist/assets')


  return new Promise((resolve, reject) => {
    const fileDist = `${config.paths.dist}/${page.meta.slug}.html`,
      fileSanitized:string = page.markup,
      fileMeta:PageMeta = page.meta,
      fileRendered:any = indexTemplate(fileMeta, fileSanitized)

    console.log('store::', fileRendered)

    fs.writeFile(fileDist, fileRendered, (err) => {
      if (err) reject('Ooops');
    });
    resolve({fileDist, fileRendered})
  })
}