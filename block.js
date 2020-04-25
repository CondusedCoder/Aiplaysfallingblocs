class Block {
  constructor() {


  this.x = random(width);
  this.y = 0;
  this.speed = 2;
  this.size = random(10, 40);
  this.vel = 0.02;
}



show() {
  fill(0);

  rect(this.x, this.y, this.size, this.size);

}
update() {
  this.y += this.speed;


}
}
