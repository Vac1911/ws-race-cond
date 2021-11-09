"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const SocketController_1 = require("../controllers/SocketController");
let HydratedSection = class HydratedSection extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.socketController = new SocketController_1.SocketController(this);
        this.resource = '';
        this.identifier = '';
    }
    hydrate() {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new DOMParser();
            const req = yield fetch(window.location.href);
            const doc = parser.parseFromString(yield req.text(), 'text/html');
            const nextElement = doc.querySelector(`[tag="${this.tag}"]`);
            if (nextElement)
                this.innerHTML = nextElement.innerHTML;
        });
    }
    render() {
        return lit_1.html `<slot></slot>`;
    }
};
HydratedSection.styles = lit_1.css `p { color: blue }`;
__decorate([
    decorators_js_1.property({ reflect: true })
], HydratedSection.prototype, "resource", void 0);
__decorate([
    decorators_js_1.property({ reflect: true })
], HydratedSection.prototype, "identifier", void 0);
HydratedSection = __decorate([
    decorators_js_1.customElement('hydrated-section')
], HydratedSection);
exports.default = HydratedSection;
//# sourceMappingURL=HydratedSection.js.map