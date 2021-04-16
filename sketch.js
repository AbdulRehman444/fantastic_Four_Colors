var canvas;
var music;
var jumpingBox,edges;

var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    jumpingBox = createSprite(random(20,750),300,50,50);
    jumpingBox.shapeColor = "white";
    jumpingBox.velocityX = -12;
    jumpingBox.velocityY= 12;
    
    

    surface1 = createSprite(100,560,200,30);
    surface1.shapeColor = "yellowGreen";
    surface2 = createSprite(310,560,200,30);
    surface2.shapeColor = "Gold";
    surface3 = createSprite(520,560,200,30);
    surface3.shapeColor = "OrangeRed";
    surface4 = createSprite(730,560,200,30);
    surface4.shapeColor = "DarkTurquoise";

    //create box sprite and give velocity

}

function draw() {
    background("Teal");
    //create edgeSprite
    edges = createEdgeSprites();
    jumpingBox.bounceOff(edges);
    if(surface1.isTouching(jumpingBox)&& jumpingBox.bounceOff(surface1)){
        jumpingBox.shapeColor = "yellowGreen";
        music.play();
    }
    if(surface2.isTouching(jumpingBox)&& jumpingBox.bounceOff(surface2)){
        jumpingBox.shapeColor = "Gold";
       
       music.stop();
    }
    if(surface3.isTouching(jumpingBox)&& jumpingBox.bounceOff(surface3)){
        jumpingBox.shapeColor = "OrangeRed";
        
    }
    if(surface4.isTouching(jumpingBox)&& jumpingBox.bounceOff(surface4)){
        jumpingBox.shapeColor = "DarkTurquoise";
        
    }
    
   

    //jumpingBox.bounceOff(s1);
    //jumpingBox.bounceOff(s2);
    //jumpingBox.bounceOff(s3);
    //jumpingBox.bounceOff(s4);    
     drawSprites();

    //add condition to check if box touching surface and make it box
}
