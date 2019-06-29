# Memory Game
Type of Challenge: Consolidation Challenge  
Duration: 5 days  
Deadline: friday before noon  
Deployment: React  
Github page: [Deployed page](https://wietsegielen.github.io/Memory-game/)  
Team challenge : `solo  

## Mission objectives
Change things in the DOM (Aka canvas = cheating)
react to keypresses
collision detection

## The Mission
We want to recreate the game memory. It is a game where you have a bunch of cards. Each card contains an image. Of each image there are exactly two cards. The cards are placed in a random order. You get to turn them around. If you turned around two cards they either turn back so you can't see their image if they did not match. And if they did match they stay image face visible.

## Must-have features
Clicking cards turns them around
Randomly position the cards
Readme, but that shouldn't even have to be said
Explanation on the page itself
Nice-to-have features
Make it playable by keyboard
Let a user define custom image urls
Make it pleasing to look at
Multiplayer (local)
Tips (You might want to only read this if you are stuck)
Here is a good way to split up the work. You might want to try to split it up even further:

Have a bunch of square images (hard code their order, use html)
Make them turn on click
Make their order random using javascript
Turn them back around if you clicked two
Then implement the logic to only turn back if they don't match
Miscellanous information
