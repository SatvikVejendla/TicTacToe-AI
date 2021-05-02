import sys
import re
from game import TicTacToe
import random
import os
from agents.random import RandomPlayer
from agents.qlearning import QLearningPlayer
from config.train import certain_acc, certain_gen

arg = sys.argv

x = 0
if(len(arg) > 1):
    arg = arg[1]
    reg = "--?r(|e|etrain)"
    x = re.search(reg, arg)

train = None
if(x != 0):
    if(certain_gen):
        from train.gen import train
    elif(certain_acc):
        from train.acc import train

if train:
    train(200000, 0.0001, 0.0001)
