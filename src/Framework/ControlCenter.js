/**
 * Created by Anxin Yang on 5/1/2018.
 */
import Store from './Store';
import WebPort from './WebPort';

export default class ControlCenter {
    constructor(){
        this.init();
    }

    init(){
        window.cc = this;
        this.topicMap = {};
        debug('cc init');
    }

    pub(topic, msg){
        let topicMap = this.topicMap;
        let updater = ()=>{
            let topicList = topicMap[topic];
            topicList.forEach((sub)=>{
                sub(msg);
            })
        };
        ifExist(topicMap[topic],updater);
        debug('Pub: ' + topic);
    }

    sub(topic, updater){
        let topicMap = this.topicMap;
        let topicList = topicMap[topic];

        if(topicList===undefined){
            topicList = []
        }
        topicList.push(updater);
        this.topicMap[topic] = topicList;
        debug('Sub: ' + topic);
    }

}

