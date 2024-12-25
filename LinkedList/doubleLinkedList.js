class Node{
    constructor(value){
        this.value=value
        this.next=null 
        this.prev=null
    }
}
class DoubleLinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    append(value){
        let newNode=new Node(value)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            newNode.prev=this.tail
            this.tail=newNode
        }
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
            return this
        }
        this.head.prev=newNode
        newNode.next=this.head
        this.head=newNode
        return this

    }
    delete(value){
        let current=this.head
        if(this.head==null){
            console.log("empty list")
        }
        if(this.head.value==value){
            if(this.head==this.tail){
                this.head=this.tail=null
            }
            this.head=this.head.next
            this.head.prev=null
            return this
        }
        if(this.tail.value==value){
            this.tail=this.tail.prev
            this.tail.next=null
            return this
        }
        while(current.next!=null){
            if(current.next.value==value){
                current.next=current.next.next
                current.next.prev=current
                return this
            }
            current=current.next

        }
        
    }
    print(){
        let current=this.head
        while(this.head==null){
            console.log('your list is empty')
            return this
        }
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
}
const linked=new DoubleLinkedList()
linked.append(3)
linked.append(5)
linked.append(5)
linked.append(4)
linked.append(0)
linked.append(51)
linked.append(3)
linked.append(7)
linked.append(511)
linked.prepend(1)
linked.delete(7)
linked.print()
