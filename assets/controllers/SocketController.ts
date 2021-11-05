import {ReactiveController, ReactiveControllerHost} from "lit";

export class SocketController implements ReactiveController {
    private host: ReactiveControllerHost;
    static socket: WebSocket;
    static registry: SocketController[] = [];

    constructor(host: ReactiveControllerHost) {
        SocketController.init();
        (this.host = host).addController(this);
        SocketController.registry.push(this);
    }

    static init() {
        if(!SocketController.socket) {
            SocketController.socket = new WebSocket('ws://' + location.host);
            SocketController.socket.onmessage = SocketController.onMessage;
        }
    }

    hostConnected() {
    }

    hostDisconnected() {
    }

    static onMessage(ev: MessageEvent) {
        console.log(ev);
    }
}