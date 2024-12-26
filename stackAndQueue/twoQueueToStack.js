class TwoQueueToStack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(x){
        let size=this.q1.length
        this.q2.push(x)
        for(let i=0;i<size;i++){
            this.q2.push(this.q1.shift())
        }
        [this.q1,this.q2]=[this.q2,this.q1]
    }
    pop() {
        if (this.isEmpty()) {
          throw new Error("Stack is empty");
        }
        return this.q1.shift(); 
      }
    
      top() {
        if (this.isEmpty()) {
          throw new Error("Stack is empty");
        }
        return this.q1[0]; 
      }
      isEmpty() {
        return this.q1.length === 0;
      }
}
const stack1 = new TwoQueueToStack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.top()); 
console.log(stack1.pop()); 
console.log(stack1.pop()); 
console.log(stack1.isEmpty());