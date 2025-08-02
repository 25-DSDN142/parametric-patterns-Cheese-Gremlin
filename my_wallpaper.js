//your parameter variables go here!

//water paramiters
  //water 1
let draw1Water = (true);//water leyer 1
let water1Colour = [37, 207, 245]; //9, 197, 222
let water1Thickness = (5); //stroke thickness of water layer 1 line
  //water 2
let draw2Water = (true); //togglre drawing water layer 2
let water2Colour = [9, 183, 222];
let water2Thickness = (5); //stroke thickness of water layer 2 line
  //watrer offset
let waterOffsetX = (250); //X offset between water layer 1 and water layer 2
let waterOffsetY = (0); //Y offset between water layer 1 and water layer 2
let waterRotation = (90); //rotation difference between water layer 1 and water layer 2


// frog paramiters
let drawFrog = (true);
let frogSize = (0.9); //change overall frog size
let frogColour = [116,228,157]; //48, 227, 122 - 116, 228, 157 - 116, 228, 144
let frogOutlineColour = [73, 172, 103]; 
let frogOutlineThickness = (1.5); // -best: 1
let drawBackline = (true); //toggles wether frog has 2nd outline that goes around entire frog (like sticker edge)
let frogBacklineColour = [8, 189, 162]; // dark green: 50, 143, 78 //drak turquoise: 8, 189, 162
let frogBacklineThickness = (10); // to be visible must be bigger than "frogOutlineThickness" -best 5
let frogOriginX = (100); // Xpos of frog centre
let frogOriginY = (100); // Ypos of frog centre
let frogWidth = (100); //width of frog body
let mouthHeight = (-30);// is added to frogOriginY (more negative=higher and more postive=lower) -best -30
let UwU = (false); //changes mouth shape
let eyeSize = (25); //size of white eye part -min 20 or else goofy  -sparkle: >25
let eyelidSize = (eyeSize+5); //size of green circle around eyes (change number to chang difference/space between eyeLid and eye (white part)) -best:5
let eyepupilSize = (eyeSize-5); //size of pupil -best: 5 smaller than eyeSize -for sparkle: total>20 -scared: make 15smaller than eyeSize
let eyeOffsetX = (25); // X distance of eyes from centre  -best 25 -goofy: 15
let eyeOffsetY = (43); // Y distance aka height of eyes from centre  -best: 43


//lilly paramiters
let drawLilly = (false); //toggle wether lillyPad is drawn
let lillySize = (1); //changes overall lillyPad size
let lillyColour = [116,228,157]; 
let lillyBacklineColour = [8, 189, 162];
let lillyBacklineTthickness = (0); //must be bigger then "lillyOutlineThickness" to be visible
let lillyOutlineColour = [73, 172, 103];
let lillyOutlineTthickness = (1.5); // -best: 1.5
let lillyWidth = (75); // length across X axis -best: 75
let lillyHeight = (50); // length across Y axis -best: 50
let lillyCutSize = (30); //size of the "cut" in lillypad (in degrees) -best: 30
  //lillyPad 1 (top left)
let lilly1X = (39.5); // x postion of lillyPad 1 -best: 39.5
let lilly1Y = (27); // y postion of lillyPad 1 -best: 27
let lilly1Cut = (55); //changes place of "cut" in lillyPad 1 -best: 55
  //lillyPad 1 (top right)
let lilly2X = (160.5); // x postion of lillyPad 2 -best: 160.5
let lilly2Y = (27); // y postion of lillyPad 2 -best: 27
let lilly2Cut = (155); //changes place of "cut" in lillyPad 2 -best: 155
  //lillyPad 1 (bottom left)
let lilly3X = (39.5); // x postion of lillyPad 3 -best: 39.5
let lilly3Y = (173); // y postion of lillyPad 3 -best: 173
let lilly3Cut = (325); //changes place of "cut" in lillyPad 3 -best: 325
  //lillyPad 1 (bottom right)
let lilly4X = (160.5); // x postion of lillyPad 4 -best: 160.5
let lilly4Y = (173); // y postion of lillyPad 4 -best: 173
let lilly4Cut = (235); //changes place of "cut" in lillyPad 4 -best: 235


//flower paramiters
  //flower centre
let drawFlower = (false);
let flowerSize = (1.5); //changes size of flower
let flowerCentreColour = [235, 225, 52]; //235, 225, 52
let flowerCentreOutlineColour = [240, 193, 53]; //235, 214, 52 //232, 202, 51
let flowerCentreOutlineThickness = (1);
let flowerCentreWidth = (15);
let flowerCentreHeight = (15);
  //flower petals
let flowerPetalColour = [237, 88, 217]; //211, 52, 235
let flowerPetalOutlineColour = [212, 74, 205]; //180, 52, 235
let flowerPetalOutlineThickness = (1);
let flowerPetalLength = (20); //usually labled width (for 1st petal)
let flowerPetalWidth = (10); //usually labled height (for 1st petal)
let flowePetalOffset = (7.5);
  //flower 1
let flower1X = (0);
let flower1Y = (0);
  //flower 2
let flower2X = (0);
let flower2Y = (200);
  //flower 3
let flower3X = (200);
let flower3Y = (0);


//cheese paramiters
let drawCheese = (false);
let cheeseColour = [237, 206, 52]; // og colour: 237, 206, 52
let holeSize = (30); // og 30
let holeColour = [237, 197, 52] ; // og colour: 237, 197, 52 // mouldy colour 150,170,154
let holelineThickness = (2); 
let cheeseOutlineColour = [237, 191, 52]; // og colour: 237, 191, 52
let cheeseOutlineThickness = (2); // og 2
let cheeseBacklineColour = [227, 178, 32]; //og 0
let cheeseBacklineThickness = (5); // to be visible must be bigger than "outlineThickness"
let cheeseTransX = (27); //move cheese X axis (og left corner 0,0) -best 27
let cheeseTransY = (75); //move cheese y axis (og left corner 0,0) -best 75


//added if statements:
  //if (eyepupilSize > 20) //creates eye sparkle
  //if (UwU) //changes mouth from :3 to :)
  //if (drawFrog) //changes things in cheese function if frog is active (frog holds cheese)
  //if (drawBackline) //draws backline
  //if (drawCheese) //changes things in frog function if cheese is active (cheese shrinks and moves to frog)

//---Only Paramiters Above-----------


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0; //nice: 100
}

function wallpaper_background() {
  background(3, 232, 252); //3, 252, 215
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);
  //coords ();
  //grid();

  if (draw1Water){
    water (water1Colour);
    
  }

  if (draw2Water){
      push ();
      translate (waterOffsetX, waterOffsetY);
      rotate (waterRotation);
      water (water2Colour);
      pop ();
    }


  if (drawFrog){
    frog ();
  }
  

  if (drawLilly){
    lilly (lilly1X, lilly1Y,lilly1Cut); //draws lillyPad #1
    lilly (lilly2X, lilly2Y,lilly2Cut); //draws lillyPad #2
    lilly (lilly3X, lilly3Y,lilly3Cut); //draws lillyPad #1
    lilly (lilly4X, lilly4Y,lilly4Cut); //draws lillyPad #2
  }

  if (drawFlower){
    flower (flower1X, flower1Y);
    flower (flower2X, flower2Y);
    //flower (flower3X, flower3Y);

  }


  if (drawCheese){
    cheese ();
  }
  


}


function water (waterColour){
  

  push();
  translate (200, 200)
  rotate (180);
  //^moving where water is drawn due to overallping issue when tilling 

  noFill ();
  stroke (waterColour);
  strokeWeight (water1Thickness);

  beginShape ();
  curveVertex (75, -30);
  curveVertex (30, -30); 
  curveVertex (30, 0); //connection
  curveVertex (25, 30);
  curveVertex (50, 40);
  curveVertex (75, 0); 
  curveVertex (75, -30); //connection
  curveVertex (30, -30);
  curveVertex (30, 0);
  endShape ();

  beginShape ();
  curveVertex (60, 40);
  curveVertex (75, 0);
  curveVertex (85, -10);
  curveVertex (110, -20);
  curveVertex (140, 0); 
  curveVertex (120, 50); 
  curveVertex (80, 70);
  curveVertex (60, 40);
  curveVertex (75, 0); 
  curveVertex (80, -10); 
  endShape ();

  beginShape ();
  curveVertex (40, 42); //bottom of 1st loop
  curveVertex (67, 60);
  curveVertex (70, 80);
  curveVertex (45, 87);
  curveVertex (20, 75);
  curveVertex (-10, 75);
  curveVertex (-25, 60);
  curveVertex (-27, 40);
  curveVertex (0, 20);
  curveVertex (25, 32);
  curveVertex (40, 43);
  curveVertex (67, 60);
  curveVertex (70, 80);
  endShape ();

  beginShape ();
  curveVertex (120, 50);
  curveVertex (125, 75);
  curveVertex (150, 85);
  curveVertex (170, 80);
  curveVertex (174, 60);
  curveVertex (171, 48);
  curveVertex (176, 35);
  curveVertex (183, 28);
  curveVertex (170, 15);
  curveVertex (155, 15);
  curveVertex (140, 20);
  curveVertex (120, 50);
  curveVertex (125, 75);
  curveVertex (150, 85);
  endShape ();
  //bottom right corner
  beginShape ();
  curveVertex (-30, 15);
  curveVertex (5, 18);
  curveVertex (20, 5);
  curveVertex (25, -23); //touching first loop
  curveVertex (0, -40);
  curveVertex (-40, -30);
  curveVertex (-60, -20);
  curveVertex (-60, 0);
  curveVertex (-30, 15);
  curveVertex (5, 18);
  curveVertex (20, 5);
  curveVertex (25, -23);
  endShape ();
  //furthest left
  beginShape ();
  curveVertex (0, 79); //top
  curveVertex (30, 81);
  curveVertex (45, 100);
  curveVertex (60, 130);
  curveVertex (50, 165);
  curveVertex (0, 158); //bottom
  curveVertex (-20, 120);
  curveVertex (0, 79);
  curveVertex (30, 81);
  curveVertex (40, 100);
  endShape ();

  beginShape ();
  curveVertex (70, 80);
  curveVertex (100, 70);
  curveVertex (135, 82);
  curveVertex (132, 105);
  curveVertex (110, 120);
  curveVertex (65, 125);
  curveVertex (50, 102);
  curveVertex (70, 80);
  curveVertex (100, 70);
  curveVertex (135, 82);
  endShape ();

  beginShape ();
  curveVertex (110, 180);
  curveVertex (75, 169);
  curveVertex (75, 140);
  curveVertex (90, 125);
  curveVertex (110, 123);
  curveVertex (130, 150);
  curveVertex (125, 170);
  curveVertex (110, 180);
  curveVertex (75, 169);
  curveVertex (92, 125);
  endShape ();

  beginShape ();
  curveVertex (132, 110);
  curveVertex (150, 88);
  curveVertex (172, 84);
  curveVertex (183, 98);
  curveVertex (179, 125);
  curveVertex (170, 163);
  curveVertex (140, 172);
  curveVertex (130, 150);
  curveVertex (132, 110);
  curveVertex (150, 88);
  curveVertex (172, 84);
  endShape ();

  pop ();
}


function frog (){

  push ();


  // changes frog size and keeps it at "frogOrigin Position"
  scale (frogSize);
  translate (-(frogOriginX-(frogOriginX/frogSize)), -(frogOriginY-(frogOriginY/frogSize)));
  


  //backline
if (drawBackline){
  strokeWeight (frogBacklineThickness); //changes Backline thickeness
  stroke (frogBacklineColour);
  fill (frogColour)
  ellipse (frogOriginX, frogOriginY, frogWidth, frogWidth); //body
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //left eye
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //right eye

  //arm backline   
    push ();
      if (drawCheese){
      rotate (180);
      translate (-275, -185);
    }
    beginShape ();
    curveVertex (frogOriginX+10, frogOriginY)
    curveVertex (frogOriginX+30, frogOriginY-10) 
    curveVertex (frogOriginX+50, frogOriginY-30) 
    curveVertex (frogOriginX+60, frogOriginY-20) 
    curveVertex (frogOriginX+40, frogOriginY)
    curveVertex (frogOriginX+20, frogOriginY+20)
    endShape ();

    pop ();
    //left hand
    push ();
    if (drawCheese){
      rotate (180);
      translate (-130, -185);
    }
    scale (-1, 1);
    translate (-frogOriginX*2, 0)
    beginShape ();
    curveVertex (frogOriginX+10, frogOriginY)
    curveVertex (frogOriginX+30, frogOriginY-10) 
    curveVertex (frogOriginX+50, frogOriginY-30) 
    curveVertex (frogOriginX+60, frogOriginY-20) 
    curveVertex (frogOriginX+40, frogOriginY)
    curveVertex (frogOriginX+20, frogOriginY+20)
    endShape ();

    pop();

  //feet backline
    //right foot
    beginShape ();
    curveVertex (frogOriginX+25, frogOriginY+30);
    curveVertex (frogOriginX+30, frogOriginY+35); 
    curveVertex (frogOriginX+34, frogOriginY+50); //right toe
    curveVertex (frogOriginX+22, frogOriginY+50); //left toe
    curveVertex (frogOriginX+15, frogOriginY+40);
    curveVertex (frogOriginX+5, frogOriginY+30);
    endShape ();

    //left foot
    push ();

    scale (-1, 1);
    translate (-frogOriginX*2, 0)
    beginShape ();
    curveVertex (frogOriginX+25, frogOriginY+30);
    curveVertex (frogOriginX+30, frogOriginY+35); 
    curveVertex (frogOriginX+34, frogOriginY+50); //right toe
    curveVertex (frogOriginX+22, frogOriginY+50); //left toe
    curveVertex (frogOriginX+15, frogOriginY+40);
    curveVertex (frogOriginX+5, frogOriginY+30);
    endShape ();

    pop ();


  }

  //eyelid (needs to be behind body)
  //left
  strokeWeight (frogOutlineThickness);
  stroke (frogOutlineColour); 
  fill (frogColour) //frog colour
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //eyelid
  //right
  fill (frogColour) //frog colour
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //eyelid

  //body
  strokeWeight (frogOutlineThickness);
  stroke (frogOutlineColour); 
  fill (frogColour) //frog colour
  ellipse (frogOriginX, frogOriginY, frogWidth, frogWidth);


  //mouth
  if (UwU) {
  // -> :3
  strokeWeight (frogOutlineThickness);
  stroke (frogOutlineColour); //41, 194, 104
  noFill ();
  arc (frogOriginX-3.75, frogOriginY+mouthHeight, 7.5, 7.5, 0, 180); //left mouth arc
  arc (frogOriginX+4.25, frogOriginY+mouthHeight, 7.5, 7.5, 0, 180); //right mouth arc
  }

  else {
  // -> :)
  strokeWeight (frogOutlineThickness);
  stroke (frogOutlineColour); //41, 194, 104
  arc (frogOriginX, frogOriginY+mouthHeight, 20, 20, 45, 115);


  // -> :D
  // strokeWeight (frogOutlineThickness);
  // stroke (frogOutlineColour); //41, 194, 104
  // fill (79, 198, 121);
  // arc (frogOriginX, frogOriginY+mouthHeight, 20, 20, 0, 180, CHORD);

  }


  //eyes
  //left eye
  
  // strokeWeight (frogOutlineThickness);
  // noFill ();
  // arc (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize, eyelidSize, 142, 337); //eyelid outlide
  strokeWeight (0);
  fill (frogColour); //frog colour
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize-frogOutlineThickness); //eyelid
  fill (255); //white
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyeSize); // white eye part
  fill (0); //black
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize); // pupil
  //right eye
  fill (frogColour); //frog colour
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize-frogOutlineThickness); //eyelid
  fill (255); //white
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyeSize); // white eye part
  fill (0); //black
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize); // pupil
  

  //eyesparkle
  if (eyepupilSize > 20){
 
    //left eye
    //long stroke
    strokeWeight (2);
    stroke (255);
    noFill ();
    arc (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize-7, eyepupilSize-7, 180, 200);
    //short stroke
    strokeWeight (2);
    stroke (255);
    noFill ();
    arc (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize-7, eyepupilSize-7, 220, 225);
    //right eye
    //long stroke
    strokeWeight (2);
    stroke (255);
    noFill ();
    arc (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize-7, eyepupilSize-7, 180, 200);
    //short stroke
    strokeWeight (2);
    stroke (255);
    noFill ();
    arc (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize-7, eyepupilSize-7, 220, 225);
  }

  
//hands
strokeWeight (frogOutlineThickness);
stroke (frogOutlineColour);
fill (frogColour); //frog colour

push();
//right hand
if (drawCheese){
  rotate (180);
  translate (-frogOriginX-175, -frogOriginY-85);
}
beginShape ();
curveVertex (frogOriginX+10, frogOriginY);
curveVertex (frogOriginX+30, frogOriginY-10);
curveVertex (frogOriginX+50, frogOriginY-30); 
curveVertex (frogOriginX+60, frogOriginY-20); 
curveVertex (frogOriginX+40, frogOriginY);
curveVertex (frogOriginX+20, frogOriginY+20);
endShape ();

pop ();
//left hand
push ();

if (drawCheese){

  rotate (180);
  translate (-frogOriginX-30, -frogOriginY-85);
}

scale (-1, 1);
translate (-frogOriginX*2, 0);
beginShape ();
  curveVertex (frogOriginX+10, frogOriginY);
  curveVertex (frogOriginX+30, frogOriginY-10); 
  curveVertex (frogOriginX+50, frogOriginY-30); 
  curveVertex (frogOriginX+60, frogOriginY-20); 
  curveVertex (frogOriginX+40, frogOriginY);
  curveVertex (frogOriginX+20, frogOriginY+20);
endShape ();

pop();


//feet
strokeWeight (frogOutlineThickness);
stroke (frogOutlineColour);
fill (frogColour); //frog colour

//right foot
beginShape ();
curveVertex (frogOriginX+25, frogOriginY+30);
curveVertex (frogOriginX+30, frogOriginY+35); 
curveVertex (frogOriginX+34, frogOriginY+50); //right toe
curveVertex (frogOriginX+22, frogOriginY+50); //left toe
curveVertex (frogOriginX+15, frogOriginY+40);
curveVertex (frogOriginX+5, frogOriginY+30);
endShape ();

//left foot
push ();

scale (-1, 1);
translate (-frogOriginX*2, 0);
beginShape ();
curveVertex (frogOriginX+25, frogOriginY+30);
curveVertex (frogOriginX+30, frogOriginY+35); 
curveVertex (frogOriginX+34, frogOriginY+50); //right toe
curveVertex (frogOriginX+22, frogOriginY+50); //left toe
curveVertex (frogOriginX+15, frogOriginY+40);
curveVertex (frogOriginX+5, frogOriginY+30);
endShape ();

pop ();







// //funny stuff happens
// push ();

// scale (1.1)
// frog ();

// pop ();

pop ();

}


function lilly (lillyX, lillyY,lillyCut){
 
  push ();

  // changes lillyPad size and keeps it at Original lillyPad postition (aka lilly#X, lilly#Y)
  scale (lillySize);
  translate (-(lillyX-(lillyX/lillySize)), -(lillyY-(lillyY/lillySize)));
  
  //bacline
  stroke (lillyBacklineColour);
  strokeWeight (lillyBacklineTthickness);
  arc (lillyX, lillyY, lillyWidth, lillyHeight, lillyCut, lillyCut+(360-lillyCutSize), PIE);

  //main shape
  stroke (lillyOutlineColour);
  strokeWeight (lillyOutlineTthickness);
  fill (lillyColour);
  arc (lillyX, lillyY, lillyWidth, lillyHeight, lillyCut, lillyCut+(360-lillyCutSize), PIE);
  //beginShape (lillyX, lillyY);


  pop ();
}


function flower (flowerX, flowerY){

  push ();

  // changes flower size and keeps it at Original flower postition (aka flower#X, flower#Y)
  scale (flowerSize);
  translate (-(flowerX-(flowerX/flowerSize)), -(flowerY-(flowerY/flowerSize)));

  //petals
  fill (flowerPetalColour);
  stroke (flowerPetalOutlineColour);
  strokeWeight (flowerPetalOutlineThickness);
  ellipse (flowerX-flowePetalOffset, flowerY, flowerPetalLength, flowerPetalWidth);
  ellipse (flowerX+flowePetalOffset, flowerY, flowerPetalLength, flowerPetalWidth);
  ellipse (flowerX, flowerY-flowePetalOffset, flowerPetalWidth, flowerPetalLength);
  ellipse (flowerX, flowerY+flowePetalOffset, flowerPetalWidth, flowerPetalLength);
  push ();
  translate (flowerX, flowerY);
  rotate (45);
  ellipse (-flowePetalOffset, 0, flowerPetalLength, flowerPetalWidth);
  ellipse (+flowePetalOffset, 0, flowerPetalLength, flowerPetalWidth);
  ellipse (0, -flowePetalOffset, flowerPetalWidth, flowerPetalLength);
  ellipse (0, flowePetalOffset, flowerPetalWidth, flowerPetalLength);
  pop ();
  

  //flower centre
  fill (flowerCentreColour);
  stroke (flowerCentreOutlineColour);
  strokeWeight (flowerCentreOutlineThickness);
  ellipse (flowerX, flowerY, flowerCentreWidth, flowerCentreHeight);


  pop ();
}


function cheese (){ 
   
  push ();

  if (drawFrog){ //makes frog hold cheese

    translate (frogOriginX-16 ,frogOriginY);
    scale (0.25);
  }
  else {

    translate(cheeseTransX, cheeseTransY);
  }
  
  //backline
  strokeWeight (cheeseBacklineThickness);
  stroke (cheeseBacklineColour);
  noFill ();
  beginShape ();
  vertex (0, 0); //top left corner of square
  vertex (0, 75);
  vertex (145, 75);
  vertex (145, 0); //top right corner of square
  vertex (50, -30); //triangle tip
  endShape (CLOSE);



  //cheese
  strokeWeight (1);
  stroke (cheeseOutlineColour);
  fill (cheeseColour);
  
   beginShape ();
  vertex (0, 0); //top left corner of square
  vertex (0, 75);
  vertex (145, 75);
  vertex (145, 0); //top right corner of square
  vertex (50, -30); //triangle tip
  endShape (CLOSE);

  //cheeseholes
  strokeWeight (holelineThickness);
  fill (holeColour);
  ellipse (115, 55, holeSize);
  ellipse (80, 5, holeSize);
  ellipse (30, 30, holeSize);
  arc (145, 20, holeSize, holeSize, 90, 270, CHORD);
  arc (65, 75, holeSize, holeSize, 180, 360, CHORD);
  arc (0, 75, holeSize, holeSize, 270, 360,);
  arc (27, -16.5, holeSize, holeSize, 330, 148, CHORD);

  //cheese middle line
  strokeWeight (cheeseOutlineThickness);
  line (0, 0, 145, 0);

  //outline
  strokeWeight (cheeseOutlineThickness);
  noFill ();
   beginShape ();
  vertex (0, 0); //top left corner of square
  vertex (0, 75);
  vertex (145, 75);
  vertex (145, 0); //top right corner of square
  vertex (50, -30); //triangle tip
  endShape (CLOSE);


   pop ();
}


//shows coords of mouse for easy coord finding
function coords (){
  stroke (0);
  strokeWeight (1);
  fill (28, 145, 156);
  text("x pos is " + mouseX, 25, 25); // displays text, including a P5.js variable which tracks the mouse position
  text("y pos is " + mouseY, 100, 25);

}


//shows grid for easier chord reading. grid lines every 10 pixls
function grid (){
  strokeWeight (1);
  stroke (0);
  noFill ();
  for (let x=0;x<200;x+=20){
    for (let y=0;y<200;y+=20){
      //fill(random(255));
   		rect(x,y,20,20); 

    }
  }


}