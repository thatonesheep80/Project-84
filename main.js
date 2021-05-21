canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_img = "car1.png"
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;

car2_img = "car2.png"
car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 310;

background_img = "https://thumbs.dreamstime.com/b/asphalt-road-top-view-wallpapers-backgrounds-168458075.jpg";



function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground()
{
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1()
{
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2()
{
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
 {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (keyPressed == '38')
    {
        upCar1();
        console.log("up arrow");
    }

    if (keyPressed == '40')
    {
        downCar1();
        console.log("down arrow");
    }

    if (keyPressed == '37')
    {
        leftCar1();
        console.log("left arrow");
    }
    
    if (keyPressed == '39')
    {
        rightCar1();
        console.log("right arrow");
    }

    if (keyPressed == '65')
    {
       leftCar2();
        console.log("left key");
    }

    if (keyPressed == '83')
    {
       downCar2();
        console.log("down key");
    }

    if (keyPressed == '68')
    {
       upCar2();
        console.log("up key");
    }

    if (keyPressed == '70')
    {
       rightCar2();
        console.log("right key");
    }

 }

 function upCar1()
 {
   if (car1_y >= 0)
   {
     car1_y = car1_y - 10;
     console.log("when up arrow is pressed x = " + car1_x + " and y = " + car1_y);
     uploadBackground();
     uploadCar1();
   }
 }

 function downCar1()
 {
   if (car1_y <= 500)
   {
    car1_y = car1_y + 10;
     console.log("when down arrow is pressed x = " + car1_x + " and y = " + car1_y);
     uploadBackground();
     uploadCar1();
   }
 }

 function leftCar1()
 {
   if (car1_x >= 0)
   {
    car1_x = car1_x - 10;
     console.log("when left arrow is pressed x = " + car1_x + " and y = " + car1_y);
     uploadBackground();
     uploadCar1();
   }
 }

 function rightCar1()
 {
   if (car1_x <= 800)
   {
    car1_x = car1_x + 10;
     console.log("when right arrow is pressed x = " + car1_x + " and y = " + car1_y);
     uploadBackground();
     uploadCar1();
   }
 }



 function upCar2()
 {
   if (car2_y >= 0)
   {
     car2_y = car2_y - 10;
     console.log("when up arrow is pressed x = " + car2_x + " and y = " + car2_y);
     uploadBackground();
     uploadCar2();
   }
 }

 function downCar2()
 {
   if (car2_y <= 500)
   {
    car2_y = car2_y + 10;
     console.log("when down arrow is pressed x = " + car2_x + " and y = " + car2_y);
     uploadBackground();
     uploadCar2();
   }
 }

 function leftCar2()
 {
   if (car2_x >= 0)
   {
    car2_x = car2_x - 10;
     console.log("when left arrow is pressed x = " + car2_x + " and y = " + car2_y);
     uploadBackground();
     uploadCar2();
   }
 }

 function rightCar2()
 {
   if (car2_x <= 800)
   {
    car2_x = car2_x + 10;
     console.log("when right arrow is pressed x = " + car2_x + " and y = " + car2_y);
     uploadBackground();
     uploadCar2();
   }
 }

 if (car1_x > 750)
 {
   console.log ("Car 1 wins");
   document.getElementById("game_stats").innerHTML = "Car 1 Wins!!";
 }

 if (car2_x > 750)
 {
   console.log ("Car 2 wins");
   document.getElementById("game_stats").innerHTML = "Car 2 Wins!!";
 }