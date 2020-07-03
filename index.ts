import liveServer from 'live-server'

import * as config from './config.json'
import compile from './src/compile'


// Compile list of files
compile();

// Run dev server
liveServer.start(config.server)