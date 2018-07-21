class CubY_Pipeline {
    constructor(name){
        this.createPipeLine(name);
    }
    createPipeLine(name){
        let self = this;
        let store = CubY.pipeLines || {};
        CubY.pipeLines = store;
        CubY.storeValue(name, self, {store:store})
    }
    assign(workerName){
        return new CubY_Worker(workerName, this)
    }
    run(workers, inputs){
        let self = this;
        self.inputs = inputs;
       for(var i=0;i<workers.length;i++){
           let worker = CubY.getValue(workers, 'workers')workers[i];
           if((i+1) !== workers.length){
               worker.next = workers[i+1]
           }
       }
    }
}


class CubY_Worker{
    constructor(name, pipeline){
        let self = this;
        let store = CubY.workers || {};
        CubY.workers = store;
        self.task = task;
        CubY.storeValue(name, self, {store:store});
        self.pipeline = pipeline;
    }
    to(task){
        this.task = task;
    }
    doTask(inputs){
        return this.task(this, inputs)
    }
    finish(outputs){
        if(this.next){
            this.next.doTask(outputs)
        }
    }
};
function createPipeline(name) {
    return new CubY_Pipeline(name);
}
export default createPipeline