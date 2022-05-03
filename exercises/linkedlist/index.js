// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    
    insertFirst(data){
        let node = this.head
        this.head = new Node(data,node) 
    }

    size(){
        let node = this.head
        let counter = 0        
        while(node){
        counter++
        node = node.next
        }
        return counter

    }

    getFirst(){
        let node = this.head;
        if(!node) return null
        if(node){
            return node
        }
    }

    getLast(){
        let node = this.head;
        if(!node) return null
        while(node.next){
            node = node.next
        }
        console.log('last',this.head)
        return node
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next 
    }

    removeLast(){
        if(!this.head) return
        if(!this.head.next) {
            this.head = null
            return 
        }
        let previous= this.head;
        let node = this.head.next;

        while(node.next){
            previous = previous.next
            node = node.next
        }
        previous.next = null
    }

    insertLast(data){
        const last = this.getLast();

        if (last) {
          // There are some existing nodes in our chain
          last.next = new Node(data);
        } else {
          // The chain is empty!
          this.head = new Node(data);
        }
    }

    getAt(index){
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head) return null
        if (index == 0 && !this.head.next) {
            this.head = null
            return 
        }
        if (index == 0 && this.head.next) {
            this.head = this.head.next
            return 
        }

        this.getAt(index-1).next = this.getAt(index+1) || null 

    }

    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data)
            return
        }
        if (index == 0){
            this.head = new Node(data, this.head)
            return
        }
        if(this.getAt(index)){
        this.getAt(index-1).next = new Node(data,this.getAt(index) )
        }
        else{
         this.getLast().next =new Node(data,this.getAt(index) )
        }
    }
}

module.exports = { Node, LinkedList };
