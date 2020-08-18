# **** whiteBoarding Practice ****

# Given an object/dictionary with keys and values that consist of both strings and integers, design an algorithm to calculate and return the sum of all of the numeric values.
# # For example, given the following object/dictionary as input:
# input = {
#     "cat": "bob",
#     "dog": 23,
#     19: 18,
#     90: "fish"
# }
# # Your algorithm should return 41, the sum of the values 23 and 18.
# # You may use whatever programming language you'd like.
# # Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.

# # iterate through input
# result = 0
# for k, v in input.items():
#     print('type; ', type(v))
#     if type(v) == int:
#         result += v
# print(result)
# # check type:
# # if isnum , sum that value

# Given the following array of values, print out all the elements in reverse order, with each element on a new line.
# For example, given the list
arr= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# reverse arr
# arr.reverse()

# for loop over arr
for i in range(1, len(arr)+1):
    print(arr[-i])
# print each


# Your output should be
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# You may use whatever programming language you'd like.
# Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.