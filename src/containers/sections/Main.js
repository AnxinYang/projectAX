/**
 * Created by Anxin Yang on 3/28/2018.
 */
import React, {Component} from 'react';
import FileParser from '../../components/inputs/FileParser'
export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            currentContainer:'Home'
        }
    }
    render () {
        var numCol = 2;
        var width = 100/2-5;
        return(
            <div style={{border:'2px solid black', display:'flex',flexWrap:'wrap'}}>
                <div style={{paddingBottom:'1em',paddingRight:'12px',justifyContent:'space-between', display:'flex','width':width+'%'}}><label style={{flexGrow:1}}>Inpudsdsaddadsadadsadt1</label><input style={{flexGrow:1}}/></div>
                <div style={{paddingBottom:'1em',paddingRight:'12px',justifyContent:'space-between', display:'flex','width':width+'%'}}><label style={{flexGrow:1}}>Inpuds</label><input style={{flexGrow:1}}/></div>
                <div style={{paddingBottom:'1em',paddingRight:'12px',justifyContent:'space-between', display:'flex','width':width+'%'}}><label style={{flexGrow:1}}>Insadt1</label><input style={{flexGrow:1}}/></div>
                <div style={{paddingBottom:'1em',paddingRight:'12px',justifyContent:'space-between', display:'flex','width':width+'%'}}><label style={{flexGrow:1}}>Inpudsdsassssssssssssssssssssssssssssssssssdddsadt1</label><input style={{flexGrow:1}}/></div>
            </div>
        )
    }
}