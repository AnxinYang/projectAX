/**
 * Created by Anxin Yang on 5/1/2018.
 */
import AXcomponent from './AXcomponent';
import React from 'react';
export default class Main extends AXcomponent{
    constructor(props){
        super(props);
        this.state = {
            view: 'home'
        };
        let self = this;
        this.sub('setView',(msg)=>{
            let newState = {
                view: store.get('view')
            };
            self.setState(Object.assign({},self.state, newState));
        });
    }
    render(){
        let FlexBox = componentMap['FlexBox'];
        return(
            <FlexBox name={this.state.view} schemaName = {this.state.view} type={'FlexBox'} style={{height:'100vh',width:'100vw'}}/>
        )
    }

}
