/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React, {Component} from 'react';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            isMouseOver: false
        };
        this.props = props;
    }
    handleMouseOver(){
        var newState = {
            isMouseOver: true
        };
        this.setState(newState);
    }
    handleMouseLeft() {
        var newState = {
            isMouseOver: false
    };
        this.setState(newState);
    }

    handleMouseClick(e){
        var handleClick = this.props.handleMouseClick;
        handleClick&&handleClick(e);
    }

    render(){
        var text = this.props.text||'Button';
        var styleSet = this.props.styleSet || {normal:{cursor:'Pointer'}};
        var status = this.props.status || 'normal';
        var style = styleSet[status] || {};
        if(this.state.isMouseOver){
            style = styleSet['mouseOver'] || style;
        }
        return(
            <div style={style}
                 onClick={this.handleMouseClick.bind(this)}
                 onMouseLeave={this.handleMouseLeft.bind(this)}
                 onMouseOver={this.handleMouseOver.bind(this)}>
                {text}
            </div>
        )
    }
}