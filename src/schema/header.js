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
                var currentView = store.get('view');
                
                return (
                    <div style={headerStyle}>
                        <Button styleSet={headerButtonStyleSet} status={(currentView==='home')?'selected':'normal'} text="Home" handleClick={()=>{switchView('home')}}/>
                        <Button styleSet={headerButtonStyleSet} status={(currentView==='playground')?'selected':'normal'} text="Playground" handleClick={()=>{switchView('playground')}}/>
                        <Button styleSet={headerButtonStyleSet} status={(currentView==='project')?'selected':'normal'} text="Project" handleClick={()=>{switchView('project')}}/>
                        <Button styleSet={headerButtonStyleSet} status={(currentView==='about')?'selected':'normal'} text="About" handleClick={()=>{switchView('about')}}/>
                    </div>
                )
            }}
        ]
    }
};
window.schemaMap = Object.assign({},window.schemaMap,obj);
