/**
 * Created by Anxin Yang on 5/1/2018.
 */
/**
 * Created by Anxin Yang on 5/1/2018.
 */
import React, {Component} from 'react';
const headerStyle = {
    display:'flex',
    flexWrap: 'wrap',
    background: '#0abde3',
    width: '100vw',
    height: 'min-content'
};
const headerButtonStyleSet={
    normal:{
        padding: '1em',
        background: '#0abde3',
        color: 'white',
        cursor: 'pointer',
        minWidth:'128px',
        textAlign:'center',
        transition: '0.3s'
    },
    mouseOver:{
        color: '#0abde3',
        background: 'white'
    },
    selected:{
        color: '#0abde3',
        background: 'white'
    }
};
var switchView = (view) =>{
    store.set('view', view);
    cc.pub('setView');
};
function setButtonStatus (){
    var status = store.get('view') === this.props.name?'selected':'normal';
    this.setState(Object.assign({},this.state,{status:status}));
};
var obj = {
    'header':{
        style: headerStyle,
        fields:[
            {name:'home', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Home", subList:[{topic:'setView',updater: setButtonStatus}], handleClick:()=>{switchView('home')}},
            {name:'playground', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Playground", subList:[{topic:'setView',updater: setButtonStatus}], handleClick:()=>{switchView('playground')}},
            {name:'project', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Project", subList:[{topic:'setView',updater: setButtonStatus}], handleClick:()=>{switchView('project')}},
            {name:'about', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"About", subList:[{topic:'setView',updater: setButtonStatus}], handleClick:()=>{switchView('about')}},
        ]
    }
};
window.schemaMap = Object.assign({},window.schemaMap,obj);
