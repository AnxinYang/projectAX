import AXcomponent from '../AXcomponent';
export default class Field extends AXcomponent {
    constructor(props){
        super(props);
    }
    getValue(){
        return this.value;
    }
    setValue(value){
        this.value = value;
    }
}