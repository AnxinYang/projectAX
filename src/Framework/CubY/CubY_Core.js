const EMPTY_FUNCTION = ()=>{};
class CubY_Core{
    constructor(_props){
        let props = props || {};
        let self = this;
        this.init(props);
    }

    init(_props){
        let props = _props || {};
        this.dataMap = {};
        this.connectionMap = {};
        this.browser = this.getBrowser();
        window.cc = this;
    }

    getBrowser(){
        let isIE = false;
        let isChrome = false;
        let isOpera = false;
        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
            isOpera = true;
            return 'opera';
        }
        if(typeof InstallTrigger !== 'undefined'){
            return 'firefox';
        }
        if(/constructor/i.test(window.HTMLElement) || (function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            })(!window['safari'] || safari.pushNotification)){
            return 'safari';
        }
        if(false || !!document.documentMode){
            Object.assign = function () {
                var output = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        var obj = arguments[i];
                        if (obj.hasOwnProperty(key))
                            output[key] = obj[key];
                    }
                }
                return output;
            };
            isIE =true;
            return 'ie';
        }
        if(!isIE && !!window.StyleMedia){
            return 'edge';
        }
        if(!!window.chrome && !!window.chrome.webstore){
            isChrome = true
            return 'chrome';
        }
        if((isChrome || isOpera) && !!window.CSS){
            return 'blink';
        }
    }

    storeDataArray(_array, _idKey, _options, _callback) {
        var self = this;
        var options = _options || {};
        var idKey = _idKey || 'id';
        var callback = _callback || EMPTY_FUNCTION;
        var array = _array || [];
        var itemList = [];
        var itemProcessor = options.itemProcessor || EMPTY_FUNCTION;

        array.forEach(function (_item) {
            var key = _item[idKey];
            if (key === undefined || self.readValue(options.skipFun, _item)) {
                return;
            }

            var item = self.storeValue(key, _item, _options);

            itemProcessor(item);
            itemList.push(item);
        });

        callback(_array, itemList);
        return itemList;
    };

    storeValue(_key, _value, _options) {
        var options = _options || {};
        var store = this[options.store] || this.dataMap;
        var key = _key;
        var newValue = _value;
        var item = store[key];
        var shouldReact = true;
        if(item!==undefined && item === Object(item) && options.overwrite!==true) {
            item = Object.assign(item, newValue);
        }else {
            shouldReact = (item!==newValue);
            item = newValue;
        }
        this.dataMap[key] = item;
        if(shouldReact || options.forceReact) {
            this.react(key);
        }
        return item;
    };
    getValue(_key, options = {}) {
        var key = _key || '';
        let store = options.store || 'dataMap'
        if(options.caseSensitive!==false){
            return this[store];
        }else{
            for(var K in this[store]){
                if(this[store].hasOwnProperty(K)){
                    if(K.toLowerCase()===key.toLowerCase()){
                        return this[store][K];
                    }
                }
            }
            return undefined;
        }

    };

    connect(_key){
        let newConector = new CubY_Connector(_key, this);
        return newConector;
    }
    react(key){
        var self = this;
        var connectionMap = this.connectionMap;
        var connectorMap = connectionMap[key] || {};
        var newValue = self.getValue(key);
        for(var id in connectorMap){
            if(connectorMap.hasOwnProperty(id)){
                connectorMap[id].run(newValue)
            }
        }
    }
    readValue(_value, data){
        let value = _value;
        if(typeof value === "function"){
            return value.call(this,data);
        }else{
            return value;
        }
    }
    isObjectEmpty(obj){
        if(!obj){
            return true
        }
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }

    debug(str) {
        if(this.getValue('DEBUG_MODE')){
            console.log('DEBUG: ' + str);
        }
    };
}
const _CubY_Core = new CubY_Core();
export default _CubY_Core;

class CubY_Connector{
    constructor(key, core){
        let self = this;
        this.id =  'connector_' + Math.random()*10000 +'_'+Date.now();
        this.bindingKey = key;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;
        };
        this.remove = function () {
            try {
                if(core.connectionMap[self.bindingKey]){
                    if(core.connectionMap[self.bindingKey][self.id]){
                        delete core.connectionMap[self.bindingKey][self.id];
                    }
                    if (CubY.isObjectEmpty(core.connectionMap[self.bindingKey])) {
                        delete core.connectionMap[self.bindingKey];
                    }
                }
            }catch (e){
                console.warn('[Warning]: Connector remove method reference error.')
            }
        };
        this.insert();
    }
    to(action){
        this.action = action;
        return this;
    }
    belong(owner){
        this.owner = owner;
        owner.connectionList.push(this);
        return this;
    }
    run(newValue){
        if(typeof this.action === 'function'){
            if(this.owner){
                if(this.owner.isActive) {
                    this.action.call(this.owner, newValue);
                }
            }else {
                this.action(newValue);
            }
        }
    }
}
