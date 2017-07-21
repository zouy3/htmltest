from mysql import *

def getTable():
    output = query("select * from goodsnum")
    js = []
    for row in output:
        tmp={}
        tmp['name'] = row[0]
        tmp['type'] = row[1]
        tmp['num'] = row[2]
        tmp['des'] = row[3]
        js.append(tmp)
    return js

