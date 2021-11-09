import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {SocketController} from "../controllers/SocketController";

@customElement('hydrated-section')
export default class HydratedSection extends LitElement {
    static styles = css`p { color: blue }`;
    private socketController = new SocketController(this);

    @property({reflect: true})
    resource: string = '';

    @property({reflect: true})
    identifier: string = '';

    async hydrate() {
        const parser: DOMParser = new DOMParser();
        const req: Response = await fetch(window.location.href);
        const doc: Document = parser.parseFromString(await req.text(), 'text/html');
        const nextElement = doc.querySelector(`[tag="${this.tag}"]`);
        if(nextElement) this.innerHTML = nextElement.innerHTML;
    }

    render() {
        return html`<slot></slot>`;
    }
}
