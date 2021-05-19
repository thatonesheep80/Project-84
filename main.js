canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_img = "https://o.remove.bg/downloads/b2db7f35-0ac2-4dab-bc18-ec529a2c9ac8/79-799626_yellow-top-car-car-top-view-png-removebg-preview.png"
car1_width = 100;
car1_height = 90;
car1_y = 10;
car1_y = 10;

car2_img = "https://o.remove.bg/downloads/e46e7648-560d-4343-ba8f-7fc38ab11752/kisspng-car-laferrari-auto-racing-clip-art-truck-top-view-5a870e5f67c862.4409556815188004794251-removebg-preview.png"
car2_width = 100;
car2_height = 90;
car2_y = 10;
car2_y = 100;

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
    
    if (keyPressed = '38')
    {
        upCar1();
        console.log("up arrow");
    }

    if (keyPressed = '40')
    {
        downCar1();
        console.log("down arrow");
    }

    if (keyPressed = '37')
    {
        leftCar1();
        console.log("left arrow");
    }
    
    if (keyPressed = '39')
    {
        rightCar1();
        console.log("right arrow");
    }

    if (keyPressed = '65')
    {
       leftCar2();
        console.log("left key");
    }

    if (keyPressed = '83')
    {
       downCar2();
        console.log("down key");
    }

    if (keyPressed = '68')
    {
       UpCar2();
        console.log("up key");
    }

    if (keyPressed = '70')
    {
       rightCar2();
        console.log("right key");
    }

 }