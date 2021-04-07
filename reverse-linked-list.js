function reverseLinkedList(head){
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
    }
    addNext(node){
        this.next = node;
    };
    getNext() {
        return this.next;
    };
}
















const sampleList = {
    value: 1,
    getNext: function(){
        return this.next;
    },
    next: {
        value: 3,
        getNext: function(){
            return this.next;
        },
        next: {
            value: 5,
            getNext: function(){
                return this.next;
            },
            next: {
                value: 2,
                getNext: function(){
                    return this.next;
                },
                next: null
            }
        }
    },
};

console.dir(reverseLinkedList(sampleList));

