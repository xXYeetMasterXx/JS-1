// A Snake game

window.onload = function(){
	canvas = document.getElementById("snake");
	pen = canvas.getContext("2d");
	document.addEventListener("keydown", keyPush);
	// Set the FPS
	setInterval(game,1000/15);
};
// These are global variables so no var

// Set player x and y position
player_x = 10;
player_y = 10;

// Set the grid size
grid_size = 20;
tile_count = 20;
grid_size_jr = 18;

// Set player x and y speed
x_speed = 0;
y_speed = 0;

// Define apple x and y position
apple_x = 15;
apple_y = 15;

// This stores all of the x and y posirrrtions of the snake
trail = [];

// This is the starting length of the snake
tail = 5;

// Variable for lives and score
lives = 5;
score = tail-5;

// All logic in the game
function game() {
	// Update player position
	player_x+=x_speed;
	player_y+=y_speed;
	
	// Snake boundaries
	if(player_x < 0) {
		player_x = tile_count - 1;
		lives -= 1;
		player_x = 10
		player_y = 10
		x_speed = 0
		y_speed = 0
		
	}
	if(player_x > tile_count - 1) {
		player_x = 0;
		lives -= 1;
		player_x = 10
		player_y = 10
		x_speed = 0
		y_speed = 0
		
	}
	if(player_y < 0) {
		player_y = tile_count - 1;
		lives -= 1;
		player_x = 10
		player_y = 10
		x_speed = 0
		y_speed = 0
		
	}
	if(player_y > tile_count - 1) {
		player_y = 0;
		lives -= 1;
		player_x = 10
		player_y = 10
		x_speed = 0
		y_speed = 0
		
	}
	
	
	// filling the background black
	pen.fillStyle = "black";
	pen.fillRect(0,0,canvas.width, canvas.height);
	
	// Draw the snake
	for(var i=0;i<trail.length;i++){
		pen.fillStyle = "green";
		pen.fillRect(trail[i].x*grid_size,trail[i].y*grid_size,						grid_size_jr,grid_size_jr);
		
		// Detect player collision with tail
		if(trail[i].x==player_x && trail[i].y==player_y) {
			player_x = 10
			player_y = 10
			if(x_speed == 0 && y_speed == 0) {
				var z = 1
			}
			else {
				lives -=1
			}
			x_speed = 0
		  y_speed = 0
			
		}
		
	
	}
	
	// Adding player position to the trail
	trail.push({x:player_x,y:player_y});
	
	// Regulate trail
	while(trail.length>tail){
		trail.shift();
	}

	// Detect collision with the apple
	if(apple_x == player_x && apple_y == player_y) {
		tail++;
		score++;
		
		apple_x = Math.floor(Math.random()*tile_count);
		apple_y = Math.floor(Math.random()*tile_count);
	}
	
	//Draw the apple
	pen.fillStyle = "red";
	pen.fillRect(apple_x * grid_size, apple_y * grid_size, 							grid_size_jr, grid_size_jr);

	// write lives
	pen.fillStyle="white"
	pen.font = "15px Courier"
	pen.fillText("Lives: " + lives, 20, 20);
	pen.fillText("Score: " + score, 20, 40)

	// Game over screen
	if(lives < 1) {
		pen.fillStyle = "red"
		pen.fillRect(0,0,1000,1000);
		pen.font = "60px Comic Sans MS"
		pen.fillStyle = "black"
		pen.fillText("Game Over", 50,200)
	}
	
}

function keyPush(evt) {
	switch(evt.keyCode) {
		case 37: // Left arrow key
			if (x_speed == 1 && y_speed === 0) {
				break
			}
			x_speed = -1;
			y_speed = 0;
			break;
		case 38: // Up arrow key
		if (x_speed == 0 && y_speed === 1) {
				break
			}
			x_speed = 0;
			y_speed = -1;
			break;
		case 39: // Right arrow key
		if (x_speed == -1 && y_speed ===0) {
			break;
		}
			x_speed = 1;
			y_speed = 0;
			break;
		case 40: // Down arrow key
		if (x_speed === 0 && y_speed == -1) {
			break;
		}
			x_speed = 0;
			y_speed = 1;
			break;
		
	}
	
}


