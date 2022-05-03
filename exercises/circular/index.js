// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
   
    let previous = list.getFirst()
    let fast = list.getFirst()

     while(previous.next && fast.next.next ){
        previous = previous.next
        fast = fast.next.next
         if(previous == fast){
            return true
         }
         
      
     }
     return false
}

module.exports = circular;
