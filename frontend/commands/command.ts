/**
 *
 *
 * @author 
 * @date 2019-01-05
 * @export
 * @class Command
 */
export class Command {
    public getCommand(): Command {
        return {
            commit: this.commit.bind(this)
        } as Command;
    }

    public commit(buffer: Float64Array): void {
        console.log(buffer);
    }
}