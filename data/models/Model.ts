import {isEqual} from "lodash";

export class Model {
    protected _attributes: object = [];
    protected _original: object = [];

    constructor(attributes: object) {
        this._original = Object.assign({}, attributes);
        this._attributes = Object.assign({}, attributes);
    }

    get id() {
        return this.get('id');
    }

    set id(val: number) {
        this.set('id', val);
    }

    hasChanged(): boolean {
        return isEqual(this._original, this._attributes);
    }

    get(key: string) {
        return this._attributes[key];
    }

    set(key: string, value: any) {
        this._attributes[key] = value;
        return this;
    }

    fill(attributes: object): Model {
        this._attributes = Object.assign(this._attributes, attributes);
        return this;
    }

    serialize() {
        return Object.assign({}, this._attributes);
    }
}