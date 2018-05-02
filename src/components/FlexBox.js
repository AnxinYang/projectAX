/**
 * Created by Anxin Yang on 5/1/2018.
 */
import React, { Component } from 'react';
export default class FlexBox extends Component {
    constructor(props) {
        super(props);

        var self = this;
        this.id = this.name = props.name || props.schemaName;
        this.schemaName = this.props.schemaName || this.props.type;
    }

    // Before Render ==========================================================


    constructChild(field){
        if(field.showFun !== undefined){
            if(this.execute(field.showFun,field)===false){
                return null;
            }
        }
        if(field.handleInit !== undefined){
            if(this.execute(field.handleInit,field)===false){
                return null;
            }
        }
        var props = this.setChildProps(field); // Use FlexBox method to construct children.
        return this.placeElement(field.type,props); // TODO: Replace this with Utility method when ready
    }

    setChildProps(field){   // This method will apply props from schema to child
        var props = {};
        var applyToAll = this.schema.applyToAll || {};
        //field.schemaName = field.type;
        if(field.schemaName !== undefined){
            props.schemaName =field.schemaName||{};
        }
        props = (field.overwrite===true) ? (Object.assign({},field, props)):(Object.assign({},applyToAll,field, props));
        props.data = props.data || this.execute(props.dataFun,field,props.dataType);
        props.ref = field.name;
        props.container = this;
        props.key = field.key || (field.schemaName||'FlexBox')+'_'+field.name;
        props.id = props.id || props.name;
        return props;
    }

    placeElement(type,props){   // This method will return element.
        if(type==='html'){
            return props.html(this);
        }
        var element = componentMap[type];
        return React.createElement(element,props);
    }


    renderChildren(){
        this.schema = getSchema(this.props.schemaName);
        if(this.schema===undefined){
            return null;
        }

        var fields = this.schema.fields;
        if(fields === undefined){
            fields = this.tryConvertFormSchema();
        }
        var children = [];
        for(var i=0;i<fields.length;i++){
            var field = fields[i];
            var elem;

            elem = this.constructChild(field);
            children.push(elem);
        }
        return children;
    }

    //Rendering ==========================================================

    render(){
        var self = this;
        self.schema = getSchema(this.props.schemaName) || {};
        self.style = Object.assign({},{'display':'flex'}, self.props.style,self.schema.style);
        return(
            <div ref='_me_' style = {self.style}>
                {self.renderChildren()}
            </div>
        )
    }

    // After Render ==========================================================

    NEDidMount() {

    }

    execute(Function,field,dataType){
        if(Function!==undefined){
            return Function.call(this,field);
        }
        switch(dataType) {
            case 'Array':
                return [];
                break;
            case 'Object':
                return {};
                break;
            default:
                return '';
        }
    }
}