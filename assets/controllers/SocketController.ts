import {ReactiveController, ReactiveControllerHost} from "lit";

export interface SocketControllerHost extends ReactiveControllerHost {
    onMessage(ev: MessageEvent): void;
}

export class SocketController implements ReactiveController {
    private host: SocketControllerHost;
    static socket: WebSocket;
    static registry: SocketController[] = [];

    constructor(host: SocketControllerHost) {
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
        for(let socketController of SocketController.registry) {
            socketController.host.onMessage(ev);
        }
    }
}