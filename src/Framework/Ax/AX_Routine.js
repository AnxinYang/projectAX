export default class AX_Routine{
    constructor(_tickSpeed,_options){
        let tickSpeed = _tickSpeed || 1;
        let options = _options || {};
        this.init(options);
    }
    init(options){
        this.routineList = [];
        this.start();
    };
    start(){
        let self = this;
        setTimeout(self.routine.bind(this));
    }
    add(name,group,frequence,action){
        let newRoutine = {
            index:routineList.length,
            name:name,
            group:group||'common',
            action:action
        };
       this.routineList.push(newRoutine);
    }
    routine(){
        let routineList = this.routineList;
        for(var i=0;i<routineList.length;i++){
            let routine = routineList[i];
            try {
                routine.action();
            }catch (e){
                //DECIDE IF REMOVE ROUTINE LATER;
            }
        }
        this.start();
    }
}