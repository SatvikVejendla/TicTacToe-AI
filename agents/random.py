import random

class RandomPlayer():
    def __init__(self):
        self.wins = 0

    def action(self, state, actions):
        return random.choice(actions)

    def reward(self, reward, state):
        if reward == 1:
            self.wins += 1

    def end_round(self, episode):
        return