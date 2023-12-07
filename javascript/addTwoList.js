class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function addTwoList(l1, l2) {
    // initialize results node
    const resultNode = new Node(0);
    let currNode = resultNode;
    
    
    // iterate through the lists
    while (l1 || l2){
      // get first list value if exists
      const firstVal = l1 ? l1.val : 0;
      // get second list value if exists
      const secondVal = l2 ? l2.val : 0; 
      // add and set carry
      const remainder = (firstVal + secondVal + currNode.val) % 10;
      const carry = (firstVal + secondVal+ currNode.val) >= 10
      // Assign remainder to result node val
      currNode.val = remainder
      // Create next if carry or not last node
      if ((l1 && l1.next) ||  (l2 && l2.next) || carry){
        const nextNode = new Node(carry ? 1 : 0)
        currNode.next = nextNode;
        // move currNode to next node
        currNode = nextNode;      
      }
        // move to next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return resultNode;
}

function printList(n){
  let out = ''
  while (n){
    out += String(n.val);
    n=n.next;
  }
  console.log(out);
}

if (require.main === module) {
// add your own tests in here
// console.log("Expecting: { val: 0, next: null }");
// console.log("=>", addTwoList({ val: 0, next: null }, { val: 0, next: null }));
const n1 = new Node(3)
const n2 = new Node(4, n1)
const l1 = new Node(2, n2)

const n3 = new Node(4)
const n4 = new Node(6, n3)
const l2 = new Node(5, n4)
printList(l1);
printList(l2);
printList(addTwoList(l1, l2))

}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution
// the first node is always the ones digit, each subsequent node is 10x
// We could start by adding and then storing a carry digit
// If one list is longer then we just iterate through the length of the longest list