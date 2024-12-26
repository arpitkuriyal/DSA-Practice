class OneQueueToStack{
    constructor(){
        this.q1=[]
    }
    push(x){
        let size=this.q1.length
        this.q1.push(x)
        for(let i=0;i<size;i++){
            this.q1.push(this.q1.shift())
        }
    }
    pop(){
        if(this.q1.length<0){
            throw new Error("empty stack")
        }
        return this.q1.shift()
    }
    top(){
        if(this.q1.length<0){
            throw new Error("empty stack")
        }
        return this.q1[0]  
    }
    isEmpty() {
        return this.queue.length === 0;
      }

}
const QueueToStack=new OneQueueToStack()
QueueToStack.push(3)
QueueToStack.push(13)
QueueToStack.push(32)
QueueToStack.push(31)
QueueToStack.push(30)
console.log(QueueToStack.pop())
console.log(QueueToStack.top())