/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';
import Button from './components/inputs/Button'
import FileParser from './components/inputs/FileParser'
import {report} from './pvts/general'

window.componentMap = {
    Button: Button,
    FileParser:FileParser
};
window.getComponent = (name,props)=>{
    return React.createElement(componentMap[name],props);
};

ReactDOM.render(<App/>, document.getElementById('app'));