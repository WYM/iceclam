interface WebSocket {
    binaryType: ArrayBuffer;
    readonly bufferedAmount: i32;
    readonly extensions: string;
    new(url: string, protocols?: string): WebSocket;
}

declare var WebSocket: WebSocket;
// new WebSocket('s');