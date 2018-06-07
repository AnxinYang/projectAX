const MAX_CYCLE = 100;
class AX_Routine{
    constructor(_tickSpeed,_options){
        this.tickSpeed = _tickSpeed || 1;
        let options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }
    init(options){
        window.AXR = this;
        this.cycle = 0;
        this.routineList = [];
        this.longestRoutineTime =0;
        setTimeout(this.start.bind(this));
    };
    start(){
        let self = this;
        this.cycleStartTime = Date.now();
        setTimeout(self.routine.bind(this),this.tickSpeed);
    }
    append(name,group) {
        let newRoutine = new Routine(name, group);
        let self = this;
        newRoutine.insert= function () {
            if(newRoutine.freq!==1) {
                newRoutine.counter += self.routineList.length + 1;
            }
            newRoutine.idx = self.routineList.length;
            self.routineList.push(newRoutine);
            return newRoutine;
        };
        newRoutine.remove= function () {
            self.routineList.splice(newRoutine.idx,1);
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
            let startTime = Date.now();
            try {
                if(routine.checkCounter()) {
                    setTimeout(function(){
                        routine.action();
                        self.lastRoutineTime = Date.now() - startTime;
                        if(self.longestRoutineTime<self.lastRoutineTime){
                            self.longestRoutineTime=self.lastRoutineTime;
                        }
                        if(self.lastRoutineTime>200){
                            console.warn('Routine:' + routine.name + ' took too long to run. ['+self.lastRoutineTime+'ms]')
                        }
                        routine.isRunning = false;
                    },1);
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
        this.action = function () {};
        this.repeat = 0;
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
    checkCounter(){
        if(this.isRunning===true){
            return false;
        }

        let shouldRun = --this.counter===0;
        if(this.counter===0){
            if(this.excutionTimes!==undefined){
                this.excutionTimes--;
                if(this.excutionTimes===0){
                    this.remove();
                }
            }
            this.isRunning = true;
            this.resetCounter();
        }
       return shouldRun;
    }

}
const AXR = new AX_Routine();
window.AXR = AXR;
export default AXR;