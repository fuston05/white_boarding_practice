
# ********************************************************
# ***************** python all() method ******************

# Return True if all elements of the iterable are true (or if the iterable is empty). Equivalent to:
def testAll(iterable):
    res= all(iterable)

    return res

if __name__ == "__main__":
    testIterable= ''
    # ****************************
    # ********* LISTS ************
    # testIterable= [ (5==5), (5==1) ]
    # testIterable= [ (5==5), (5==5) ]

    # ****************************
    # ********* SETS *************
    # testIterable= set()
    # testIterable.add(True)
    # testIterable.add(False)
    # testIterable.add(True)

    # ***************************
    # ********** DICT ***********
    # ** for dict, it looks at the 'keys' NOT the values **
    # testIterable= dict()
    # testIterable[True]= 1
    # testIterable[True]= 2
    # # still evaluates to True with a False 'value'
    # testIterable[1]= False

    # **************************
    # ******** STRINGS *********
    # testIterable= f'False {2 == 1}' #=> True
    # testIterable= '{False}' # => True
    # testIterable= 'False' # => True
    # ** all strings evaluate to True??

    print('testIterable: ', testIterable)
    print('')
    print('****', testAll(testIterable), '****')
    print('')
