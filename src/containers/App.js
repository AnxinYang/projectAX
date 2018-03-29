/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React, {Component} from 'react';
import Header from './sections/Header';
import Left from './sections/Left';
import Right from './sections/Right';
import Main from './sections/Main';
import Footer from './sections/Footer';
import Air from './sections/Air';
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            currentView:'Home'
        }
    }
    handleReport(msg){
        console.log(msg.action+': '+msg.value);
        var action = msg.action;
        var newState = {};
        switch (action){
            case 'setView':
                newState.currentView = msg.value;
                this.setState(newState);
        }
    }
    render () {
        var currentView = this.state.currentView;
        var self = this;
        var report = (msg)=>{
            self.handleReport(msg);
        };
        return (
            <div>
                <Header key="header" currentView={currentView} report={report}/>
                <Left key="left" currentView={currentView} report={report}/>
                <Main key='main' currentView={currentView} report={report}/>
                <Right key='right'  currentView={currentView} report={report}/>
                <Footer key='footer' currentView={currentView} report={report}/>
                <Air key='air' currentView={currentView} report={report}/>
            </div>
        )
    }
}

