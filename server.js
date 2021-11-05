"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wss = exports.server = void 0;
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");
const index_1 = require("./routes/index");
const storage = require("./data/storage");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use('/', index_1.routes);
//initialize a simple http server
exports.server = http.createServer(app);
//initialize the WebSocket server instance
exports.wss = new WebSocket.Server({ server: exports.server });
exports.wss.on('connection', (ws, req) => {
    console.log('Connection Received');
});
function refresh() {
    exports.wss.clients
        .forEach(client => {
        client.send('hydrate:' + JSON.stringify(storage.all()));
    });
}
//start our server
exports.server.listen(process.env.PORT || 8999, () => {
    // @ts-ignore
    console.log(`Server started on port ${exports.server.address().port}`);
});
//# sourceMappingURL=server.js.map