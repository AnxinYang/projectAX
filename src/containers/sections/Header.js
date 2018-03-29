/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React, {Component} from 'react';
import Button from '../../components/inputs/Button'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.report = props.report;
    }
    componentDidMount(){
    }

    render () {
        return (
            <div style={headerStyle}>
                <Button styleSet={headerButtonStyleSet} action='setView' value="Home" text="Home" handleClick={this.report}/>
                <Button styleSet={headerButtonStyleSet} action='setView' value="Playground" text="Playground" handleClick={this.report}/>
                <Button styleSet={headerButtonStyleSet} action='setView' value="Project" text="Project" handleClick={this.report}/>
                <Button styleSet={headerButtonStyleSet} action='setView' value="About" text="About" handleClick={this.report}/>
            </div>
        )
    }
}
const headerStyle = {
    display:'flex',
    flexWrap: 'wrap',
    background: '#0abde3',
    width: '100vw'
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