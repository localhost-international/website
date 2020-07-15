import { Config } from './@types/config'

const http = require('http')
const fs = require('fs')
const path = require('path')


export default function server(serverConfig:Config) {

  const config = serverConfig
  console.log('Server config', config)

  http.createServer((request:any, response:any) => {
    console.log('request ', request.url)

    var filePath = `.${config.server.root}/${request.url}`

    console.log('request', request.url, '')
    console.log('filePath', filePath, '\n')


    if (filePath == './') filePath = `./${config.server.root}/index.html`


    let extName:any = String(path.extname(filePath)).toLowerCase()
    const mimeTypes:any = {
      '.html': 'text/html',
      '.ico': 'image/x-icon',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm'
    }

    var contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (error:any, content:any) => {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.readFile(`./${config.server.root}/404.html`, function(error:any, content:any) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            response.end(content, 'utf-8')
          })
        }
        else {
          response.writeHead(500);
          response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`)
        }
      }
      else {
        response.writeHead(200, { 'Content-Type': contentType })
        response.end(content, 'utf-8')
      }
    })

  }).listen(config.server.port)

  console.log(`Server running at http://127.0.0.1:${config.server.port}/`)

}