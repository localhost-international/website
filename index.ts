// import liveServer from 'live-server'

const superstatic = require('superstatic').server

import { Config } from './src/@types/config'
import * as config from './config.json'
import compile from './src/compile'
// import server from './src/server'

// Compile list of files
// compile()

// Run dev server
// liveServer.start(config.server)

// server(config)

const app = superstatic({
  port: 1337,
  config: {
    public: './dist'
  }

})

const ws = app.listen(() => {
  console.log('Superstatic')
})