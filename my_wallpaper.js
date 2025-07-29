//your parameter variables go here!


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
let drawLilly = (true); //ttoggle wether lillyPad is drawn
let lillySize = (1); //changes overall lillyPad size
let lillyColour = [116,228,157]; 
let lillyBacklineColour = [8, 189, 162];
let lillyBacklineTthickness = (0); //must be bigger then "lillyOutlineThickness" to be visible
let lillyOutlineColour = [73, 172, 103];
let lillyOutlineTthickness = (1.5);
let lillyWidth = (75); // length across X axis
let lillyHeight = (50); // length across Y axis
let lillyCutSize = (30); //size of the "cut" in lillypad (in degrees) -best: 30

  //lillyPad 1 (top left)
let lilly1X = (39.5); // x postion of lillyPad 1
let lilly1Y = (27); // y postion of lillyPad 1
let lilly1Cut = (55); //changes place of "cut" in lillyPad 1
  //lillyPad 1 (top right)
let lilly2X = (160.5); // x postion of lillyPad 2
let lilly2Y = (27); // y postion of lillyPad 2
let lilly2Cut = (155); //changes place of "cut" in lillyPad 2
  //lillyPad 1 (bottom left)
let lilly3X = (39.5); // x postion of lillyPad 3
let lilly3Y = (173); // y postion of lillyPad 3
let lilly3Cut = (325); //changes place of "cut" in lillyPad 3
  //lillyPad 1 (bottom right)
let lilly4X = (160.5); // x postion of lillyPad 4
let lilly4Y = (173); // y postion of lillyPad 4
let lilly4Cut = (235); //changes place of "cut" in lillyPad 4



//added if statements:
  //if (eyepupilSize > 20) //creates eye sparkle
  //if (UwU) //changes mouth from :3 to :)
  //if (drawFrog) //changes things in cheese function if frog is active (frog holds cheese)
  //if (drawBackline) //draws backline
  //if (drawCheese) //changes things in frog function if cheese is active (cheese shrinks and moves to frog)



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


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0; //nice: 100
}

function wallpaper_background() {
  background(3, 252, 215); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);
  //coords ();
  //grid();


  if (drawFrog){
    frog ();
  }
  

  if (drawLilly){
    lilly (lilly1X, lilly1Y,lilly1Cut); //draws lillyPad #1
    lilly (lilly2X, lilly2Y,lilly2Cut); //draws lillyPad #2
    lilly (lilly3X, lilly3Y,lilly3Cut); //draws lillyPad #1
    lilly (lilly4X, lilly4Y,lilly4Cut); //draws lillyPad #2
  }


  if (drawCheese){
    cheese ();
  }
  


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