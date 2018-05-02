/**
 * Created by Anxin Yang on 5/1/2018.
 */
/**
 * Created by Anxin Yang on 3/28/2018.
 */
window.storeMap = {};
 const Store = {

    set(key,data){
        window.storeMap[key] = data;
    },
    get(key){
        return window.storeMap[key];
    }

};
window.store = Store;
export default Store;

