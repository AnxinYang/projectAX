const EMPTY_FUNCTION = ()=>{};
class CubY_Core{
    constructor(_props){
        let props = props || {};
        let self = this;
        this.init(props);
    }
    init(_props){
        let props = _props || {};
        this.debugMode = props.debug || false;
        this.dataMap = {};
        this.actionMap = {};
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

    storeDataArray(_array, _idKey, _itemProcessor, _options, _callback) {
        var self = this;
        var options = _options || {};
        var idKey = _idKey || 'id';
        var callback = _callback || EMPTY_FUNCTION;
        var array = _array || [];
        var itemList = [];
        var itemProcessor = _itemProcessor || EMPTY_FUNCTION;

        array.forEach(function (_item) {
            var key = _item[idKey];
            if (key === undefined) {
                return;
            }

            var item = self.storeValue(key, _item, _options);

            itemProcessor(item);
            itemList.push(item);
        });

        callback(_array, itemList);
        return itemList;
    };

    storeValue(_key, _value, _options, _callback) {
        var options = _options || {};
        var store = this.dataMap;
        var key = _key;
        var callback = _callback || EMPTY_FUNCTION;
        var newValue = _value;
        var item = store[key];
        if(item!==undefined && item === Object(item) && options.overwrite!==true) {
            item = Object.assign(item, newValue);
        }else {
            item = newValue;
        }
        this.dataMap[key] = item;

        callback(item);
        this.react(key);
        return item;
    };
    getValue(_key) {
        var key = _key || '';
        return this.dataMap[key];
    };

    connect(_key,_action) {
        if(_key===undefined || _action===undefined){
            return false;
        }

        var actionMap = this.actionMap;
        var actionList = actionMap[_key] || [];
        actionList.push(_action);
        actionMap[_key] = actionList;
    };
    react(_key) {
        var self = this;
        if(_key===undefined){
            return false;
        }

        var actionMap = this.actionMap;
        var actionList = actionMap[_key] || [];
        actionList.forEach((action)=> {
            var value = self.getValue(_key);
            action(value);
        })
    };
    debug(str) {
        if(this.debugMode){
            console.log('DEBUG: ' + str);
        }
    };
}
const _CubY_Core = new CubY_Core();
export default _CubY_Core;
