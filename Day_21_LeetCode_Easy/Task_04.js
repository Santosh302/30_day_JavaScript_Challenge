/* Activity 4: Merge Two Sorted Lists 
Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
*Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
*Create a few test cases with linked lists and log the merged list.
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If there are remaining nodes in list1 or list2, append them
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let head = new ListNode();
    let current = head;
    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return head.next;
}

// Helper function to print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

let list3 = arrayToList([5]);
let list4 = arrayToList([1, 2, 3, 4]);
let mergedList2 = mergeTwoLists(list3, list4);
printList(mergedList2); // Output: 1 -> 2 -> 3 -> 4 -> 5
