// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let next =  list.getFirst()
    let previous = list.getFirst()
    let counter = 0
    while(next){
        if(counter > n){
            previous = previous.next
            console.log(previous)
        }
        counter++
        
        next = next.next
    }
    return previous
}

module.exports = fromLast;
