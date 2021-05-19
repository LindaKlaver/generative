let box = [];
let img;
let c;
let colors = [' #fac901', '#ffffff', '#225095', '#dd0100'];
let colorpicker;



function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);




    for (let i = 0; i < 4; i++) {
        let x = random(width);
        let y = random(height);
        box.push(new Box(x, y));
    }
  coloirpicker = int(random(colors.length));


}

function draw() {






    for (let i = 0; i < box.length; i++) {
        box[i].display();
    }


    // for (let i = 0; i < box.length; i++) {
    //     if (box[i].isOver(mouseX, mouseY)) {
    //         console.log("muis is op", i);
    //     }else{
    //       console.log("muis niet", i);
    //     }
    // }



    textSize(100);
    text('draw your own', 3000, 200);
    textSize(300);
    text('Mondriaan', 2500, 450);

    image(img, 2000, 600, 750*3, 839*3);


}



function mousePressed() {
    box.push(new Box(mouseX, mouseY));
}

function preload(){
    img = loadImage('assets/head.png')
}

class Box {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.r = random(500);
        this.color = str(random(colors));
    }

    display() {
        stroke('#000000');
        strokeWeight(10);
        fill(this.color);
        rect(this.x, this.y, this.r * 2, this.r * 2);
    }



    isOver(mX, mY) {
        if (dist(mX, mY, this.x, this.y) < this.r) {
            return true;
        } else {
            return false;
        }
    }
}
