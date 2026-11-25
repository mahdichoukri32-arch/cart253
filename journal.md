# _Reflective Journal_

## 2026/09/14

I have worked on this project little by little. I have discovered how to apply my HTML knowledge to a complety new markup language. I find the visual appearance of Markdown as a website prettier than HTML. I was surprised that when you write Markdown syntax, it shows the result while working on Visual Studio Code.

The part that annoys me the most is changing the size of the image. I always have a problem with that. I tried to use width and height to resize my image, but nothing that I wrote worked. Some of the instructions were difficult for me to understand, but English isn't my first language, and that could explain why. For example, I didn't understand at first what a subsection was supposed to be on the website. It was only when I talked to one of my classmates that I understood it. I think for my next project, I will immediately ask for help on the Discord server when I get stuck with my coding, instead of researching on the Internet, which I found exhausting.

I hope in the future I will be able to use my creativity as a way to interact with my audience. I want my work to always be a shared experience that at least one person can relate to. At the end of the day, we are all part of the human race, and when something happens to us, it has happened to someone before. Isn't it beautiful to be understood?
![A screenshot](./topics/Prototyping_Website_/Image/Screenshot.png)

## 2026/09/22

While making these three prototypes, I learned how changing variables can be used as a tool to express creative ideas. I found it cool to see how changing simple values could completely transform a simple drawing and make it more dynamic.
What surprised me the most happened while I was working on Keep the Pressure On. My original idea was to make the balloon grow while its color became lighter. However, when the balloon became extremely large, it started to take over the entire canvas. The background appeared pink and eventually white. This was not exactly what I had planned, but I found that it made the message about uncontrollable pressure more interesting.
I had another unexpected result while making Did You See the Time?. I used constrain() to control the changes in the colors of the sky, sun, and moon. However, the beach became much darker than I expected and seemed to disappear during the transition to day. It was not realistic, but I decided to keep it because it gave the scene an interesting atmosphere. It made me think about how some parts of an environment can disappear or become less visible as time changes.
Through these prototypes, I hope people can experience feelings that are not always pleasant, such as confusion or pressure, but are still part of life. If I developed these ideas further, I would focus more on the backgrounds and environments. I discovered that the background can become part of the story instead of only supporting the main subject.
![A screenshot](./topics/Instruction_Prototype/image_2/Weird_effect.png)

## 2026/09/29

Last week, I already trained myself to work with variables, so this week allowed me to push my skills further. I created three prototypes using new variables while also reusing what I had learned before.

My favourite prototype in terms of visuals was _Ad Out of Place_. It represents an advertisement about going to Mars because Earth is dying. However, while the ad is playing, the Sun grows until it takes over everything on the screen. I created this effect by continuously adding to the size of the Sun. I also experimented with random() to make the ad display shake around its original position. What surprised me was how changing simple numerical values could completely change the feeling of the scene. The shaking makes the environment feel unstable, while the growing Sun creates a sense that something uncontrollable is happening.

In _Do You Control It?_, I wanted the user to be directly involved. I changed the canvas size so that the activity takes up more space and used mouseX and mouseY to let the user try to reproduce a mouse that I had already drawn. However, they cannot reproduce it perfectly because the drawing tool is intentionally difficult to control. I experimented with random() and the stroke weight to reinforce this lack of control.

The most difficult part was understanding how to control movement without letting objects move completely away from their original positions. I would like to develop these experiments further by finding more ways to use variables to make the user's actions produce unexpected visual results.

![A screenshot](./topics/Variable_Prototype/image_3/Mouse.png)

## 2026/10/06

This week, I discovered conditional functions and used them as a tool for my new prototypes. I also continued some concepts from my previous projects, especially the passage of time and the feeling of having control over what happens on the screen.

The prototype that pleased me the most was the _Boom!_ project, but at the same time, it was the one I found the most annoying to make. The part that required the most work was the spark. I wanted it to move down the wick and stop when it reached the beginning of the bomb. At first, the spark did not correctly follow the line, or it disappeared behind the circle. At one point, I even created a spark that became wider and wider until it took over almost the whole screen. Even if this was not what I wanted, it was interesting to see how a small change in the code could completely change the result.

The rays of sunlight also took me time to control in my _Forest_ project. They either became too long or did not visually affect the leaves enough compared to the colour changes. To change the colour of the leaves, I created a sunlight variable and used several if and else if statements to check its value. When the sunlight reaches certain values, the leaves change to another colour. This helped me represent the change of seasons through interaction.

What surprised me about conditionals is how they allow me to reuse ideas from variables while organizing different possibilities in my program. I also find the interactive aspect interesting because the user can make choices that directly affect what happens. Through these prototypes, I hope people can see how their decisions can have an impact, from controlling a small creature like a fish to changing an entire season. In the future, I would like to use conditionals to make the user part of the story instead of only being an observer.
![A screenshot](./topics/Conditionals_Prototype_/image/Autumn.png)

## 2026/10/20

Over the past two weeks, I have expanded my knowledge of conditionals by learning about events. They build on what we previously learned and introduce new ways for users to interact with a project, such as through the keyboard, mouse, or browser. I also discovered how to add custom fonts, sounds, and music to my projects, making them feel more alive and helping me express my ideas more clearly.

For these prototypes, I explored new concepts, focusing on gameplay for the first two projects and a more contemplative artwork for the last one.

In _Cooking Simulator_, the player has to cook an egg for the right amount of time to win the game. I used mouse events to allow the player to control the pan and cook the egg by holding down the mouse button. The player understands that the action is working when a frying sound starts playing.

The cooking process is represented by changes in the egg's colour. The yolk becomes yellow, while the egg white gradually turns golden brown. These changes depend on the score, which also acts as a timer. For example, below 5 points, the egg is still raw, while between 5 and 15 points, it is properly cooked. If the player continues cooking for too long, the egg becomes darker until it burns. The player loses if the egg is undercooked or overcooked, and the result appears on an ending screen after they release the mouse.

One difficulty I encountered was synchronizing the colour changes with the mouse interaction and the score. This exercise helped me understand how different variables and events can work together to create a functioning game. I also found it interesting how a simple action, such as holding down a mouse button, could create a feeling of pressure and responsibility.

On the other hand _Touch Grass_ project was more thoughtful and conceptual than practical. When I discovered window.addEventListener(), I started thinking about how the internet shapes our perception of reality. What we see online does not always represent what is real, and sometimes we need to disconnect to see things differently.

To express this idea, I drew a flower surrounded by shapes that resemble flames, creating the impression of danger in an environment where it does not belong. I chose grey because it creates a plain and lifeless atmosphere, where everything seems stagnant. I also added a dramatic message using a font that reminds me of serious or sad news, emphasizing the negative atmosphere.

However, when the user goes offline, the scene changes completely. A beautiful violet flower appears in a brighter environment. What previously looked like flames is revealed to be grass, which is actually part of the flower's natural surroundings. To emphasize this transformation, a peaceful nature sound begins playing. The message also changes to a more charming font, suggesting that there is still hope and that reality is not always as negative as it appears online.

One of my biggest difficulties was adding an image and adjusting its size to fit the canvas. I also struggled with triggering the sound through a browser event rather than a direct interaction with the canvas. This made me realize that events can create experiences that go beyond traditional mouse and keyboard interactions.

What I enjoyed most about learning events was discovering how they expand the possibilities of interaction. Unlike my previous projects, I can now create experiences where the user's actions have a more direct impact on what happens. At the same time, events can also be used in projects where the user is mainly an observer rather than an active participant.

I was surprised by how much these new functions allowed me to improve ideas I had explored since the beginning of the course. Some of my prototypes now feel closer to actual games that I would enjoy playing myself.

Through these projects, I hope people can first experience enjoyment and entertainment, especially through my mini-games. However, with Touch Grass, I want them to reflect on the importance of the real world and remember that life exists beyond what we see on the internet.

In the future, I would like to develop more interactive experiences where the user becomes the main character of their own journey, making decisions that influence the story instead of simply observing it.

![A screenshot](./topics/Event_Prototype/Image/life.png)

# 2026/10/27

This week, I rediscovered the concept of functions and learned how they can expand my ability to create projects that I previously would have found difficult to code. Functions also helped me organize my code, reduce repetition, and make it easier to understand.

What surprised me the most was how quickly I could create multiple objects using functions. This was particularly useful in my Space Piano prototype. Instead of writing separate drawing instructions for every planet, I created a drawPlanet() function and called it with each planet's data. This made my code much more readable and easier to modify. I also used functions to generate stars in the background, allowing me to randomize their positions without rewriting the drawing instructions for each star.

The most challenging part of this week's work was understanding how to use functions with return values to generate data, especially in my final prototype, Alien Translator. I struggled to connect the HTML text input and button to my p5.js program because I wanted users to enter their own words and receive a fictional alien translation. I also discovered that positioning and styling HTML elements alongside a p5.js canvas required a different approach from drawing directly on the canvas. This project became an exercise in adaptation and problem-solving. By using randomized alien symbols and a function with a return value, I created a generator that produces fictional translations based on the user's interaction.

Beyond the technical aspects, I wanted each prototype to have its own artistic identity. For Space Piano, the arrangement of the planets inspired me to transform the solar system into a musical instrument. The visual changes when hovering over a planet make the interaction more intuitive and engaging.

In Spaceship, I decided to delay the beginning of the race so users would have time to choose which spaceship to support. Each spaceship has a different colour, making it easier to identify. By assigning random velocities, I made the outcome unpredictable, adding excitement to the competition.

Through these three projects, I hope users can rediscover some of the elements that make space fascinating: our solar system, spaceships, and the possibility of extraterrestrial life.

In the future, I would like to explore functions with parameters more deeply, not only to simplify my coding process but also to make more complex and interactive ideas easier to develop.
![A screenshot](./topics/Function_Prototype/Image/Example.png)

# 2026/11/3

This week, I learned how to use arrays, which allow us to create and manage multiple objects without having to write separate code for each one.

For example, in my prototype Are You Eating Yourself?, I created four Pac-Man characters moving in different directions. They represent a person who initially procrastinates, then rushes to finish their work, eventually losing themselves under pressure. Thanks to what I learned about arrays, I was able to control the direction, speed, and movement of each Pac-Man more easily. I made the first Pac-Man move slowly before disappearing, allowing the second one to appear at a faster speed. At the end of the animation, two Pac-Man characters move toward each other and gradually merge into one circle. I was able to create a smoother transition by using the distance between the characters rather than relying only on constrain(), which limits values within a specific range.

For my Bubble Tea prototype, I was surprised by how difficult it was to make the straw function properly. The straw needed to move while popping the tapioca pearls. Creating the popping interaction was challenging because it had to occur only when the straw was close enough to a pearl, without popping an entire row at once. The pearls were also randomly generated and restricted to the cup, creating the impression that they were accumulating inside it. However, the most difficult part was animating the straw realistically. I wanted it to bend as it moved, so I had to research how to recreate this movement using the arrow keys to change its direction. This added another challenge to the game, requiring players to use both dexterity and observation to control the straw and pop the pearls.

Lastly, in my Soap prototype, arrays helped me create more fluid bubble movements. I generated bubbles randomly and used the loop for (let bubble of bubbles) to control their movement. This allowed me to animate multiple bubbles without having to write individual instructions for each one, while still giving them different movements.

I would love to explore loops further because they become especially useful when combined with arrays to create and manage multiple objects. In the future, I want people interacting with my prototypes to experience something similar to a sandbox game, where they have the freedom to experiment and create, with their imagination being the only limit.

![A screenshot](./topics/Arrays_Prototype/Image/Buble_Tea.png)

# 2026/11/17

This week, I started developing my final prototype, _free-Dom_, inspired by the well-known dinosaur game created by Google, _Chrome Dino_. In my game, the player controls a creature using the mouse, which is connected to the creature by a rope. Along the way, the player must guide it through obstacles. However, the further the player progresses, the harder it becomes to control the creature, as it gradually develops its own independence. The main obstacle is no longer the environment, but the relationship between the player and the creature. This raises an important question: will you let the creature be free, or will you force it to obey you?

For my first attempt, I tried to create a simpler version of the first level. The creature is currently represented by a circle that the player can move using the mouse. Its movement is connected to a line that follows the cursor, representing the rope. I also created two rectangular obstacles placed in different positions. They move back and forth across the canvas, and the player must guide the creature to avoid colliding with them. If the creature touches one of the obstacles, the game ends.

My main difficulty was translating the ideas I had imagined into an actual interactive game. At first, I wanted to create a line that followed the cursor to help the player understand the connection between their movements and the creature. However, I struggled to make the rope and the creature move together naturally. I wanted the creature to look as if it was being dragged by the player rather than simply following the mouse directly.

To solve this problem, I experimented with the **lerp()** function, which allowed me to connect the creature's movement to the rope while controlling how smoothly it moved. I chose a value of **0.1**, as it created a movement that was neither too fast nor too slow. This helped me communicate the idea of guidance and made the interaction feel more natural. I was happy to finally find a solution because it allowed me to transform an important part of my concept into something functional.

However, I still have some technical problems to solve. Currently, when the creature collides with an obstacle, the game ends and an ending message appears. When the player tries to restart, the creature returns to the same position where the collision happened, causing the game to end again immediately. I will need to figure out how to reset the creature's coordinates to its starting position and make sure the game can restart properly.

Another aspect I want to explore is the visual design of the creature. I am considering using a caterpillar instead of a simple circle. My inspiration comes from the Japanese emperor caterpillar, which I find visually remarkable and memorable. Its antennae resemble plants growing from its head, which I think could connect symbolically to my game's theme of growth and independence. I also like how expressive its face looks without requiring too many details, which could make it easier to adapt into a simple animated character.

For the next stage, I want to improve the creature's appearance and continue developing the movement system. I will also need to think about how the obstacles can gradually disappear without the player immediately noticing. This is important because I want the player to slowly realize that the creature no longer needs their protection. Through this first week, I learned that even a simple interaction, such as connecting a circle to a line, can become challenging when trying to communicate a specific idea through programming. It also helped me understand how technical decisions can influence the player's experience and the meaning of the game.

![Japanese Emperor Caterpillar](./topics/Final_Protytpe/free-DOM/assets/images/caterpillar.jpg)
![free-Dom demo screenshot](./topics/Final_Protytpe/free-DOM/assets/images/free-Dom-demo.png)

# 2026/11/24

This week, I continued developing my final project, _Free-DOM_, by focusing on the gameplay of the first two levels. My main objective was to establish a functional game before progressively introducing changes in the relationship between the player and the creature.

One of the first problems I solved was the restarting system that I mentioned in my previous journal entry. By creating a `resetGame()` function, I was able to reset the creature's position, the obstacles, and the score, allowing the player to restart the game after losing.

Inspired by _Chrome Dino_, I wanted to create the impression that the creature was moving through an environment where new obstacles continuously appeared. To achieve this, I used arrays and loops instead of creating each obstacle individually. However, I encountered several errors because some of my functions were still referring to my original two obstacles. I had to adapt these functions by using parameters, which helped me better understand how arrays, loops, and functions can work together.

Another difficulty was the distribution of the obstacles. At first, I used random values for their positions, but several obstacles were overlapping, making the game difficult to play. To solve this problem, I used a loop to identify the obstacle located furthest to the right before repositioning another obstacle after it. This helped me understand that randomness needs to be controlled depending on the experience I want to create.

I also improved the collision system by including the radius of the creature in my conditions. Previously, the game did not always end immediately when the creature touched an obstacle. I then introduced a scoring system and a progress bar to give the player an objective. Each time an obstacle completely leaves the canvas, the player receives one point, and the progress bar gradually fills until the score reaches fifteen.

![Level 2 of the game](./topics/Final_Prototype/free-DOM/assets/images/level_2.png)
_Screenshot of the second level of Free-DOM._

For the second level, I wanted the player to experience the first signs of resistance from the creature. With the help of the professor, I explored how to modify the creature's movement using the `lerp()` and `random()` functions. Unlike the first level, where the value of `lerp()` remained constant at 0.1, it can now occasionally change to a random value between 0.002 and 0.15. This allows the creature to react more slowly or more quickly to the player's movements.

I also added a slight shaking movement by introducing random variations between -1 and 1 to its coordinates. Since the obstacles are now larger and have different dimensions, I did not want the creature's movements to become too unpredictable. My intention is to make the player gradually experience difficulties controlling the creature without making the game unnecessarily frustrating.

Through this week's work, I realized that programming a game requires more than making its mechanics functional. I also need to consider how each technical decision influences the player's experience. In this project, even a small change in the creature's movement can help communicate its growing resistance.

For the next stage, I want to develop the creature's independence and explore how the obstacles can gradually disappear without the player immediately noticing. I also still need to work on the creature's visual appearance. Ultimately, I want to transform the experience from a traditional obstacle game into a reflection on the difference between guiding and controlling someone.
