"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Model_1 = require("./Model");
class UserModel extends Model_1.Model {
    constructor() {
        super(...arguments);
        this.resource = 'user';
    }
    get id() {
        return this.get('id');
    }
    set id(val) {
        this.set('id', val);
    }
    get name() {
        return this.get('name');
    }
    set name(val) {
        this.set('name', val);
    }
    get email() {
        return this.get('email');
    }
    set email(val) {
        this.set('email', val);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map