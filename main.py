# **** whiteBoarding Practice ****
# Add up and print the sum of the all of the minimum elements of each inner array:

arr= [
  [8, 4], [90, -1, 3], [9, 62], [-7, -1, -56, -6], [201], [76, 18]
  ]

# The expected output is given by:
# 4 + -1 + 9 + -56 + 201 + 18 = 175

# You may use whatever programming language you'd like.
# Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.



# min ti get minumum
# iterate, for loop
# sum var to track sum so far
# print sum

res= 0
for i in arr:
  res += min(i)

print(res)




if __name__ == "__main__":
    pass