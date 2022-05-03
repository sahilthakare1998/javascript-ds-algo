// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stack = new Stack()
        this.secondStack = new Stack()
    }
    
    add(data){
        this.stack.push(data)
    }
    remove(){
        while(this.stack.peek()){
            this.secondStack.push(this.stack.pop())
        }
        let item = this.secondStack.pop()
       
        while(this.secondStack.peek()){
            this.stack.push(this.secondStack.pop())
        }
        return item
    }

    peek(){
        while(this.stack.peek()){
            this.secondStack.push(this.stack.pop())
        }
        let item = this.secondStack.peek()
       
        while(this.secondStack.peek()){
            this.stack.push(this.secondStack.pop())
        }
        return item
    }
}

module.exports = Queue;
