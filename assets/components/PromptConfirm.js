"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptConfirm = exports.openPromptConfirm = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
function openPromptConfirm(header, msg) {
    // @ts-ignore
    let promptComponent = document.createElement('prompt-confirm');
    promptComponent.header = header;
    promptComponent.msg = msg;
    document.body.append(promptComponent);
    return promptComponent.response;
}
exports.openPromptConfirm = openPromptConfirm;
class PromptConfirm extends lit_1.LitElement {
    constructor() {
        super();
        this.createResponse();
        this.header = '';
        this.msg = '';
    }
    static get styles() {
        return lit_1.css `
            #heading {
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 1.2;
            }
            #heading, #msg {
                margin-bottom: 1rem;
            }
            #promptForm {
                padding: 1rem;
            }
        `;
    }
    get promptFormData() {
        return true;
        // let data = new FormData(this.promptForm);
        // // @ts-ignore
        // return Object.fromEntries([...data.entries()]);
    }
    createResponse() {
        this.response = new Promise((res, reject) => {
            this.resolve = res;
        });
    }
    handleResponse(ev) {
        ev.preventDefault();
        this.resolve(this.promptFormData);
    }
    handleCancel() {
        this.resolve(false);
    }
    resolve(value) { }
    render() {
        return lit_1.html `
        <dynamic-modal width="32rem" open>
            <form id="promptForm" @submit="${this.handleResponse}">
                <div id="heading">
                    ${this.header}
                </div>
                <div id="msg">
                    ${this.msg}
                </div>
                <div style="display: flex; justify-content: space-between">
                    <button part="btn btn-secondary" type="button" @click="${this.handleCancel}">Cancel</button>
                    <button part="btn btn-primary" type="submit">Ok</button>
                </div>
            </form>
        </dynamic-modal>
        `;
    }
}
__decorate([
    decorators_js_1.property()
], PromptConfirm.prototype, "header", void 0);
__decorate([
    decorators_js_1.property()
], PromptConfirm.prototype, "msg", void 0);
__decorate([
    decorators_js_1.query('#first')
], PromptConfirm.prototype, "promptForm", void 0);
exports.PromptConfirm = PromptConfirm;
if (!customElements.get('prompt-confirm'))
    customElements.define('prompt-confirm', PromptConfirm);
