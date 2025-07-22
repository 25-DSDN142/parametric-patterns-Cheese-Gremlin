//your parameter variables go here!
let cheeseColour = [237, 206, 52]; // og colour: 237, 206, 52
let holeSize = (30); // og 30
let holeColour = [237, 197, 52] ; // og colour: 237, 197, 52 // mouldy colour 150,170,154
let holelineThickness = (2); 
let outlineColour = [237, 191, 52]; // og colour: 237, 191, 52
let outlineThickness = (2); // og 2
let backlineColour = [0, 0, 0]; //og 0
let backlineThickness = (10); // to be visible must be bigger than "outlineThickness"
let transX = (27); //move cheese X axis (og left corner 0,0) -best 27
let transY = (75); //move cheese y axis (og left corner 0,0) -best 75


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
  background(228, 140, 230); //light purple colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);
  //coords ();
  //grid();

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
  noFill ();
  for (let x=0;x<200;x+=20){
    for (let y=0;y<200;y+=20){
      //fill(random(255));
   		rect(x,y,20,20); 

    }
  }


}