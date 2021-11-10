"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketController = void 0;
class SocketController {
    constructor(host) {
        SocketController.init();
        (this.host = host).addController(this);
        SocketController.registry.push(this);
    }
    static init() {
        if (!SocketController.socket) {
            SocketController.socket = new WebSocket('ws://' + location.host);
            SocketController.socket.onmessage = SocketController.onMessage;
        }
    }
    hostConnected() {
    }
    hostDisconnected() {
    }
    static onMessage(ev) {
        for (let socketController of SocketController.registry) {
            socketController.host.onMessage(ev);
        }
    }
}
exports.SocketController = SocketController;
SocketController.registry = [];
//# sourceMappingURL=SocketController.js.map