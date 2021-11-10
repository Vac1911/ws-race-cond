import {Model} from "./Model";

export class UserModel extends Model{
    resource: string = 'user';

    get id() {
        return this.get('id');
    }

    set id(val: number) {
        this.set('id', val);
    }

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
}