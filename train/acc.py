from game import TicTacToe
import random
import os
from agents.random import RandomPlayer
from agents.qlearning import QLearningPlayer


env = TicTacToe()
p1 = QLearningPlayer()
p2 = RandomPlayer()


i = 0
def train(lr, decay):
                
    state, win, done, info = env.reset(X=p1, O=p2)

    for (cur_player, oth_player) in env.player_turn():
        action = cur_player.action(state, env.action_space)
        state, win, done, info = env.step(action)

        if done:
            if win:
                cur_player.reward(1, state)
                oth_player.reward(-1, state)
            else:
                cur_player.reward(0.5, state)
                oth_player.reward(0.5, state)
            break
        else:
            oth_player.reward(0, state)
    global i
    i+=1
    
    env.playerX.end_round(i)
    env.playerO.end_round(i)

    return p1.wins/i

#p1.save_state(p1.wins/generations)
acc = 0

while(acc < 0.97 or i < 1000):
    acc = train(0.001, 0.00001)

    print("PLAYER ACCURACY:", acc)


print("DONE", i)