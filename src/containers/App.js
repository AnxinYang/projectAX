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

    render () {
        var currentView = this.state.currentView;
        return (
            <div>
                <Header currentView={currentView} report={report.bind(this)}/>
                <Left currentView={currentView} report={report.bind(this)}/>
                <Main currentView={currentView} report={report.bind(this)}/>
                <Right currentView={currentView} report={report.bind(this)}/>
                <Footer currentView={currentView} report={report.bind(this)}/>
                <Air currentView={currentView} report={report.bind(this)}/>
            </div>
        )
    }
}

export const report = (sender, msg)=>{
    msg.call(this,sender);
};
