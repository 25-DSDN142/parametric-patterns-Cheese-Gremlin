//your parameter variables go here!

//water paramiters
  //water 1 (darker)
let draw1Water = (true);//water leyer 1
let water1Colour = [46, 186, 193]; //9, 197, 222 //37, 207, 245 //light varient: 56, 197, 200 //dark varient: 46, 186, 193
let water1Thickness = (5); //stroke thickness of water layer 1 line
  //water 2 (lighter)
let draw2Water = (true); //togglre drawing water layer 2
let water2Colour = [73, 224, 228]; //9, 183, 222 //light varient: 131, 245, 245 //dark varient: 73, 224, 228
let water2Thickness = (5); //stroke thickness of water layer 2 line
  //water offset
let waterOffsetX = (275); //X offset between water layer 1 and water layer 2
let waterOffsetY = (0); //Y offset between water layer 1 and water layer 2
let waterRotation = (90); //rotation difference between water layer 1 and water layer 2


// frog paramiters
let drawFrog = (true);
let frogSize = (0.88); //change overall frog size
let frogColour = [116, 228, 157]; //48, 227, 122 - 116, 228, 144 -best: 116, 228, 157
let frogOutlineColour = [73, 172, 103]; //nice green: 73, 172, 103
let frogOutlineThickness = (1); // -best: 1
let drawBackline = (true); //toggles wether frog has 2nd outline that goes around entire frog (like sticker edge)
let frogBacklineColour = [50, 143, 78]; // dark green: 50, 143, 78 //drak turquoise: 8, 189, 162 // lighhter tourqiouse 74, 232, 206
let frogBacklineThickness = (10); // to be visible must be bigger than "frogOutlineThickness" -best 5
let frogOriginX = (100); // Xpos of frog centre
let frogOriginY = (100); // Ypos of frog centre
let frogWidth = (100); //width of frog body
let mouthHeight = (-30);// is added to frogOriginY (more negative=higher and more postive=lower) -best -30
let UwU = (false); //changes mouth shape
let eyeSize = (26); //size of white eye part -min 20 or else goofy  -sparkle: >25
let eyelidSize = (eyeSize+5); //size of green circle around eyes (change number to chang difference/space between eyeLid and eye (white part)) -best:5
let eyepupilSize = (eyeSize-5); //size of pupil -best: 5 smaller than eyeSize -for sparkle: total>20 -scared: make 15smaller than eyeSize
let eyeOffsetX = (25); // X distance of eyes from centre  -best 25 -goofy: 15
let eyeOffsetY = (43); // Y distance aka height of eyes from centre  -best: 43


//lilly paramiters
let drawLilly = (true); //toggle wether lillyPad is drawn
let lillySize = (1); //changes overall lillyPad size
let lillyColour = [116,228,157]; 
let lillyBacklineColour = [8, 189, 162];
let lillyBacklineTthickness = (5); //must be bigger then "lillyOutlineThickness" to be visible
let lillyOutlineColour = [73, 172, 103];
let lillyOutlineTthickness = (1.5); // -best: 1.5
let lillyWidth = (75); // length across X axis -best: 75
let lillyHeight = (50); // length across Y axis -best: 50
let lillyCutSize = (30); //size of the "cut" in lillypad (in degrees) -best: 30
  //lillyPad 1 (top left)
let lilly1X = (39.5); // x postion of lillyPad 1 -best: 39.5
let lilly1Y = (27); // y postion of lillyPad 1 -best: 27
let lilly1Cut = (55); //changes place of "cut" in lillyPad 1 -best: 55
  //lillyPad 2 (top right)
let lilly2X = (160.5); // x postion of lillyPad 2 -best: 160.5
let lilly2Y = (27); // y postion of lillyPad 2 -best: 27
let lilly2Cut = (155); //changes place of "cut" in lillyPad 2 -best: 155
  //lillyPad 3 (bottom left)
let lilly3X = (39.5); // x postion of lillyPad 3 -best: 39.5
let lilly3Y = (173); // y postion of lillyPad 3 -best: 173
let lilly3Cut = (325); //changes place of "cut" in lillyPad 3 -best: 325
  //lillyPad 4 (bottom right)
let lilly4X = (160.5); // x postion of lillyPad 4 -best: 160.5
let lilly4Y = (173); // y postion of lillyPad 4 -best: 173
let lilly4Cut = (235); //changes place of "cut" in lillyPad 4 -best: 235


//flower paramiters
  //flower centre
let drawFlower = (true);
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
let flowerPetal2Colour = [245, 135, 230]; //lighter pink

let CoolFlowerPetal = (false); //currently broken
let layerdFlowerPetal = (true);
    //middle layer
let middleFlowerPetal = (true);
let flowerPetal3Colour = [245, 162, 233]; //245, 154, 232
let flowerPetal4Colour = [245, 198, 238];
    //back layer
let backFlowerPetal = (true);
let flowerPetal5Colour = [247, 215, 243];
let flowerPetal6Colour = [247, 228, 245];
  //flower 1
let drawFlower1 = (true);
let flower1X = (0);
let flower1Y = (0);
  //flower 2
let drawFlower2 = (true);
let flower2X = (0);
let flower2Y = (200);
  //flower 3
let drawFlower3 = (true);
let flower3X = (200);
let flower3Y = (0);
  //flower 4
let drawFlower4 = (true);
let flower4X = (200);
let flower4Y = (200);


//cheese paramiters
let drawCheese = (false);
let cheeseColour = [237, 206, 52]; // og colour: 237, 206, 52
let holeSize = (30); // og 30
let holeColour = [237, 191, 52] ; // og colour: 237, 197, 52 // mouldy colour 150,170,154 //darker but orangy 237, 191, 52 //235, 191, 35 //235, 197, 26
let holelineThickness = (2); 
let cheeseOutlineColour = [235, 170, 42]; // og colour: 237, 191, 52 // darker 235, 170, 42 //235, 181, 19
let cheeseOutlineThickness = (2); // og 2
let cheeseBacklineColour = [237, 189, 47]; //og 0 //dark orange 227, 178, 32 //light yellow 245, 228, 142
let cheeseBacklineThickness = (20); // to be visible must be bigger than "outlineThickness"
  //cheese positions
  //main cheese
let mainCheese = (false);
let mainCheeseSize = (1);
let mainCheeseX = (27.5); //move cheese X axis (for left corner 0,0) //27.5 for centre
let mainCheeseY = (75); //move cheese y axis (for left corner 0,0)  //75 for centre
  //cheese 1 
let drawCheese1 = (true);
let cheese1Size = (0.5);
let cheese1X = (-30);
let cheese1Y = (-15);
  //cheese 2
let drawCheese2 = (true);
let cheese2Size = (0.5);
let cheese2X = (-30);
let cheese2Y = (185);
  //cheese 3
let drawCheese3 = (false);
let cheese3Size = (0.5);
let cheese3X = (200);
let cheese3Y = (0);
  //cheese 4
let drawCheese4 = (false);
let cheese4Size = (0.5);
let cheese4X = (200);
let cheese4Y = (200);

//frog&cheese paramiters
let drawFrogCheese = (false);


//added if statements:
  //if (eyepupilSize > 20) //creates eye sparkle
  //if (UwU) //changes mouth from :3 to :)
  //if (drawFrog) //changes things in cheese function if frog is active (frog holds cheese)
  //if (drawBackline) //draws backline
  //if (drawCheese) //changes things in frog function if cheese is active (cheese shrinks and moves to frog)
  //if (layerdFlowerPetal) which contains if (backFlowerPetal) and if (middleFlowerPetal) //changes how many "petal layers" flowers have


let RowOffset = 0
//---Only Paramiters Above-----------


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER); 
  //pWallpaper.output_mode(GLIDE_WALLPAPER); 
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = (RowOffset); //nice: 100
}

function wallpaper_background() {
  background(50,204,209); //3, 252, 215 //3, 232, 252 //light water background: 95, 214, 212 //dark water background: 60, 196, 201 //best: 50,204,209 with water //81, 240, 227
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);
  //coords ();
  //grid();

  if (draw1Water){
    push ();
    translate (100, 0) //stops water overlap
    water (water1Colour);
    pop ();
    
  }

  if (draw2Water){
      push ();
      translate (waterOffsetX, waterOffsetY);
      rotate (waterRotation);
      water (water2Colour);
      pop ();
    }


  if (drawFrog){
    push ();
    translate (-100, -150) //stops water overlap
    frog ();
    pop ();
  }
  

  if (drawLilly){
    push ();
    translate (-100, -150) //stops water overlap
    lilly (lilly1X, lilly1Y,lilly1Cut); //draws lillyPad #1
    lilly (lilly2X, lilly2Y,lilly2Cut); //draws lillyPad #2
    lilly (lilly3X, lilly3Y,lilly3Cut); //draws lillyPad #1
    lilly (lilly4X, lilly4Y,lilly4Cut); //draws lillyPad #2
    pop ();
  }

  if (drawFlower){
  push ();
  translate (-100, -150) //stops water overlap
    if (drawFlower1){
    flower (flower1X, flower1Y);
    }
    if (drawFlower2){
    flower (flower2X, flower2Y);
    }
    if (drawFlower3){
    flower (flower3X, flower3Y);
    }
    if (drawFlower4){
    flower (flower4X, flower4Y);
    }
  pop ();
  }


  if (drawCheese){
    push ();
    translate (-100, -150) //stops water overlap

    if (drawFrogCheese){ //makes frog hold cheese
    push();
    translate (frogOriginX-16 ,frogOriginY);
    cheese (0,0, 0.25);
    pop();
    
    push ();
    
    if (drawCheese1){
    cheese (cheese1X, cheese1Y, cheese1Size);
    }
    if (drawCheese2){
    cheese (cheese2X, cheese2Y, cheese2Size);
    }
    if (drawCheese3){
    cheese (cheese3X, cheese3Y, cheese3Size);
    }
    if (drawCheese4){
    cheese (cheese4X, cheese4Y, cheese4Size);
    }
    pop();
    }
    if (mainCheese){ //draws cheese at centre when cheeseSize is 1
    cheese (mainCheeseX, mainCheeseY, mainCheeseSize);
    }

  pop ();
  }
  


}


function water (waterColour){
  

  push();
  translate (200-RowOffset, 200)
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
      if (drawFrogCheese){
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
    if (drawFrogCheese){
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


  }


  //eyes
  //left eye
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
if (drawFrogCheese){
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

if (drawFrogCheese){

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

  if (layerdFlowerPetal){

      //back flower petals
    if (backFlowerPetal){
      //flower petals #5
      push ();
      fill (flowerPetal5Colour);
      ellipse (flowerX-flowePetalOffset-(flowerPetalLength/4), flowerY, flowerPetalLength, flowerPetalWidth);
      ellipse (flowerX+flowePetalOffset+(flowerPetalLength/4), flowerY, flowerPetalLength, flowerPetalWidth);
      ellipse (flowerX, flowerY-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      ellipse (flowerX, flowerY+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      push ();
      //flower petals #6
      translate (flowerX, flowerY);
      rotate (45);
      fill (flowerPetal6Colour);
      ellipse (0-flowePetalOffset-(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0+flowePetalOffset+(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0, 0-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      ellipse (0, 0+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      pop ();
      pop ();

    }
    

      //middle flower petals
    if (middleFlowerPetal){
      //flower petals #3
      push ();
      translate (flowerX, flowerY);
      fill (flowerPetal3Colour);
      rotate (22.5);
      ellipse (0-flowePetalOffset-(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0+flowePetalOffset+(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0, 0-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      ellipse (0, 0+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      push ();
      //flower petals #4
      rotate (45);
      fill (flowerPetal4Colour);
      ellipse (0-flowePetalOffset-(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0+flowePetalOffset+(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
      ellipse (0, 0-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      ellipse (0, 0+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
      pop ();
      pop ();

    }
  }
  
    //cool flower (accidentally created. check progress Doc) <- doesnt work currently
  if (CoolFlowerPetal){
    //push ();
    translate (flowerX, flowerY);
    fill (flowerPetal3Colour);
    rotate (22.5);
    ellipse (0-flowePetalOffset-(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
    ellipse (0+flowePetalOffset+(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
    ellipse (0, 0-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
    ellipse (0, 0+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
    push ();
    translate (flowerX, flowerY);
    rotate (45);
    fill (flowerPetal4Colour);
    ellipse (0-flowePetalOffset-(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
    ellipse (0+flowePetalOffset+(flowerPetalLength/4), 0, flowerPetalLength, flowerPetalWidth);
    ellipse (0, 0-flowePetalOffset-(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
    ellipse (0, 0+flowePetalOffset+(flowerPetalLength/4), flowerPetalWidth, flowerPetalLength);
    pop ();
    
  }


  // front flower petals
    //flower petals #1
  ellipse (flowerX-flowePetalOffset, flowerY, flowerPetalLength, flowerPetalWidth); //left petal
  ellipse (flowerX+flowePetalOffset, flowerY, flowerPetalLength, flowerPetalWidth); //right petal
  ellipse (flowerX, flowerY-flowePetalOffset, flowerPetalWidth, flowerPetalLength); //top petal
  ellipse (flowerX, flowerY+flowePetalOffset, flowerPetalWidth, flowerPetalLength); //bottom petal
  push ();
    //flower petals #2
  translate (flowerX, flowerY);
  fill (flowerPetal2Colour);
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


function cheese (cheeseX, cheeseY, cheeseSize){ 
   
  push ();

  // changes cheese size and keeps it at Original cheese postition
  scale (cheeseSize);
  translate (-(cheeseX-(cheeseX/cheeseSize)), -(cheeseY-(cheeseY/cheeseSize)));
  translate (cheeseX, cheeseY)

  
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