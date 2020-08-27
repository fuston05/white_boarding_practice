# ********************************************************
# ***************** python any() method ******************


# # any(iterable)
# Return True if any element of the iterable is true. If the iterable is empty, return False. Equivalent to:

def testAny(iterable):
    return any(iterable)

if __name__ == "__main__":
    iterable= '' # -> False
    # ******************************
    # ************ LIST ************
    # iterable= list() # -> False
    # iterable.append(True) # -> True
    # iterable.append(False) # -> True

    # ******************************
    # ************ SET *************
    # iterable= set() # -> False
    # iterable.add(False) # -> False
    # iterable.add(True) # -> True
    # iterable.add(2 == 4) # -> False
    # iterable.add(2 == 2) # -> True

    # ******************************
    # *********** DICT *************
    # ** dict looks at 'key' like the 'all()' does **
    # iterable= dict() # -> False
    # iterable[1]= False # -> True
    # iterable[2]= True # -> True
    # iterable[True]= 1 # -> True
    # iterable[False]= 2 # -> False

    print('')
    print('iterable: ', iterable)
    print('')
    print('****', testAny(iterable), '****')
    print('')