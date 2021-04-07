/*
 1  -->  2  -->   5 ---> 3 
r:5     r:2      r:3     r:5
*/

class Node{
    constructor(value) {
      this.value = value;
    }
    setR(node) {
      this.r = node;
    }
    
    setNext(node) {
      this.next = node;
    }
    
     // hasNext
    setDestNode(node) {
      this.destNode = node;
    }
  }
  
  
  function copyList(head) {
    let currDestHead = new Node(head.value);
    head.setDestNode = currDestHead;
    let currDestNode = currDestHead;
    let currSrcNode = head; 
   
    // create shell
    while(currSrcNode.hasNext()) {
      // creating for next (2)
      let nextSrcNode = currSrcNode.getNext();
      let newDstNode = new Node(nextSrcNode.value);
      currSrcNode.setDestNode = newDstNode; // copies primes
      currDestNode.setNext = newDstNode;
      // progress through the loop
      currSrcNode = nextSrcNode;
      currDestNode = newDstNode;
    }
    
    // create R mapping
    currSrcNode = head;
    while(currSrcNode) {
      let currentPrime = currSrcNode.getDestNode();
      let srcR = currSrcNode.getR();
      let srcRPrime = srcR.getDestNode();
      currentPrime.setR(srcRPrime);
      // progress
      currSrcNode = currSrcNode.getNext();
    }
    
    
    return currDestHead;
  }
  