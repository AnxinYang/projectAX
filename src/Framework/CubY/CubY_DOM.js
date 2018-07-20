/**
 * Created by Anxin Yang on 5/26/2018.
 */
class CubY_DOM {
    constructor(_tag,_id,_root) {
        this.tag = this.readValue(_tag) || 'div';
        this.id = this.readValue(_id)|| this.tag + '_' + Math.random()*10000+'_'+Date.now();
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id',this.id);
        this.childrenList = [];
        this.attribute = {};
        this.property = {};
        this.domStyle = {};
        this.updaters = {};
        this.connectionList = [];
        this.parent;
        this.classes = [];
        this.root(_root);

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
    root(_root){
        if(_root){
            _root.appendChild(this.dom);
            this.isRoot = true;
            this.activated();
        }
        return this;
    }
    append(_tag,_id){
        let tag = this.readValue(_tag);
        let id = this.readValue(_id);
        let element = CubY.createElement(tag,id);
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

        if(typeof key === 'object'){
            for(var k in key){
                this.attr(k,key[k])
            }
            return this;
        }

        if(key ==='activated' || key === 'deactivated'){
            value = _value;
        }else{
            value = this.readValue(_value);
            this.dom.setAttribute(key,value);
        }

        this.attribute[key] = value;
        return this;
    }
    prop(key,_value){
        let value;

        if(typeof key === 'object'){
            for(var k in key){
                this.prop(k,key[k])
            }
            return this;
        }

        if(key ==='activated' || key === 'deactivated'){
            value = _value;
        }else{
            value = this.readValue(_value);
            this.dom[key] =  value;
        }

        this.property[key] = value;
        return this;
    }
    on(eventName,_value){
        let value = _value;
        let self = this;
        this.on[eventName] = value;
        this.dom.addEventListener(eventName,function (e) {
            value.call(self,e,self.data)
        });
        return this;
    }
    style(_key,_value){
        let key = this.readValue(_key);
        let value = this.readValue(_value);
        if(typeof key === 'object'){
            for(var k in key){
                this.style(k,key[k])
            }
            return this;
        }
        this.domStyle[key] = value;
        this.dom.style[key] = value;
        return this;
    }
    content(_value){
        let value = this.readValue(_value);
        this.innerText = value;
        this.dom.innerText = value;
        return this;
    }
    getContent(){
        return this.innerText;
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
        if(_selector===undefined || typeof _selector === 'number'){
            this.removeSelf(_selector || _transition);
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

        this.connectionList.forEach(function (connection) {
            connection.insert();
        });

        this.childrenList.forEach(function (child) {
            child.activated();
        });

        if(this.attribute.activated){
            this.attribute.activated.call(this);
        }
    }
    deactivated(){
        this.isActive = false;

        this.connectionList.forEach(function (connection) {
            connection.remove();
        });

        this.childrenList.forEach(function (child) {
            child.deactivated();
        });

        if(this.attribute.deactivated){
            this.attribute.deactivated.call(this);
        }
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
var _CubY_DOM = {
    createElement: function (_tag, _id, _root) {
        return new CubY_DOM(_tag, _id, _root)
    }
};
export default _CubY_DOM