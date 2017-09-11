# slotGame
slotGame

How to use:

1. Open cmd, cd to a folder where you want to put the code
2. git init
3. git pull https://github.com/XBLDev/slotGame.git
4. In cmd, run: npm install http-server -g, this will install http-server, which is required to run pixijs
5. After installing http-server, in cmd, run: http-server -p 8088
6. Open web browser, type in: http://127.0.0.1:8088

Simple description of classes, I have some of the classes that are not really used but I 
forgot to delete them when I uploaded them on Friday, if a class is not included below then 
it's probably not used:

GameLogic: 

1. GameValueManager: it contains all the values that the game needs: the meter values, 
the currently visible reel numbers etc. For basically each value there's a get/set
function. Meters get their values from this class, reels update their visible symbols
from this class, and "GameLogic" + "buttonFunctions" update the values in this class.
2. GameLogic: it calculates the win values and displays the win lines after each spinning.
Use winValues to calculate win values.
3. LinePatterns: contains information of all line patterns, including line pattern positions
in each reel, each line color etc. A class just for information.
4. winValues: win values for each symbol. A class just for information.
5. LinePatternBackground: class for creating each line pattern, use LinePatterns in constructor.
Update its own visibility using GameValueManager.
6. LinePatternAllBackGround: class for fast line pattern generation(instead of generating 5 different
LinePatternBackgrounds on 5 different lines)

Visual Elements:

1. Reel: class for generating each reel, updates its visible symbols using GameValueManager
2. ReelLayouts: class that contains reel layout information, including symbol names, symbol layouts.
3. Reels: class for fast reels generation.
4. ReelSymbolTransform: contains width, height of each symbol, and start X,Y positions for the 
left top corner symbol, used by reels in their constructors.
5. SimpleSymbol: one symbol in a reel, a PIXI.Sprite.
6. SlotSymbolImageURLs: contains image paths, used by Reel in constructor.

ConsoleElements:

1. Button: Button class, gets its onClick function from ButtonFunctions class.
2. ButtonFunctions: contains all the button functions.
3. ButtonTransforms: contains transform information for each button, used by Button in constructor.
4. Meter: Meter class, gets its updated value from GameValueManager.
5. MeterTransform: contains transform information for each meter, used by Meter in constructor.

Issues(8/06/2017):

1. The OOP implementation is not "strict" enough, at least some of the classes can be smaller/split into more classes.
2. On Android, it won't react to touch, and the image I use for ACE won't show.
3. I run out of time so I didn't do the sound on click/win part.
4. Should put some comments in my code.
5. Some game functions are rather simple implementations rather than well made functions/algorithms, due to time limit.

Issues(6/06/2017):

1. I've been just rushing to get PixiJS working since i've never used it before, so no time
to split the whole thing into classes yet. And no time to clean up the code.
2. UI positions are all hard-coded.
3. I don't know how to put it on android yet, looked around but didn't find easy-to-use mannual on that. 
It's supposed to be easy enough though.
4. Don't know how far I can get with "strict OOP", not really sure how "strict" is strict
5. Game logic could be flawed since I don't know much about slot games.
