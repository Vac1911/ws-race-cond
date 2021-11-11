import {Model} from "./Model";

export class UserModel extends Model {
    static resource: string = 'user';

    get name() {
        return this.get('name');
    }

    set name(val: string) {
        this.set('name', val);
    }

    get email() {
        return this.get('email');
    }

    set email(val: string) {
        this.set('email', val);
    }

    static create(attributes: object): Model {
        return new UserModel({}).fill(attributes);
    }
}