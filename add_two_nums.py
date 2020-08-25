# LEETCODE
# ou are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        inputs= (l1, l2)
        resEquation= []
        #start with starting node
        #walk the list using 'next' prop.
        for li in inputs:
            cur= li
            temp= []
            while cur:
                temp.append(str(cur.val))
                cur= cur.next
            temp.reverse()
            s= "".join(temp)
            resEquation.append(int(s))
        res= resEquation[0] + resEquation[1]
        res= str(res)
        res= list(res)
        res.reverse()
        
        arr= []
        for i in res:
            newNode= ListNode(val= i, next= None)
            arr.append(newNode)
            
        for k in range(len(arr)-1):
            if k+1 < len(arr):
                arr[k].next= arr[k+1]
                
        return arr[0]
        
        #build a reg list from nodes
        #reverse the list
        #join the list and make an int
        # add the 2 together
        
        #reverse the res
        #convert res into a linked list