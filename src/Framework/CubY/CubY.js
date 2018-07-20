import CubY_Core from './CubY_Core';
import CubY_DOM from './CubY_DOM';
import CubY_Routine from './CubY_Routine';
const EMPTY_FUNCTION = ()=>{};

var CubY = {

    //Core
    getValue: CubY_Core.getValue.bind(CubY_Core),
    getBrowser: CubY_Core.getBrowser.bind(CubY_Core),
    storeDataArray: CubY_Core.storeDataArray.bind(CubY_Core),
    storeValue: CubY_Core.storeValue.bind(CubY_Core),
    connect: CubY_Core.connect.bind(CubY_Core),
    react: CubY_Core.react.bind(CubY_Core),
    debug: CubY_Core.debug.bind(CubY_Core),
    readValue: CubY_Core.readValue.bind(CubY_Core),
    isObjectEmpty: CubY_Core.isObjectEmpty.bind(CubY_Core),

    //DOM
    createElement: CubY_DOM.createElement,

    //Routine
    createRoutine:CubY_Routine.createRoutine.bind(CubY_Routine),
    getCurrentCycle:CubY_Routine.getCurrentCycle.bind(CubY_Routine),
    routine:CubY_Routine.routine.bind(CubY_Routine),
    //AddOns
    addOn: function (obj) {
      for(var key in obj){
          if(obj.hasOwnProperty(key)){
              CubY[key] = obj[key];
          }
      }
    },
    //Other
    version: '0.6b.0.10',
    debugInfo: [CubY_Core,CubY_Routine]
};

window.CubY = CubY;
export default CubY;
