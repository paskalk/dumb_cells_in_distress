/*
    Disclaimer: I wouldnt actually ask this in normal interview settings, it has an aha moment.

    n number of people are blindfolded, shuffled around then they start playing broken telephone. The telephone breaks at person m. Write a function to return person m



    Given a linked list, return the item n positions from the last node. n will always be in the list.


*/

function getNthNode(head, n){
    const slow = head;
    const fast = head;

    while (n > 0 && fast.next){
        fast = fast.next;
        n--;
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}