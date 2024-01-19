"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superstatic = require('superstatic').server;
function server(serverConfig) {
    var config = serverConfig;
    var app = superstatic({
        port: config.server.port,
        config: {
            public: config.server.root
        }
    });
    var ws = app.listen(function () {
        console.log("server::running http://127.0.0.1:".concat(config.server.port, "/"));
    });
}
exports.default = server;
