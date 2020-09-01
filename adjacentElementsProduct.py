# # Code Signal challenge (python)
# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

# Example

# For inputArray = [3, 6, -2, -5, 7, 3], the output should be
# adjacentElementsProduct(inputArray) = 21.

# 7 and 3 produce the largest product.

def adjacentElementsProduct(inputArray):
    # if array not empty
    largetsSoFar = min(inputArray)
    # single for loop over array.
    for i in range(len(inputArray)-1):
        # multiply curEle with next Ele
        prod = inputArray[i] * inputArray[i+1]
        if prod > largetsSoFar:
            # store product in a largestSoFar Variable
            largetsSoFar = prod
    # return largestSoFar
    return largetsSoFar

if __name__ == "__main__":
    inputArray= [1, 0, 1, 0, 1000] # 0
    # inputArray= [-23, 4, -3, 8, -12] # -12
    # inputArray= [4, 1, 2, 3, 1, 5] # 6
    # inputArray= [5, 6, -4, 2, 3, 2, -23] # 30
    # inputArray= [9, 5, 10, 2, 24, -1, -48] # 50
    # inputArray= [1, 2, 3, 0] # 6
    # inputArray= [5, 1, 2, 3, 1, 4] # 6
    # inputArray= [-1, -2] # 2
    # inputArray= [3, 6, -2, -5, 7, 3] # 21

    print(adjacentElementsProduct(inputArray))
