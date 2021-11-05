import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {SocketController} from "../controllers/SocketController";

@customElement('hydrated-section')
export default class HydratedSection extends LitElement {
    static styles = css`p { color: blue }`;
    private socketController = new SocketController(this);

    @property()
    resource: string = '';

    @property()
    identifier: string = '';

    render() {
        return html`<slot></slot>`;
    }
}
