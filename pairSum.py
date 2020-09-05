# Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
# challenge from Lambda Endorsement Interview:
import random
import math

def pairSum(arr, S):
    res= []

    for i in range(len(arr)):
      for k in range(len(arr)):
        if arr[i] + arr[k] == S and [arr[i], arr[k]] not in res and [arr[k], arr[i]] not in res:
          res.append([arr[i], arr[k]])


    return res
    # print('******')
    # print('table: ', lookupTable)
    # print('******')
      



if __name__ == "__main__":
  # get a random 'S'
    S= math.floor(random.random()*10)
    
    ranLength= math.floor(random.random()* 10)*(math.floor(random.random()*10))

    # randArr= []
    # for i in range(ranLength):
    #     if i not in randArr:
    #       randArr.append(math.floor(random.random()*10))

    randArr= [(math.floor(random.random()*10)) for x in range(ranLength)]

    print('S: ', S)
    print('')
    print('arr: ', randArr)
    print('')
    print('func call: ', pairSum(randArr, S))
