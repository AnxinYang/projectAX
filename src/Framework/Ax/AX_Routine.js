const MAX_CYCLE = 65535;
export default class AX_Routine{
    constructor(_tickSpeed,_options){
        let tickSpeed = _tickSpeed || 1;
        let options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }
    init(options){
        this.cycle = 0;
        this.routineList = [];
        this.longestRoutineTime =0;
        setTimeout(this.start.bind(this));
    };
    start(){
        let self = this;
        setTimeout(self.routine.bind(this));
    }
    add(name,group,freq,action){
        let newRoutine = {
            index:this.routineList.length,
            name:name,
            group:group||'common',
            action:action,
            freq:freq || 1
        };
       this.routineList.push(newRoutine);
    }
    getCurrentCycle(){
        return this.cycle;
    }
    routine(){
        let routineList = this.routineList;
        for(var i=0;i<routineList.length;i++){
            let routine = routineList[i];
            let startTime = Date.now();
            try {
                if(this.cycle%routine.freq ===0) {
                    routine.action();
                }
            }catch (e){
                //DECIDE IF REMOVE ROUTINE LATER;
            }
            this.lastRoutineTime = Date.now() - startTime;
            if(this.longestRoutineTime<this.lastRoutineTime){
                this.longestRoutineTime=this.lastRoutineTime;
            }
            if(this.lastRoutineTime>200){
                console.warn('Routine:' + routine.name + ' took too long to run. ['+this.lastRoutineTime+'ms]')
            }
        }
        this.cycle++;
        if(this.cycle === MAX_CYCLE){
            this.cycle = 0;
        }
        this.start();
    }
}