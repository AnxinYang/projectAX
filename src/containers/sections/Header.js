/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React, {Component} from 'react';
import Button from '../../components/inputs/Button'
const headerStyle = {
    display:'flex',
    flexWrap: 'wrap'
};
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTag:'Home'
        }
        this.report = props.report;
    }
    componentDidMount(){
        this.report(this,()=>{
            console.log('Header Mounted');
        })
    }
    render () {
        return (
            <div style={headerStyle}>
                <Button text="Home"/>
                <Button text="Playground"/>
            </div>
        )
    }
}