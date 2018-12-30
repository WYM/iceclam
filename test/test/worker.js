
const { parentPort } = require('worker_threads');

parentPort.addListener('message', function (e) {
    console.log("message", e);
    this.postMessage(e.data);
}, false);
// console.log(parentPort.add);