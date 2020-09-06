# codeSignal challenge

# Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

# Example

# For statues = [6, 2, 3, 8], the output should be
# makeArrayConsecutive2(statues) = 3.

# Ratiorg needs statues of sizes 4, 5 and 7.

def makeArrayConsecutive2(statues):
  # sort array
  statues.sort()

  # count missing nums
  missingNumCount= 0
  count= 0

  startNum= statues[0]
  endNum= statues[-1]+1
  
  for i in range(startNum, endNum):
    if statues[count] != i:
      # count missing num in sequence
      missingNumCount+= 1
    else:
      count+= 1

  return missingNumCount




if __name__ == "__main__":

    statues = [6, 2, 3, 8]  # 3
    # statues= [0, 3]  # 2
    # statues= [5, 4, 6]  # 0
    # statues= [6, 3]  # 2
    # statues= [1]  # 0

    print('')
    print(makeArrayConsecutive2(statues))
    print('')
