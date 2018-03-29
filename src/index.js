/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';
import Button from './components/inputs/Button'
import {report} from './pvts/general'

window.componentMap = {
    Button: Button
};
export const getComponent = (name,props)=>{
    return React.createElement(componentMap[name],props);
};

ReactDOM.render(<App/>, document.getElementById('app'));