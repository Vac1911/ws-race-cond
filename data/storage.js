"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.push = exports.update = exports.write = exports.find = exports.all = void 0;
const fs = require("fs");
const path = require("path");
const server_1 = require("../server");
const UserModel_1 = require("./models/UserModel");
const storagePath = path.join(__dirname, './items.json');
let incrementor = 1;
init();
function init() {
    try {
        fs.accessSync(storagePath, fs.constants.R_OK | fs.constants.W_OK);
        const items = all();
        if (items.length)
            incrementor = Math.max(...all().map(m => m.id)) + 1;
    }
    catch (err) {
        write([]);
    }
}
function all() {
    return JSON.parse(fs.readFileSync(storagePath).toString()).map(data => new UserModel_1.UserModel(data));
}
exports.all = all;
function find(id) {
    return all().find(item => item.id === id);
}
exports.find = find;
function write(nextItems) {
    fs.writeFileSync(storagePath, JSON.stringify(nextItems.map(item => item.serialize())));
}
exports.write = write;
function update(item) {
    const items = all();
    const index = items.findIndex(_item => _item.id === item.id);
    items[index] = item;
    write(items);
    dispatch(item.constructor['resource'], item.id);
}
exports.update = update;
function push(item) {
    const items = all();
    if (!item.id) {
        item.id = incrementor++;
    }
    items.push(item);
    write(items);
    dispatch(item.constructor['resource'], item.id);
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
function dispatch(resource, identifier = null) {
    console.log('dispatch ' + server_1.wss.clients.size);
    server_1.wss.clients.forEach((ws) => {
        ws.send(JSON.stringify({
            type: 'hydrate',
            resource: resource,
            identifier: identifier,
        }));
    });
}
//# sourceMappingURL=storage.js.map