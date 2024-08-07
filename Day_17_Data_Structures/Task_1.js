/* Activity 1:Linked List 
Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
*/

class Node {
    constructor(value){
        this.value= value;
        this.next=null;
    }
}

//Example usage:
const node1 =new Node(1);
const node2= new Node(2);
node1.next =node2;

console.log(node1);
console.log(node2);