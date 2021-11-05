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
const SocketController_1 = require("../controllers/SocketController");
let HydratedSection = class HydratedSection extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.socketController = new SocketController_1.SocketController(this);
        this.resource = '';
        this.identifier = '';
    }
    render() {
        return lit_1.html `<slot></slot>`;
    }
};
HydratedSection.styles = lit_1.css `p { color: blue }`;
__decorate([
    decorators_js_1.property()
], HydratedSection.prototype, "resource", void 0);
__decorate([
    decorators_js_1.property()
], HydratedSection.prototype, "identifier", void 0);
HydratedSection = __decorate([
    decorators_js_1.customElement('hydrated-section')
], HydratedSection);
exports.default = HydratedSection;
