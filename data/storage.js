"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.push = exports.write = exports.find = exports.all = void 0;
const fs = require("fs");
const path = require("path");
const server_1 = require("../server");
const storagePath = path.join(__dirname, './items.json');
let incrementor = 1;
init();
function init() {
    try {
        fs.accessSync(storagePath, fs.constants.R_OK | fs.constants.W_OK);
        incrementor = all().length + 1;
    }
    catch (err) {
        write([]);
    }
}
function all() {
    return JSON.parse(fs.readFileSync(storagePath).toString());
}
exports.all = all;
function find(id) {
    return all().find(item => item.id === id);
}
exports.find = find;
function write(nextItems) {
    fs.writeFileSync(storagePath, JSON.stringify(nextItems));
    dispatch();
}
exports.write = write;
function push(item) {
    const items = all();
    if (!item.id) {
        item.id = incrementor++;
    }
    items.push(item);
    write(items);
}
exports.push = push;
function remove(id) {
    const items = all();
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
        items.splice(index, 1);
        write([...items]);
        return true;
    }
    return false;
}
exports.remove = remove;
function dispatch() {
    console.log('dispatch ' + server_1.wss.clients);
    server_1.wss.clients.forEach((ws) => {
        ws.send('hydrate!');
    });
}
//# sourceMappingURL=storage.js.map