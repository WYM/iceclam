import "allocator/tlsf";
import { log, info } from "./include_websys_test";
// @ts-ignore
export { memory };

export function test1(): void {
    log(1);
}

export function test2(): void {
    info(2);
}