import json
import os

def saveFile(path, val,verbose=1):
    f = open(os.path.join(os.path.dirname("main.py"), path), "w")

    json.dump(val, f)
    
    f.close()

    print("Brain saved to " + path.split("/")[-1]) if verbose==1 else None