declare function _logi(x: i32): void;
declare function _logf(x: f64): void;
declare function _logl(lo: u32, hi: u32): void; // u64/i64
declare function _log_ref(x: usize): void;
declare function _log_str(x: string): void;

export function log<T>(item: T): void {
    if (isReference<T>()) {
        if (isString<T>()) {
            _log_str(changetype<string>(item));
        } else {
            _log_ref(changetype<usize>(item));
        }
    } else {
        if (isInteger<T>()) {
            if (sizeof<T>() <= 4) {

                // @ts-ignore
                _logi(<i32>item);
            } else {

                // @ts-ignore
                let lo = <u32>item;

                // @ts-ignore
                let hi = <u32>(<u64>item >>> 32);
                _logl(lo, hi);
            }
        } else {

            // @ts-ignore
            _logf(<f64>item);
        }
    }
}

log("abc");
log(123);
log(123.0);
log(<i64>123);

