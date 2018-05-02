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
const switchView = (view) =>{
    store.set('view', view);
    cc.pub('setView');
};
var obj = {
    'header':{
        style: headerStyle,
        fields:[
            {name:'home', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Home", handleClick:()=>{switchView('home')}},
            {name:'playground', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Playground", handleClick:()=>{switchView('playground')}},
            {name:'project', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"Project", handleClick:()=>{switchView('project')}},
            {name:'about', type:'Button', styleSet:headerButtonStyleSet, status:'normal', text:"About", handleClick:()=>{switchView('about')}},
        ]
    }
};
window.schemaMap = Object.assign({},window.schemaMap,obj);
