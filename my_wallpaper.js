//your parameter variables go here!





// frog paramiters
let frogColour = [116,228,157]; //48, 227, 122 - 116, 228, 157 - 116, 228, 144
let frogOriginX = (100); // Xpos of frog centre
let frogOriginY = (100); // Ypos of frog centre
let frogWidth = (100); //width of frog body

let mouthHeight = (70);
let UwU = (false);

let eyelidSize = (35); //size of green circle around eyes -25
let eyeSize = (30); //size of white eye part -12  -funny: 30
let eyepupilSize = (23); //size of pupil -5 -cute: 25
let eyeOffsetX = (25); // X distance of eye from centre  -best 25
let eyeOffsetY = (43); // Y distance aka height of eye from centre  -best 43


//added if statements:
  //if (eyepupilSize > 20) //creates eye sparkle
 


// cheese paramiters
// let cheeseColour = [237, 206, 52]; // og colour: 237, 206, 52
// let holeSize = (30); // og 30
// let holeColour = [237, 197, 52] ; // og colour: 237, 197, 52 // mouldy colour 150,170,154
// let holelineThickness = (2); 
// let outlineColour = [237, 191, 52]; // og colour: 237, 191, 52
// let outlineThickness = (2); // og 2
// let backlineColour = [0, 0, 0]; //og 0
// let backlineThickness = (10); // to be visible must be bigger than "outlineThickness"
// let transX = (27); //move cheese X axis (og left corner 0,0) -best 27
// let transY = (75); //move cheese y axis (og left corner 0,0) -best 75


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(3, 252, 215); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);
  //coords ();
  //grid();
  //cheese ();
  frog ();
  

  
}


function frog (){

  //body
  strokeWeight (0);
  fill (frogColour) //frog colour
  ellipse (frogOriginX, frogOriginY, frogWidth, frogWidth);


  //mouth
  if (UwU) {
  // -> :3
  strokeWeight (1);
  stroke (73, 172, 103); //41, 194, 104
  noFill ();
  arc (96.25, mouthHeight, 7.5, 7.5, 0, 180);
  arc (104.25, mouthHeight, 7.5, 7.5, 0, 180);
  }

  else {

  strokeWeight (1);
  stroke (73, 172, 103); //41, 194, 104
  arc (100, mouthHeight, 20, 20, 45, 115);


  // -> :D
  // strokeWeight (1);
  // stroke (73, 172, 103); //41, 194, 104
  // fill (79, 198, 121);
  // arc (100, mouthHeight, 20, 20, 0, 180, CHORD);

  }




  //eyes
  //left eye
  strokeWeight (0);
  fill (frogColour) //frog colour
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //eyelid
  fill (255); //white
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyeSize); // white eye part
  fill (0); //black
  ellipse (frogOriginX-eyeOffsetX, frogOriginY-eyeOffsetY, eyepupilSize); // pupil
  //right eye
  fill (frogColour) //frog colour
  ellipse (frogOriginX+eyeOffsetX, frogOriginY-eyeOffsetY, eyelidSize); //eyelid
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
strokeWeight (1);
stroke (73, 172, 103);
beginShape ();
curveVertex (110, 100)
curveVertex (130, 90) 
curveVertex (150, 70) 
curveVertex (160, 80) 
curveVertex (140, 100)
curveVertex (120, 120)
endShape ();


translate (-75, 0);
beginShape ();
curveVertex (110, 100)
curveVertex (130, 90) 
curveVertex (150, 70) 
curveVertex (160, 80) 
curveVertex (140, 100)
curveVertex (120, 120)
endShape ();
translate (50, 0);
}



function cheese (){ 

  translate(transX, transY);
  
  //backline
  strokeWeight (backlineThickness);
  stroke (backlineColour);
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
  stroke (outlineColour);
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
  strokeWeight (outlineThickness);
  line (0, 0, 145, 0);

  //outline
  strokeWeight (outlineThickness);
  noFill ();
   beginShape ();
  vertex (0, 0); //top left corner of square
  vertex (0, 75);
  vertex (145, 75);
  vertex (145, 0); //top right corner of square
  vertex (50, -30); //triangle tip
  endShape (CLOSE);



  translate(-transX, -transY);
}


//shows coords of mouse for easy coord finding
function coords () {
  stroke (0);
  strokeWeight (1);
  fill (28, 145, 156)
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