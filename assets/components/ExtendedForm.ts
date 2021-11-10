import {html, LitElement} from "lit";
import {property} from "lit/decorators.js";

export default class ExtendedForm extends LitElement {

    @property({type: String})
    method: string = 'POST';

    @property({type: String})
    action: string = '';

    @property({type: String})
    redirect: string = '';

    @property({type: Boolean})
    submitunchanged: boolean = false;

    @property({attribute: false})
    data: object = {};

    _initial: object = {};

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", this._handleChange);
        this.addEventListener("click", this.handleSubmit);

        this.initData();
    }

    initData() {
        const inputs: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement[] = Array.from(this.querySelectorAll('input, select, textarea'));
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
            const input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = this.querySelector(`[name="${name}"]`);
            if(input) {
                input.value = value;
            }
        }
        return this;
    }

    enableButtons() {
        // Enable all buttons disabled from submitting
        Array.from(this.querySelectorAll('button[disabled-by="submit"]')).map((b: HTMLButtonElement) => {
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

    handleSubmit(e) {
        // If this event wasn't caused by a submit button, do not proceed
        const wasSubmit = e.composedPath().some((el) => el?.type === 'submit');
        if (!wasSubmit) return false;

        // Disable all buttons in form
        Array.from(this.querySelectorAll('button:not(.disabled)')).map((b: HTMLButtonElement) => {
            b.classList.add('disabled');
            b.setAttribute('disabled-by', 'submit');
        });

        fetch(this.action, {
            method: this.method,
            headers: new Headers({'content-type': 'application/json'}),
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
        const cancelled = !this.dispatchEvent(event);

        if (!cancelled) {
            console.log('Saved', this.data);
        }
        // this.resetInputs();
        // this.enableButtons();
    }

    render() {
        return html`
            <slot></slot>`;
    }
}

customElements.define("extended-form", ExtendedForm);