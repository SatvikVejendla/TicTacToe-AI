def ternary(l):
    newList =  []
    for i in l:
        newList.append(1 if i=='X' else (2 if i=='O' else 0))
    newList = [str(i) for i in newList]
    return ''.join(newList)