# LEETCODE

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

class Solution:
    def moveZeroes(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        zeroCounter = 0
        count = 0
        while count < len(nums)-1:
            if nums[count] == 0:
                nums.pop(count)
                zeroCounter += 1
#               decrement because we pop'd, so nums is now shorter
                if count != 0:
                    count -= 1
#           if NOT a '0'
            else:
                count += 1

#       replace the pop'd 0's at the end of list
        for i in range(zeroCounter):
            nums.append(0)
