"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Model_1 = require("./Model");
class UserModel extends Model_1.Model {
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
    static create(attributes) {
        return new UserModel({}).fill(attributes);
    }
}
exports.UserModel = UserModel;
UserModel.resource = 'user';
//# sourceMappingURL=UserModel.js.map