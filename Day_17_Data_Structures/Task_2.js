/* Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
 */

class Node {
    constructor(value){
        this.value=value;
        this.next= null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

    //Add a node to the end
    add(value){
        const newNode= new Node(value);
        if(this.head === null){
            this.head =newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current= current.next;
            }
            current.next= newNode;
        }
        this.size++;
    }

    //Remove a node from the end
    remove(){
        if(this.head === null){
            return null;
        }
        if(this.head.next === null){
            const value=this.head.value;
            this.head=null;
            this.size--;
            return value;
        }
        let current= this.head;
        let previous= null;
        while(current.next !== null){
            previous= current;
            current=current.next;
        }
        const value=current.value;
        previous.next=null;
        this.size--;
        return value;
    }

    //Display all nodes
    display(){
        let current=this.head;
        let result=[];
        while(current !== null){
            result.push(current.value);
            current=current.next;
        }
        console.log(result.join("->"));
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3

list.remove();
list.display(); // Output: 1 -> 2

list.remove();
list.display(); // Output: 1

list.remove();
list.display();