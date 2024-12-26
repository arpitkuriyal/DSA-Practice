class Stackarray{
    constructor(size){
        this.size=size
        this.arr=[]
    }
    push(x){
        if(this.arr.length>this.size){
            throw new Error("size overflow")
        }
        this.arr.push(x)
        return this
    }
    pop(){
        if(this.arr.length<0){
            throw new Error("stack underflow")
        }
        return this.arr.pop()
    }
}
const stack= new Stackarray().push(7).push(7).push(3).push(1).pop()
console.log(stack)