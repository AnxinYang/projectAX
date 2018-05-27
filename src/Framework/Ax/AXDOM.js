/**
 * Created by Anxin Yang on 5/26/2018.
 */
import AXCore from './core';
export default class AXDOM {
    constructor(_tag,_id,_root) {
        this.id = this.readValue(_id)|| 'self';
        this.tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id',this.id);
        this.childrenGroup = {};
        this.childrenList = [];
        this.attribute = {};
        this._style = {};

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
        this.childrenList.push(element);
        this.childrenGroup[tag] = elementList;
        this.dom.appendChild(element.dom);
        return element;
    }
    appendElement(_AXDOM){
        let axdom = this.readValue(_AXDOM);
        let tag = axdom.tag;
        let elementList = this.childrenGroup[tag] || [];
        let element = axdom;
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
        this._style[key] = value;
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
    select(_selector){
        let selector = _selector.charAt(0);
        let name = _selector.substring(1);
        switch (selector){
            case '#':
                return this.selectById(name);
            case '.':
                return this.selectByClassName(name);
            default:
                return this.childrenGroup[_selector];
        }
    }
    selectById(id){
        let childrenList = this.childrenList;
        let target;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.id === id){
                target = child;
                break;
            }
        }
        return target;
    }
    selectByClassName(className){
        let childrenList = this.childrenList;
        let targetList = [];
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.classes.indexOf(className)>-1){
                targetList.push(child);
            }
        }
        return targetList;
    }
    removeByTag(_tag){
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