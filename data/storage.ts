import * as fs from 'fs';
import * as path from "path";
import {wss} from "../server";
import {Model} from "./models/Model";
import {UserModel} from "./models/UserModel";

const storagePath = path.join(__dirname, './items.json');
let incrementor = 1;
init();

function init() {
    try {
        fs.accessSync(storagePath, fs.constants.R_OK | fs.constants.W_OK);
        const items: Model[] = all();
        if(items.length) incrementor = Math.max(...all().map(m => m.id)) + 1;
    } catch (err) {
        write([]);
    }
}

export function all(): Model[] {
    return JSON.parse(fs.readFileSync(storagePath).toString()).map(data => new UserModel(data));
}

export function find(id: number): Model|null {
    return all().find(item => item.id === id);
}

export function write(nextItems: Model[]) {
    fs.writeFileSync(storagePath, JSON.stringify(nextItems.map(item => item.serialize())));
}

export function update(item: Model) {
    const items = all();
    const index = items.findIndex(_item => _item.id === item.id);
    items[index] = item;
    write(items);
    dispatch(item.constructor['resource'], item.id);
}

export function push(item: Model) {
    const items = all();
    if(!item.id) {
        item.id = incrementor++;
    }
    items.push(item);
    write(items);
    dispatch(item.constructor['resource'], item.id);
}

export function remove(id: number) {
    const items: Model[] = all();
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
        items.splice(index, 1);
        write([...items]);
        return true;
    }
    return false;
}

function dispatch(resource: string, identifier: number = null)
{
    console.log('dispatch ' + wss.clients.size)
    wss.clients.forEach((ws) => {
        ws.send(JSON.stringify({
            type: 'hydrate',
            resource: resource,
            identifier: identifier,
        }));
    });
}