/**
 * Created by Anxin Yang on 5/1/2018.
 */
/**
 * Created by Anxin Yang on 5/1/2018.
 */
import React, {Component} from 'react';
var obj = {
    'header':{
        fields:[
            {name:'header', type:'html', html:function (container) {
                var Button = componentMap['Button'];
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
                    }
                };

                var switchView = (view) =>{
                    store.set('view', view);
                    cc.pub('setView');
                };

                return (
                    <div style={headerStyle}>
                        <Button styleSet={headerButtonStyleSet} action='setView' value="home" text="Home" handleClick={()=>{switchView('home')}}/>
                        <Button styleSet={headerButtonStyleSet} action='setView' value="playground" text="Playground" handleClick={()=>{switchView('playground')}}/>
                        <Button styleSet={headerButtonStyleSet} action='setView' value="project" text="Project" handleClick={()=>{switchView('project')}}/>
                        <Button styleSet={headerButtonStyleSet} action='setView' value="about" text="About" handleClick={()=>{switchView('about')}}/>
                    </div>
                )
            }}
        ]
    }
};
window.schemaMap = Object.assign({},window.schemaMap,obj);
