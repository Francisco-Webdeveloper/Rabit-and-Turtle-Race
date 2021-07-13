## Background & Objectives

Creation of a JavaScript game: an animal Race🐰🐢. It's a simple game where you use your keyboard to make an animal move forward. Each player will move their animal by tapping a key (e.g. `r` or `R` for Rabbit, `t` or `T` for Turtle)

The goal here is to use JavaScript, the DOM, and asynchronous event handling.

https://user-images.githubusercontent.com/67716187/125361972-69733e00-e36e-11eb-9815-53c3a0af5b93.mov

## Download
Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone "git@github.com:Francisco-Webdeveloper/Rabit-and-Turtle-Race.git"
yarn install
```
Launch your local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) in your favorite web browser

## Features
* Race track is a two-player board built with HTML table;
* The player's positions are updated by moving the `active` class from one `td` to the next one;
* JavaScript functions will update a player's position and make the animal move along the race track (td's) with the use of nextElementSibling JS property.
* The `keyup` event type will trigger the animal to move forward;
* A JS alert is used to announce the winner, once the first animal reaches the finish line;
* To restart the game we use `window.location.reload();`;

## Technologies
Project created with:
* HTML5
* CSS3
* JavaScript ES6

## Other information
You can also check the code and a preview 👉  https://codepen.io/francisco-frontend/pen/QWvGxpQ

