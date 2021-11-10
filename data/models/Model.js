"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const lodash_1 = require("lodash");
class Model {
    constructor(attributes) {
        this._attributes = [];
        this._original = [];
        this._original = Object.assign({}, attributes);
        this._attributes = Object.assign({}, attributes);
    }
    hasChanged() {
        return lodash_1.isEqual(this._original, this._attributes);
    }
    get(key) {
        return this._attributes[key];
    }
    set(key, value) {
        this._attributes[key] = value;
        return this;
    }
    fill(attributes) {
        this._attributes = Object.assign(this._attributes, attributes);
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map