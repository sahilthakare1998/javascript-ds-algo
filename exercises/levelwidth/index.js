// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let array = [root, "s"];
  let counter = [0];
  while (array.length > 1) {

    let node = array.shift();
    if (node == "s") {
      counter.push(0);
      array.push("s");
    }else{
    array.push(...node.children);
    counter[counter.length -1]++;
    }
  }
  return counter;
}

module.exports = levelWidth;

// const arr = [root, "s"];
// const counters = [0];

// while (arr.length > 1) {
//   const node = arr.shift();

//   if (node === "s") {
//     counters.push(0);
//     arr.push("s");
//   } else {
//     arr.push(...node.children);
//     counters[counters.length - 1]++;
//   }
// }

// return counters;
