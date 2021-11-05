import * as fs from 'fs';
import * as path from "path";

const storagePath = path.join(__dirname, './items.json');
let incrementor = 1;
init();

interface Item {
    id: number|null,
    name: string,
}

function init() {
    try {
        fs.accessSync(storagePath, fs.constants.R_OK | fs.constants.W_OK);
        incrementor = all().length;
    } catch (err) {
        write([]);
    }
}

export function all(): Item[] {
    return JSON.parse(fs.readFileSync(storagePath).toString());
}

export function find(id: number): Item|null {
    return all().find(item => item.id === id);
}

export function write(nextItems: Item[]) {
    fs.writeFileSync(storagePath, JSON.stringify(nextItems))
}

export function push(item: Item) {
    const items = all();
    if(item.id === null) {
        item.id = incrementor++;
    }
    items.push(item);
    write(items);
}

export function remove(id: number) {
    const items: Item[] = all();
    const index = items.findIndex(item => item.id === id);
    if (index > -1) {
        write(items.splice(index, 1));
    }
}