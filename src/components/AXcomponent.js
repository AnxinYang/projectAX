import React, { Component } from 'react';
export default class AXcomponent extends Component{
    constructor(props){
        super(props);
        let name = this.props.name || 'Common';
        this.subList = [];
        this.sub(name + 'Reg',()=>{
            //Maybe do something here later.
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