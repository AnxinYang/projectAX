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
        debug('Init: cc');
    }

    pub(topic, msg){
        let topicMap = this.topicMap;
        let updater = ()=>{
            let topicList = topicMap[topic];
            topicList.forEach((reg)=>{
                reg.updater(msg);
                debug('Pub: ' + topic + ' => ' + reg.ticket.owner);
            })
        };
        ifExist(topicMap[topic],updater);

    }

    sub(topic, updater, owner){
        let topicMap = this.topicMap;
        let topicList = topicMap[topic];

        if(topicList===undefined){
            topicList = []
        }

        let topicIndex = topicList.length;
        let topicTicket = {
            index: topicIndex,
            topic: topic,
            owner: owner || 'Common'
        };

        topicList[topicIndex] = {
            ticket: topicTicket,
            updater: updater
        };

        this.topicMap[topic] = topicList;
        debug('Sub: '  + (owner||'Common') + ' => ' + topic);



        return topicTicket;
    }

    unSub(topicTicket){
        let topic = topicTicket.topic;
        let topicIndex = topicTicket.index;
        let owner = topicTicket.owner;
        let topicMap = this.topicMap;
        let topicList = topicMap[topic] || [];
        topicList.splice(topicIndex,1);

        debug('Removed: ' + owner + ' <= ' + topic);

        if(topicList.length===0){
            delete topicMap[topic];
            debug('Removed: [' + topic + '] - All tickets are removed');
        }

    }

}

