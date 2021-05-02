import random
import numpy as np
from config.train import learning_rate, gamma, decay_rate, epsilon
from pyUtils.save import saveFile
from pyUtils.parse import parseBrain

class QLearningPlayer():
    def __init__(self):
        self.q = {}
        self.alpha = 0.015
        self.gamma = gamma
        self.epsilon = epsilon
        self.decay_rate = decay_rate
        self.wins = 0

        self.l_state = (' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ')
        self.l_action = -1

    def action(self, state, actions):
        state = tuple(state)
        self.l_state = state

        action = random.choice(actions)

        r = random.uniform(0, 1)
        if r > self.epsilon:
            if self.q.get(state):
                i = np.argmax([self.q[state][a] for a in actions])
                action = actions[i]
            else:
                self.q[state] = [1, 1, 1, 1, 1, 1, 1, 1, 1]

        self.l_action = action
        return action

    def reward(self, reward, state):
        if self.l_action >= 0:
            self.wins += 1 if reward == 1 else 0

            state = tuple(state)
            if not self.q.get(self.l_state):
                self.q[self.l_state] = [1, 1, 1, 1, 1, 1, 1, 1, 1]

            q = self.q[self.l_state][self.l_action]
            self.q[self.l_state][self.l_action] = q + self.alpha * (reward + self.gamma * np.max(self.q.get(state, [1, 1, 1, 1, 1, 1, 1, 1, 1])) - q)

    def end_round(self, episode):
        self.epsilon = self.epsilon * self.decay_rate

    def save_state(self, accuracy):
        _b = parseBrain(self.q, accuracy)
        saveFile("./model/state/brain.json", _b)

