"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
class ExtendedForm extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.method = 'POST';
        this.action = '';
        this.redirect = '';
        this.submitunchanged = false;
        this.data = {};
        this._initial = {};
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", this._handleChange);
        this.addEventListener("click", this.handleSubmit);
        this.initData();
    }
    initData() {
        const inputs = Array.from(this.querySelectorAll('input, select, textarea'));
        for (let input of inputs) {
            if (input.name) {
                this._initial[input.name] = input.value;
                if (this.submitunchanged)
                    this.data[input.name] = input.value;
            }
        }
    }
    resetInputs() {
        for (let [name, value] of Object.entries(this._initial)) {
            const input = this.querySelector(`[name="${name}"]`);
            if (input) {
                input.value = value;
            }
        }
        return this;
    }
    enableButtons() {
        // Enable all buttons disabled from submitting
        Array.from(this.querySelectorAll('button[disabled-by="submit"]')).map((b) => {
            b.classList.remove('disabled');
            b.removeAttribute('disabled-by');
        });
        return this;
    }
    _handleChange(e) {
        const key = e.target.getAttribute('name') || e.target.getAttribute('id');
        this.data[key] = e.target.value;
        console.log(this.data);
    }
    handleSubmit(ev) {
        // If this event wasn't caused by a submit button, do not proceed
        const wasSubmit = ev.composedPath().some((el) => el?.type === 'submit');
        if (!wasSubmit)
            return false;
        // Disable all buttons in form
        Array.from(this.querySelectorAll('button:not(.disabled)')).map((btn) => {
            btn.classList.add('disabled');
            btn.setAttribute('disabled-by', 'submit');
        });
        fetch(this.action, {
            method: this.method,
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(this.data),
        })
            .then((response) => response.json())
            .then(this.afterSave.bind(this));
    }
    afterSave(data) {
        const event = new CustomEvent("saved", {
            detail: data,
            cancelable: true,
            bubbles: true
        });
        this.dispatchEvent(event);
        if (!event.defaultPrevented) {
            console.log('Saved', this.data);
            if (data.hasOwnProperty('redirect'))
                window.location = data['redirect'];
            else
                this.enableButtons();
        }
    }
    render() {
        return lit_1.html `
            <slot></slot>`;
    }
}
__decorate([
    decorators_js_1.property({ type: String })
], ExtendedForm.prototype, "method", void 0);
__decorate([
    decorators_js_1.property({ type: String })
], ExtendedForm.prototype, "action", void 0);
__decorate([
    decorators_js_1.property({ type: String })
], ExtendedForm.prototype, "redirect", void 0);
__decorate([
    decorators_js_1.property({ type: Boolean })
], ExtendedForm.prototype, "submitunchanged", void 0);
__decorate([
    decorators_js_1.property({ attribute: false })
], ExtendedForm.prototype, "data", void 0);
exports.default = ExtendedForm;
customElements.define("extended-form", ExtendedForm);
