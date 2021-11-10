import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {SocketController, SocketControllerHost} from "../controllers/SocketController";

@customElement('hydrated-section')
export default class HydratedSection extends LitElement implements SocketControllerHost {
    static styles = css`p { color: blue }`;
    private socketController = new SocketController(this);

    @property({reflect: true})
    resource: string = '';

    @property({reflect: true})
    identifier: string = '';

    onMessage(ev: MessageEvent) {
        const data: object = JSON.parse(ev.data);
        if (data['type'] == 'hydrate') {
            this.hydrate();
        }
        console.log(data);
    }

    async hydrate() {
        const parser: DOMParser = new DOMParser();
        const req: Response = await fetch(window.location.href);
        const doc: Document = parser.parseFromString(await req.text(), 'text/html');
        const selector: string = 'hydrated-section' +
            (this.resource ? `[resource="${this.resource}"]` : '') +
            (this.identifier ? `[identifier="${this.identifier}"]` : '');
        const nextElement = doc.querySelector(selector);
        if (nextElement) this.innerHTML = nextElement.innerHTML;
    }

    render() {
        return html`
            <slot></slot>`;
    }
}
