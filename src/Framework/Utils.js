/**
 * Created by Anxin Yang on 5/1/2018.
 */
const DEBUGMODE = true;
const obj = {
    execute: (f, options) => {
        if (f !== undefined) {
            return f(options);
        }
    },
    ifExist: (key, then) => {
        if (key !== undefined) {
            if (then === undefined) {
                then = key !== undefined;
                return then;
            }
            execute(then);
        }
    },

    debug: (string) => {
        if (DEBUGMODE) {
            console.log(string);
        }
    }
};
Object.assign(window,obj);