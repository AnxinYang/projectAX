import React, { Component } from 'react';
export default class AXcomponent extends Component{
    constructor(props){
        super(props);
        let name = this.props.name || 'Common';
        this.subList = [];
        this.sub(name + 'Reg',(msg)=>{
            //Maybe do something here later.
        });
        let subList = this.props.subList || [];
        subList.forEach((sub)=>{
            this.sub(sub.topic, sub.updater.bind(this))
        })
    }


    sub(topic, updater){
        let name = this.props.name || 'Common';
        this.subList.push(cc.sub(topic, updater, name));
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
        if(this.props.init)
            this.props.init.call(this);
        execute.call(this,this.AXWillMount);
    }
    componentDidMount(){
        execute(this.AXDidMount);
    }
    componentWillUpdate(){
        if(this.props.init)
            this.props.init.call(this);
        execute.call(this,this.AXWillUpdate);
    }
    componentDidUpdate(){
        execute.call(this,this.AXDidUpdate);
    }
    componentWillUnmount(){
        this.unSub();
        execute.call(this,this.AXWillUnmount);
    }
}