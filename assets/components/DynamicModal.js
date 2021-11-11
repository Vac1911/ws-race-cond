"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicModal = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
class DynamicModal extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.width = '48rem';
    }
    static get styles() {
        return lit_1.css `
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
    render() {
        return lit_1.html `<div class="wrapper" style="${this.open ? '' : 'display: none'}">
            <div class="modal" style="width: ${this.width}">
                <slot></slot>
            </div>
        </div>`;
    }
}
__decorate([
    decorators_js_1.property({ type: Boolean })
], DynamicModal.prototype, "open", void 0);
__decorate([
    decorators_js_1.property()
], DynamicModal.prototype, "width", void 0);
exports.DynamicModal = DynamicModal;
if (!customElements.get('dynamic-modal'))
    customElements.define('dynamic-modal', DynamicModal);
