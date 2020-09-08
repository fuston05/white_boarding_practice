# codeSignal challenge

# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

# Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

# Example

# For sequence = [1, 3, 2, 1], the output should be
# almostIncreasingSequence(sequence) = false.

# There is no one element in this array that can be removed in order to get a strictly increasing sequence.

# For sequence = [1, 3, 2], the output should be
# almostIncreasingSequence(sequence) = true.

# You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

def almostIncreasingSequence(sequence):
  # if single element
  if len(sequence) == 1:
    print('single ele')
    return True

  #check for more than 1 duplicate 
  dupCheck= set(sequence)
  if (len(sequence) - len(dupCheck)) > 1:
    print('dup error')
    return False

  count= 0
  seqLength= len(sequence)-2
  print('seq: ', sequence)

  for i in range(seqLength):
    print('seqLength: ', seqLength)
    p1= sequence[i]
    print('p1: ', p1)
    p2= sequence[i+1]

    while p1 >= p2:
      print('I : ', i)
      sequence.pop(i+1)
      count+= 1
      print('pop seq: ', sequence)
      if count > 1:
        print('count > 1')
        return False
      seqLength-= 1
      i-= 1
      print('i decr: ', i)

  if count == 1:
    return True

  return False


if __name__ == "__main__":
  # TEST CASES:

  # sequence= [1, 3, 2, 1] # false
  sequence= [1, 3, 2] # true
  # sequence= [1, 2, 1, 2] # false
  # sequence= [3, 6, 5, 8, 10, 20, 15] # false
  # sequence= [1, 1, 2, 3, 4, 4] # false
  # sequence= [1, 4, 10, 4, 2] # false
  # sequence= [10, 1, 2, 3, 4, 5] # true
  # sequence= [11, 1, 1, 2, 3] # false
  # sequence= [0, -2, 5, 6] # true
  # sequence= [1, 2, 3, 4, 5, 3, 5, 6] # false
  # sequence= [40, 50, 60, 10, 20, 30] # false
  # sequence= [1, 1] # true
  # sequence= [1, 2, 5, 3, 5] # true
  # sequence= [1, 2, 5, 5, 5] # false
  # sequence= [10, 1, 2, 3, 4, 5, 6, 1] # false
  # sequence= [1, 2, 3, 4, 3, 6] # true
  # sequence= [1, 2, 3, 4, 99, 5, 6] # true
  # sequence= [123, -17, -5, 1, 2, 3, 12, 43, 45] # true
  # sequence= [3, 5, 67, 98, 3] # true

  print(almostIncreasingSequence(sequence))