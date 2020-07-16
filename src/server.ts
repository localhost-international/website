const superstatic = require('superstatic').server

import { Config } from './@types/config'

export default function server(serverConfig:Config) {

  const config = serverConfig

  // See: 
  // - https://github.com/firebase/superstatic/blob/master/examples/server/index.js

  const app = superstatic({
    port: 1337,
    config: {
      public: './dist'
    }
  })
  
  const ws = app.listen(() => {
    console.log(`server::running http://127.0.0.1:${config.server.port}/`)
  })

}