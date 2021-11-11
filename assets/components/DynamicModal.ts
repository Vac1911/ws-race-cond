import { html, css, LitElement } from 'lit';
import {property} from "lit/decorators.js";

export class DynamicModal extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            background-color: rgba(107,114,128,0.5); position: absolute; left: 0; right: 0; top: 0; bottom: 0; display: flex; justify-content: center; align-items: center; z-index: 10;
        }
        .modal {
            background-color: rgba(255,255,255,1); min-height: 6rem;
        }
        `;
    }

    @property({type: Boolean})
    open: boolean;

    @property()
    width: string = '48rem';

    render() {
        return html`<div class="wrapper" style="${this.open ? '' : 'display: none'}">
            <div class="modal" style="width: ${this.width}">
                <slot></slot>
            </div>
        </div>`;
    }
}

if(!customElements.get('dynamic-modal'))
    customElements.define('dynamic-modal', DynamicModal);