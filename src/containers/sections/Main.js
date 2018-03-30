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
        return(
            <div>
            <FileParser/>
            </div>
        )
    }
}