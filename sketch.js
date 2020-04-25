const TOTAL = 100;

let blocks = [];
let squares = [];
let savedsquares = [];
let blocksi;



let gen = 0;



function setup() {
  createCanvas(600, 600);
  blocks.push(new Block());

for (let i = 0; i < TOTAL; i++) {
  squares[i] = new Square();

}


}
function draw() {
  background(220);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].show();
    blocks[i].update();

    if (blocks[i].y >= height) {
      savedsquares.push(blocks.splice(i, 1));

    }
    blocksi = blocks[i];


  }
  if (frameCount % 100 == 0) {
    blocks.push(new Block());




  }
  for (let square of squares) {
    square.show();
    square.update();
    square.think(blocks[0]);

  }

for (let i = 0; i < squares.length; i++) {

    if (collides(squares[i], blocks[0])) {
      squares.splice(i, 1);

    }

}
if (squares.length === 0) {
nextGeneration();
gen++;

}
text("gen: " + (gen + 1), 10, 20);


}
function collides(square, block) {
  let d = dist(square.x, square.y, block.x, block.y);
  if (d < square.size + block.size) {
    return true;


  }
  else {
    return false;

  }
}
