import "allocator/tlsf";

export interface WebElement {
    initialize(): void;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Document
 * 
 *
 * @author 
 * @date 2019-01-05
 * @export
 * @class document
 */
export class document {

    /**
     * 创建一个Element对象
     * create a new element object
     *
     * @author 
     * @static
     * @template T
     * @returns {T}
     * @memberof document
     */
    public static getElementById<T extends WebElement>(): T {
        let inst = instantiate<T>();
        inst.initialize();
        return inst;
    }
}