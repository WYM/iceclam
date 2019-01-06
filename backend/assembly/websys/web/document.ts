import "allocator/tlsf";

export interface WebElement {
    initialize(): void;
}

/**
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
     * @date 2019-01-05
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