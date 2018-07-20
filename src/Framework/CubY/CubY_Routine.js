const MAX_CYCLE = 100;
class CubY_Routine{
    constructor(_tickSpeed,_options){
        let options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }
    init(options){
        window.cr = this;
        this.cycle = 0;
        this.routineList = [];
        this.longestRoutineTime =0;
        //setTimeout(this.start.bind(this),0);
    };
    start(){
        let self = this;
        this.cycleStartTime = Date.now();
        setTimeout(self.routine.bind(this),0);
    }
    createRoutine(name,group) {
        let newRoutine = new Routine(name, group);
        let self = this;
        newRoutine.insert= function () {
            if(newRoutine.freq!==1) {
                newRoutine.counter += self.routineList.length + 1;
            }

            self.routineList.push(newRoutine);
            return newRoutine;
        };
        newRoutine.remove= function () {
            let index =  self.routineList.indexOf(newRoutine);
            self.routineList.splice(index,1);
        };
        return newRoutine;
    }
    getCurrentCycle(){
        return this.cycle;
    }
    routine(){
        let routineList = this.routineList;
        let self = this;
        for(var i=0;i<routineList.length;i++){
            let routine = routineList[i];
            try {
                if(routine.checkLock()) {
                    routine.lock();
                    setTimeout(function(){
                        let startTime = Date.now();
                        routine.action();
                        self.lastRoutineTime = Date.now() - startTime;
                        if(self.longestRoutineTime<self.lastRoutineTime){
                            self.longestRoutineTime=self.lastRoutineTime;
                        }
                        if(self.lastRoutineTime>200){
                            console.warn('Routine:' + routine.name + ' took too long to run. ['+self.lastRoutineTime+'ms]')
                        }
                        routine.unlock();
                    },routine.freq);
                }
            }catch (e){
                //DECIDE IF REMOVE ROUTINE LATER;
            }
        }
        this.cycle++;
        if(this.cycle === MAX_CYCLE){
            this.cycle = 0;
            this.lastCycleTime = Date.now() - this.cycleStartTime;
            this.cyclePerSec = Math.floor(1000 / this.lastCycleTime);
        }
        this.start();
    }
}
class Routine{
    constructor(name,group){
        this.name = name;
        this.group = group || 'common';
        this.freq = 1;
        let self = this;
        this.action = function () {
            self.isRunning = true;
        };
        this.counter=0;
        this.repeat = -1;
    }
    lock(){
        if(this.repeat>0)this.repeat--;
        this.isRunning = true;
    }
    unlock(){
        if(this.repeat===0){
            this.remove();
        }
        this.isRunning = false;
    }
    attr(key,value){
        this[key] = value;
        if(key==='freq'){
            this['counter'] = value;
        }
        return this;
    }
    resetCounter(){
        this.counter = this.freq;
    }
    checkLock(){
        if(this.counter>0){
            this.counter--;
        }

        return !(this.isRunning === true || this.counter > 0);
    }

}
const _CubY_Routine = new CubY_Routine();
export default _CubY_Routine;