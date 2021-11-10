import * as fs from 'fs';
import * as path from "path";
import {wss} from "../server";
import {UserModel} from "./models/UserModel";

const storagePath = path.join(__dirname, './items.json');
let incrementor = 1;
init();

function init() {
    try {
        fs.accessSync(storagePath, fs.constants.R_OK | fs.constants.W_OK);
        incrementor = all().length + 1;
    } catch (err) {
        write([]);
    }
}

export function all(): UserModel[] {
    return JSON.parse(fs.readFileSync(storagePath).toString()).map(data => new UserModel(data));
}

export function find(id: number): UserModel|null {
    return all().find(item => item.id === id);
}

export function write(nextItems: UserModel[]) {
    fs.writeFileSync(storagePath, JSON.stringify(nextItems));
    dispatch();
}

export function push(item: UserModel) {
    const items = all();
    if(!item.id) {
        item.id = incrementor++;
    }
    items.push(item);
    write(items);
}

export function remove(id: number) {
    const items: UserModel[] = all();
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
        items.splice(index, 1);
        write([...items]);
        return true;
    }
    return false;
}

function dispatch()
{
    console.log('dispatch ' + wss.clients.size)
    wss.clients.forEach((ws) => {
        ws.send(JSON.stringify({
            type: 'hydrate'
        }));
    });
}