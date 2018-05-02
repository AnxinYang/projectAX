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
        execute(this,this.props.init);
        execute(this,this.AXWillMount);
    }
    componentDidMount(){
        execute(this,this.AXDidMount);
    }
    componentWillUpdate(){
        execute(this,this.props.init);
        execute(this,this.AXWillUpdate);
    }
    componentDidUpdate(){
        execute(this,this.AXDidUpdate);
    }
    componentWillUnmount(){
        this.unSub();
        execute(this,this.AXWillUnmount);
    }
}