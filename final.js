
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=300;
hole_x=600;
fole_x=550;
fole_y=250;
console.log(fole_x,fole_y)


block_image_width = 10;
block_image_height = 10;

function coad_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("mytopkid.com-choo-choo-charles-clipart-5-800x533.png", function(Img) {
	    fole_obj = Img;
        console.log("ano")
		fole_obj.scaleToWidth(50);
		fole_obj.scaleToHeight(50);
		fole_obj.set({
			top:fole_y,
		    left:fole_x
			});
			canvas.add(fole_obj);
            console.log("loaded");
		});
        console.log("yes");
        new_image();    
}

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("jasmin-egger-PcGNb3QJjXI-unsplash.jpg", function(Img) {
	    hole_obj = Img;
        console.log("ano")
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
		    left:hole_x
			});
			canvas.add(hole_obj);
            console.log("loaded");
		});
        coad_img();
        console.log("yes");        
}
function new_image()
{
	fabric.Image.fromURL("ankush-minda-7KKQG0eB_TI-unsplash.jpg", function(Img) {
	    ball_obj = Img;
		ball_obj.scaleToWidth(25);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
		    left:ball_x
			});
			canvas.add(ball_obj);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
        var i=Math.random()*1;
        var k=i.toFixed(0);
        console.log(i);
        if (k==1){
            document.getElementById("hi").style.visibility="visible";
            document.getElementById("aqui").style.visibility="hidden";
			canvas.remove(ball_obj);
        }
        else{
             document.getElementById("aqui").style.visibility="visible";
             document.getElementById("hi").style.visibility="hidden";
			 canvas.remove(ball_obj);
        }

	}
    else if ((ball_x==fole_x)&&(ball_y==fole_y)){
		document.getElementById("hd3").innerHTML="Marles oofed you"
		document.getElementById("myCanvas").style.borderColor="black";
	    ball_y=0;
	    ball_x=0;
    }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=50){
			ball_y=ball_y-block_image_height;
            console.log(ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function down()
	{
		if(ball_y <=450){
			ball_y=ball_y+block_image_height;
            console.log(ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
            console.log(ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
            console.log(ball_x)
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

