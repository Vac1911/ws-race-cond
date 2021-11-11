import { html, css, LitElement } from 'lit';
import {property, query} from "lit/decorators.js";

export function openPromptConfirm(header, msg) {
    // @ts-ignore
    let promptComponent: PromptConfirm = document.createElement('prompt-confirm');
    promptComponent.header = header;
    promptComponent.msg = msg;
    document.body.append(promptComponent);
    return promptComponent.response;
}

export class PromptConfirm extends LitElement {
    response: Promise<any>;

    static get styles() {
        return css`
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

    @property()
    header: string;

    @property()
    msg: string;

    @query('#first')
    promptForm: HTMLFormElement;

    get promptFormData() {
        return true;
        // let data = new FormData(this.promptForm);
        // // @ts-ignore
        // return Object.fromEntries([...data.entries()]);
    }

    constructor() {
        super();
        this.createResponse();
        this.header = '';
        this.msg = '';
    }

    createResponse() {
        this.response = new Promise((res, reject) => {
            this.resolve = res
        });
    }

    handleResponse(ev) {
        ev.preventDefault();
        this.resolve(this.promptFormData);
    }

    handleCancel() {
        this.resolve(false);
    }

    resolve(value: any) {}

    render() {
        return html`
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
if(!customElements.get('prompt-confirm'))
    customElements.define('prompt-confirm', PromptConfirm);