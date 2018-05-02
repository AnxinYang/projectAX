/**
 * Created by Anxin Yang on 5/1/2018.
 */
const DEBUGMODE = true;
const obj = {
    execute: (owner,f, options) => {
        if (f !== undefined) {
            return f.call(owner
                ,options);
        }
    },
    ifExist: (key, then) => {
        if (key !== undefined) {
            if (then === undefined) {
                then = key !== undefined;
                return then;
            }
            execute(undefined,then);
        }
    },

    debug: (string) => {
        if (DEBUGMODE) {
            console.log(string);
        }
    }
};
Object.assign(window,obj);