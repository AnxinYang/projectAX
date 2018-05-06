/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// main app
import schema from './schema/schema';
import Utils from './Framework/Utils';
import ControlCenter from './Framework/ControlCenter';
import Button from './components/inputs/Button';
import FlexBox from './components/FlexBox';
import Main from './components/Main';
import networkDiagram from './components/playground/networkDiagram'
window.componentMap = {
    Button: Button,
    FlexBox: FlexBox,
    networkDiagram:networkDiagram
};

window.debugMode =true;

const cc = new ControlCenter();

export const getComponent = (name,props)=>{
    return React.createElement(componentMap[name],props);
};

ReactDOM.render(
    <Main name={'mainContainer'}/>,
    document.getElementById('app'));