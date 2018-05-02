/**
 * Created by Anxin Yang on 5/1/2018.
 */
import React, { Component } from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: 'home'
        };
        let self = this;
        cc.sub('setView',(msg)=>{
            let newState = {
                view: store.get('view')
            };
            debug('Main = >' + JSON.stringify(newState));
            self.setState(Object.assign({},self.state, newState));
        });
    }
    render(){
        let FlexBox = componentMap['FlexBox'];
        return(
            <FlexBox schemaName = {this.state.view} type={'FlexBox'} style={{height:'100vh',width:'100vw'}}/>
        )
    }

}
