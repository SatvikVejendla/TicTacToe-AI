# TicTacToe-AI
A simple Q-learning Reinforcement Learning AI which uses the Epsilon Greedy and Gamma Discount Factor algorithms to simulate neuroevolution to learn how to play the game "TicTacToe".




## Structure

This AI uses Python to train the AI and Javascript to serve it to the user through Express.

1. First, the python starts up and simulates a competition between a QLearning AI (which preserves each state variable and classifies the optimal outputs) and a random bot (which makes random decisions).
2. This "competition" is repeated for thousands of generations, where the QLearning AI gets better and better at playing and it's accuracy increases.
3. After a specific number of generations, the model saves the current state in a file called "brain.json". When saving the file, all tuples of the states are converted into ternary format (0, 1, 2) as the keys of the JSON object.
4. This "brain.json" file is imported by a similar Javascript version of the QLearning AI. The Javascript then creates a new object of the QLearning AI with the previously made brain imported.
5. The web server starts up and sends the main html file for the users to be able to interact with it.
6. When the user interacts with the game (makes a move), a fetch request is queried to the express server, where certain endpoints are created to preserve the Node aspect of Node JS and still allow for pure JS version to interact with the AI.
7. The game then goes on normally, until one player wins or it's a draw.



## Running it yourself


To recreate this environment in your device, clone this repository.

Retraining the model:

```
python main.py -r
```



Start the web server:

```
node index.js
```


Just visit ```localhost:8000``` and the game should be up.


If you would like to change anything in the project, visit the "config" folder and you can change the variables. For now, don't change the port the server runs on because the fetch requests that are in the html file aren't suited for ports other than port 8000.

However, you CAN change it so that you can make the model train for a certain amount of generations OR a certain accuracy. Keep in mind that the "certain accuracy" version takes a lot more time.



## Future Updates


In the future, I'm looking to convert the Python training to C++ training, since C++ executes faster which will allow for more generations.
