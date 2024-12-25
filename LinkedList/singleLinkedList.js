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
        const newNode= new Node(value)
        if(this.head==null){
            this.head=newNode
        }
        else{
            let current=this.head
            while(current.next!=null){
                current=current.next
            }
            current.next=newNode
        }
    }
    prepend(value){
        const newNode=new Node(value)
        if(this.head==null){
            this.head==newNode
        }
        else{
            let first=this.head
            this.head=newNode
            this.head.next=first
        }
    }
    insert(value,index){
        const newNode=new Node(value)
        if(index<0){
            throw console.error("wrong index");
            
        }
        if(index==0){
            this.prepend(value)
        }
        else{
            let current=this.head
            let previous=null
            for(let i=0;i<index;i++){
                previous=current
                current=current.next
            } 
            previous.next=newNode
            newNode.next=current  
        }
    }
    delete(value){
        if(this.head.value==value){
            this.head=this.head.next
            return this
        }
        let current=this.head
        while(current.next){
            if(current.next && current.next.value==value){
                current.next=current.next.next
                return this
            }
            else{
                current=current.next
            }
        }
    }
    search(value){
        let count=0
        if(this.head==null){
            console.log("empty list")
        }
        else{
            if(this.head.value==value){
                  count++
            }
            else{
                let current=this.head
                while(current.next){
                    if(current.next.value==value){
                        count++
                    }
                    current=current.next
                }
            }
        }
        if(count>0){
            console.log("founded the no.")
        }
        else{
            console.log("no. not found")
        }
    }
    print(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
}
const linked=new LinkedList()
linked.append(4)
linked.append(5)
linked.prepend(8)
linked.append(2)
linked.prepend(8)
linked.insert(2,1)
linked.delete(8)
linked.print()
linked.search(8)