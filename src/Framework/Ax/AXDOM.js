/**
 * Created by Anxin Yang on 5/26/2018.
 */
import AXCore from './core';
export default class AXDOM {
    constructor(_tag,_id,_root) {
        let id = this.readValue(_id)|| 'self';
        let tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(tag);
        this.dom.setAttribute('id',id);
        this.childrenGroup = {};
        this.attribute = {};
        this.style = {};

        if(_root){
            _root.appendChild(this.dom);
        }
        let self = this;
        this.update = ()=>{
            self.updater.call(self,self.data,arguments);
        }
    }
    setUpdater(updater){
        this.updater = updater;
        return this;
    }
    bind(data){
        this.data = data;
        return this;
    }
    append(_tag,_id){
        let tag = this.readValue(_tag);
        let id = this.readValue(_id);
        let elementList = this.childrenGroup[tag] || [];
        let element = new AXDOM(tag,id);
        elementList.push(element);
        this.childrenGroup[tag] = elementList;
        this.dom.appendChild(element.dom);
        return element;
    }
    attr(key,_value){
        let value = this.readValue(_value);
        this.attribute[key] = value;
        this.dom.setAttribute(key,value);
        return this;
    }
    on(key,_value){
        let value = _value;
        let self = this;
        this.on[key] = value;
        this.dom.addEventListener(key,function (e) {
            value.call(self,self.data,e)
        });
        return this;
    }
    style(_key,_value){
        let key = this.readValue(_key);
        let value = this.readValue(_value);
        this.style[key] = value;
        this.dom.style[key] = value;
        return this;
    }
    content(_value){
        let value = this.readValue(_value);
        this.innerHTML = value;
        this.dom.innerHTML = value;
        return this;
    }
    appendClass(_className){
        let className = this.readValue(_className);
        let classes = this.classes || [];
        classes.push(className);
        this.dom.classList.add(className);
        this.classes = classes;
        return this;
    }
    remove(_tag){
        let tag =this.readValue(_tag);
        if(tag) {
            let elementList = this.childrenGroup[tag] || [];
            elementList.forEach((elem)=> {
                elem.remove();
            })
        }else{
            this.dom.remove();
        }
        return this;
    }
    readValue(_value){
        let value = _value;
        if(typeof value === "function"){
            return value.call(this,this.data);
        }else{
            return value;
        }
    }
}