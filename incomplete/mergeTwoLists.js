// leet code challenge

// ** I am having a hard time understanding the structure of the test cases fully in order to solve this one.


//  * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example 1:

l1 = [ListNode(1, 2),ListNode(2, 4),ListNode(4)] 
l2 = [1, 3, 4]
// Output: [1,1,2,3,4,4]
// Example 2:

// l1 = [] 
// l2 = []
// Output: []
// Example 3:

// l1 = [] 
// l2 = [0]
// Output: [0]

//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}

var mergeTwoLists = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  console.log('l1: ', l1, 'l2: ', l2)
  // while
  // set both start pointers
  // add lowest to new list
};

console.log(mergeTwoLists(l1, l2));
