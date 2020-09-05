# Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
# challenge from Lambda Endorsement Interview:

def pairSum(arr, S):
    result= []

    # if empty return None
    if len(arr) == 0:
        return None

    # iterate over arr
    for i in range(len(arr)):
    #   inner loop
        for k in range(1, len(arr)-1):
        # this allows to compare 
            if arr[i] + arr[k] == S and [arr[i], arr[k]] not in result or [arr[ k], arr[i]] not in result:

            # if combo matches S
                result.append([arr[i], arr[k]])

    return result

if __name__ == "__main__":
    S= 7
    arr= [3, 5, 2, -4, 8, 11] 

    print(pairSum(arr, S))