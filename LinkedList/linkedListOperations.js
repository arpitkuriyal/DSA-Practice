const { textChangeRangeIsUnchanged, transpileModule } = require("typescript")

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    append(value){
        let newNode=new Node(value)
        if(this.head==null){
            this.head=newNode
        }
        else{
            let current=this.head
            while(current.next!==null){
                current=current.next
            }
            current.next=newNode
        }
        return this
    }
    iterativeReverse(){
        let current=this.head
        let prev=null
        while(current){
            let temp=current.next
            current.next=prev
            prev=current
            current=temp
        }
        this.head=prev
        return this
    }
    recursiveReverse(current){
        if(!current){
            return;
        }
        current=this.head
        let prev=null
        let temp=current.next
        current.next=prev
        prev=current
        this.recursiveReverse(temp)
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
        return this;
    }
}
const list=new LinkedList().append(1).append(2).append(3).append(4).append(5).append(4).reverse().print()