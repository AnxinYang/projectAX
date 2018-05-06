/**
 * Created by Anxin Yang on 5/1/2018.
 */
import React, {Component} from 'react';

var obj = {
    'home':{
        fields:[
            {name:'header', schemaName:'header', type:'FlexBox'}
        ]
    },
    'playground':{
        fields:[
            {name:'header', schemaName:'header', type:'FlexBox'},
            {name:'playground', type: 'networkDiagram', nodeKey:'nodeList', linkKey:'linkList'}
        ]
    },
    'project':{
        fields:[
            {name:'header', schemaName:'header', type:'FlexBox'}
        ]
    },
    'about':{
        fields:[
            //{name:'header', schemaName:'header', type:'FlexBox'}
        ]
    }
};
window.schemaMap = Object.assign({},window.schemaMap,obj);
