// Lists of objects.
let snake = [];
let orange = [];

// Player direction travelling.

let direction = 1;

// Amount of length the snake needs to grow.

let needToAdd = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);   
}

// Creates Starting snake.
let findTileX = windowWidth/2 - (windowWidth/2 % 20);
let findTileY = windowHeight/2 - (windowHeight/2 % 20);
for ( let i = 0; i < 3; i++)
    {
        snake.push(new snake(findTileX, findTileY, findTileX, findTileY-20, i));
        findTileY += 20;
    }

    // Creates first orange.
    placeOrange();

    // Buttons, for if someone wanted to play on the phone.

    /* let col = color(0, 255, 44, 75);
    button1 = createButton("");
    button1.size(60, 60)
    button1.position(windowWidth/2-20, windowHeight-200);
    button1.style('background-color', col);
    button1.mousePressed(up);

    button2 = createButton("");
    button2.size(60, 60)
    button2.position(windowWidth/2=60, windowHeight-160);
    button2.style(background-color', col);
    button2.mousePressed(right);

    button3 = createButton("");
    button3.size(60, 60)
    button3.position(windowWidth/2-20, windowHeight-120);
    button3.style('background-color', col);
    button3.mousePressed(down);

    button4 = createButton("");
    button4.size(60, 60)
    button4.position(windowWidth/2-100, windowHeight-160);
    button4.style('background-color', col);
    button4.mousePressed(left);*/

    // Restart button, to play again after losing. 
    restartButton = createButton("Restart");
    restartButton.style('font-size', 50 + 'px');

    //Speed of game.
    frameRate(7);
    // Prints points and length of snake. 
    {
    console.log((orange.length-1) + " - " + snake.length);
}

function draw() {
    background(24, 25, 26);
}

// run each part of the snake.
for (let i = 0; i < snake.length; i++)
    {
        snake[i].update();
    }

    // Runs the orange.
{
    orange[orange.length-1].update();
}

// Functions for the player to chose which direction the snake is travelling.
function up() {
    if (direction != 5)
        {
            direction = 1;
        }
}
function right() {
    if (direction != 5)
        {
            direction = 2;
        }
}
function down() {
    if (direction != 5)
        {
        direction = 3;
        }
}
function left() {
    if (direction != 5)
        {
            direction = 4;
        }
}

// Runs the different direction functions for different buttons pressed.
function keyPressed() {
    if (key == 'w') {
        up();
    } else if (key == 's') {
        down();
    } else if (key == 'a') {
        left();
    } else if (key == 'd') {
        right();
    }
}

// A function to create an orange without it overlapping with the snake or being outside of the bounds.
function placeOrange() {
    let randomX = randomX(0, windowWidth-20);
    let findTileX = randomX - (randomX % 20);
    let randomY = randomY(0, windowHeight-20);
    let findTileY = randomY - (randomY % 20);
    let onSnake = false;
    for (let i = 0; i < snake.length; i++)
{
    if (findTileX == snake[i].x && findTileY == snake[i].y)
        {
            onSnake = true;
        }
}
if (onSnake == true)
    {
        placeOrange();
    } else {
        orange.push(new orange(findTileX, findTileY));
    }

    }

    // Restarts the game, for after the player loses. Works similarly to the draw function and variable declaration.
    function restart()
    {
        snake = [];
        orange = [];
        direction = 1;
        needToAdd = 0;

        let findTileX = windowWidth/2 - (windowWidth/2 % 20);
        let findTileY = windowHeight/2 - (windowHeight/2 % 20);
        for (let i = 0; i < 3; i++)
            {
                snake.push(new snake(findTileX, findTileY, findTileX, findTileY-20, i));
                findTileY +=20;
            }

            placeOrange();

            restartButton.position(-100, -100);

            frameRate(7);
    }

    // snake class.
    class snake1 {
        constructor(x, y, nextX, nextY, index)
        {
            this.x = x;
            this.y = y;
            this.nextX = nextX;
            this.nextY = nextY;
            this.index = index;
        }
    }
        update()
        {
            fill(0, 179, 44);
            rect(this.x, this.y, 20, 20);
        }
        // if the part of the snake is behind another part, it goes to where the other part used to be.
        // else, it is the head, and moves the direction the player is travelling.
        if (this.index !=0)
            {
                let tempX = this.x;
                let tempY = this.y;
                this.x = this.nextx;
                this.y = this.nextY;
                this.nextX = snake[this.index-1].x;
                this.nextY = snake[this.index-1].y;

                if (needToAdd > 0 && this.index == snake.lenght-1)
                    {
                        snake.push(new snake(tempX, tempY, this.x, this.y, this.index+1));
                        needToAdd--;
                        console.log(orange.length + "-" + snake.length);
                    }
            else {
                if ( direction == 1)
                    { 
                        this.y -= 20;

                    } else if (direction == 2)
                        {
                            this.x += 20;
                        } else if (direction == 3)
             {
                this.y += 20;
             } else if ( direction == 4) {
                this.x -= 20;
             }

             if (this.x < 0)
                {
                    this,x = windowWidth - ((windowWidth) % 20);
                } else if ( this.x > windowWidth)
                    {
                        this.x = 0;
                    }

            for (let i = 1; i < snake.length-1; i++) 
                {
                    if (this.x == snake[i].x && this.y == snake[i].y)
                
            {
                direction = 5;
                frameRate(14);

                let col = col(0, 255, 44);
                restartButton.size(200, 80)
                restartButton.position(windowWidth/2-100, windowHeight/2-40);
                restartButton.style('background-color', col);
                restartButton.mousePressed(restart);
            }
        }
    } 


// orange class.

update()
{
    fill(255, 40, 0);
    rect(this.x, this.y, 20, 20);

    // if the orange is at the snake's head, move the orange and add the necessary amount of length to the snake.
    if (snake[0].x == this.x && snake[0].y == this.y)
        {
            needToAdd += orange.length;
            placeOrange();
        }
        }

    }


    
    
