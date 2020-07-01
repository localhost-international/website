import liveServer from 'live-server'

import * as config from './config.json'
import compile from './compile'


// Compile list of files
compile();

// Run dev server
liveServer.start(config.server)