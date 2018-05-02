import React, { Component } from 'react';
export default class AXcomponent extends Component{
    constructor(props){
        super(props);
        this.subList = [];
        this.sub('test',()=>{

        })
    }
    sub(topic, updater){
        this.subList.push(cc.sub(topic,updater));
    }
    pub(topic, msg){
        cc.pub(topic,msg);
    }
    unSub(){
        this.subList.forEach((ticket)=>{
            cc.unSub(ticket)
        })
    }
    componentWillMount(){
        execute(this.AXWillMount);
    }
    componentDidMount(){
        execute(this.AXDidMount);
    }
    componentWillUpdate(){
        execute(this.AXWillUpdate);
    }
    componentDidUpdate(){
        execute(this.AXDidUpdate);
    }
    componentWillUnmount(){
        this.unSub();
        execute(this.AXWillUnmount);
    }
}