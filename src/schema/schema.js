/**
 * Created by Anxin Yang on 5/1/2018.
 */
import header from './header';
import route from './route';

window.getSchema = (key) =>{
    return window.schemaMap&& window.schemaMap[key];
};