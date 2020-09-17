# shapeArea CodeSignal challenge
# Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

# A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

# Example

# For n = 2, the output should be
# shapeArea(n) = 5;
# For n = 3, the output should be
# shapeArea(n) = 13.


def shapeArea(n):
    # ex 1:
    # n= 1, area= 1
                    # added 4
    # ex 2:
    # n= 2, area= 5
                    # added 8
    # ex3:
    # n=3 , area= 13
                    # added 16
    # ex 4:
    # n= 4, area= 29

    return 1 + (n * ((n-1) * 2))


if __name__ == "__main__":
    # n= 2  # 5
    # n= 3 # 13
    # n= 1 # 1
    # n= 5 # 41
    n= 7000 # 97986001
    # n= 8000 # 127984001
    # n= 9999 # 199940005
    # n= 9998 # 199900013
    # n= 8999 # 161946005
    # n= 100 # 19801

    print(shapeArea(n))
