/**
 * Created by Anxin Yang on 5/26/2018.
 */
import AXCore from './CubY_Core';
export default class CubY_DOM {
    constructor(_tag,_id,_root) {
        this.id = this.readValue(_id)|| 'self';
        this.tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id',this.id);
        this.childrenList = [];
        this.attribute = {};
        this.domStyle = {};
        this.updaters = {};
        this.parent = {};
        this.classes = [];

        if(_root){
            _root.appendChild(this.dom);
            this.isRoot = true;
        }
        let self = this;
        this.updater = function (name) {
            let updater =this.updaters[name];
            return function () {
                if(updater) {
                    updater.call(self, self.data, arguments);
                }
            }
        };
    }
    setUpdater(name,updater){
        this.updaters[name] = updater;
        return this;
    }
    bind(data){
        this.data = data;
        return this;
    }
    append(_tag,_id){
        let tag = this.readValue(_tag);
        let id = this.readValue(_id);
        let element = new CubY_DOM(tag,id);
        this.appendElement(element);
        return element;
    }
    appendElement(CubY_DOM){
        let element = this.readValue(CubY_DOM);
        element.parent = this;

        this.childrenList.push(element);
        this.dom.appendChild(element.dom);
        if(this.isActive || this.isRoot) {
            element.activated();
        }
        return element;
    }
    attr(key,_value){
        let value;
        if(key ==='activated' || key === 'deactivated'){
            value = _value;
        }else{
            value = this.readValue(_value);
            this.dom.setAttribute(key,value);
        }

        this.attribute[key] = value;
        return this;
    }
    on(eventName,_value){
        let value = _value;
        let self = this;
        this.on[eventName] = value;
        this.dom.addEventListener(eventName,function (e) {
            value.call(self,e,self.data,)
        });
        return this;
    }
    style(_key,_value){
        let key = this.readValue(_key);
        let value = this.readValue(_value);
        this.domStyle[key] = value;
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
                return this.selectByTag(_selector);
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
    selectByTag(_tag){
        let childrenList = this.childrenList;
        let targetList = [];
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.tag === _tag){
                targetList.push(child);
            }
        }
        return targetList;
    }
    remove(_selector,_transition){
        if(_selector===undefined){
            this.removeSelf(_transition);
            return;
        }
        let selector = _selector.charAt(0);
        let name = _selector.substring(1);
        let target;
        switch (selector){
            case '#':
                this.removeById(name,_transition);
                break;
            case '.':
                this.removeByClassName(name,_transition);
                break;
            default:
                this.removeByTag(_selector,_transition);
        }
    }
    removeById(id,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.id === id){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
                break;
            }
        }
    }
    removeByClassName(className,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.classes.indexOf(className)>-1){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
            }
        }
    }
    removeByTag(_tag,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.tag === _tag){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
            }
        }
    }
    removeSelf(_transition){
        /*this.childrenList.forEach(function (child) {
            child.remove();
        });*/
        let self = this;
        this.deactivated();
        if(_transition) {
            this.deactivatedTimer = setTimeout(function () {
                self.dom.remove();
            },_transition)
        }else{
            self.dom.remove();
        }
        if(this.parent){
            let childrenList = this.parent.childrenList;
            for(var i = 0; i<childrenList.length;i++){
                let child = childrenList[i];
                if(child === this){
                    childrenList.splice(i,1);
                }
            }
        }
        /*for(var key in this){
            delete this[key]
        }*/
    }
    activated(){
        this.isActive = true;
        if(this.deactivatedTimer){
            clearTimeout(this.deactivatedTimer)
        }
        if(this.attribute.activated){
            this.attribute.activated.call(this);
        }

        this.childrenList.forEach(function (child) {
            child.activated();
        });
    }
    deactivated(){
        this.isActive = false;

        if(this.attribute.deactivated){
            this.attribute.deactivated.call(this);
        }

        this.childrenList.forEach(function (child) {
            child.deactivated();
        });
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