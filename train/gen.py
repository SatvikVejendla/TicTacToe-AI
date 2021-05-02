from game import TicTacToe
import random
import os
from agents.random import RandomPlayer
from agents.qlearning import QLearningPlayer
#from config.train import generations



def train(generations, lr, decay):
    env = TicTacToe()
    p1 = QLearningPlayer()
    p2 = RandomPlayer()


    for i in range(generations):
            
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
        
        env.playerX.end_round(i)
        env.playerO.end_round(i)

        if(i%(5000)==0):

            os.system("cls")
            print("Generation", i)
            print('Player 1 win rate: {}'.format(p1.wins / generations))
            print('Player 2 win rate: {}'.format(p2.wins / generations))
            print('players draw rate: {}'.format((generations - p1.wins - p2.wins) / generations))
    p1.save_state(p1.wins/generations)
    play(p1, HumanPlayer(), env)
    return p1.wins/generations



class HumanPlayer():
    def __init__(self):
        self.name = 'Human'

    def action(self, state, actions):
        a = int(input('your move:')) - 1
        return a

from pyUtils.convert import ternary

def play(p1, p2, env):
    while 1:
        state, win, done, info = env.reset(X=p1, O=p2)
        for (cp, op) in env.player_turn():
            print()
            env.render()
            print(ternary(state))
            print(env.action_space)
            action = cp.action(state, env.action_space)
            print(action)
            state, win, done, info = env.step(action)
            if done:
                env.render()
                break
                
