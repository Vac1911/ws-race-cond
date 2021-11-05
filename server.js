"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws, req) => {
    console.log('Connected Recieved from ' + req.url);
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        message = message.toString();
        //log the received message and send it back to the client
        console.log('received: (%s)', message);
        const pushRegex = /^push:/;
        if (pushRegex.test(message)) {
            message = message.replace(pushRegex, '');
            storage.push(JSON.parse(message));
            refresh();
        }
    });
    //send immediatly a feedback to the incoming connection
    ws.send('Connected');
});
function refresh() {
    wss.clients
        .forEach(client => {
        client.send('hydrate:' + JSON.stringify(storage.all()));
    });
}
//start our server
server.listen(process.env.PORT || 8999, () => {
    // @ts-ignore
    console.log(`Server started on port ${server.address().port}`);
});
//# sourceMappingURL=server.js.map