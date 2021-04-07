
function deepCopy(head){
    let newHead;

    while(head){
        let nodeToAdd = new Node(head.value);
        if (!newHead){
            newHead = nodeToAdd;
        } else {
            nodeToAdd.addNext(newHead);
            newHead = nodeToAdd;
        }
        head = head.getNext();
    }

    return newHead;
};


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.random = null;
    }
    addNext(data){
        this.next = data;
    };
    getNext() {
        return this.next;
    };
    addRandom(data){
        this.random = data;
    };
}







let node1 = new Node(1);
let node5 = new Node(5);
let node3 = new Node(3);
let node2 = new Node(2);


node1.addNext(node3);
node3.addNext(node5);
node5.addNext(node2);


node1.addRandom(node5);
node3.addRandom(node2);
node5.addRandom(node1);
node2.addRandom(node3);


console.log(node1===deepCopy(node1));

// console.dir(reverseLinkedList(node1));

