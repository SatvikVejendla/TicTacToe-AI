from pyUtils.convert import ternary

def parseBrain(data, accuracy):

    d2 = list(data)
    output = {}


    for i in data.keys():
        n_i = ternary(i)
        output[n_i] = data[i]


    res = {
        "brain": output,
        "accuracy": accuracy
    }
    return res