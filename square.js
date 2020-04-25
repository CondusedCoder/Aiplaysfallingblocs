class Square {
  constructor(brain) {
    this.x = random(width);

      this.y = 590;
      this.speed = 6;
      this.size = 20;
      this.brain;

      if (brain) {
        this.brain = brain;

      }
      else {
        this.brain = new NerualNetwork(4, 4, 2);

      }
      this.score = 0;
      this.fitness = 0;

    }
    show() {

      fill(255);

      rect(this.x, this.y, this.size, this.size);

    }
    update() {
      if (this.x >= 600) {
        this.x = 600;

      }
      if (this.x <= 0) {
        this.x = 0;

      }
      this.score++;

    }
    think(blocks) {
      let inputs = [this.x, this.y, blocks.x, blocks.y];

      let output = this.brain.feedforward(inputs);
      if (output[0] > output[1]) {
        this.x -= this.speed;

      }
      if (output[1] > output[0]) {
        this.x += this.speed;

      }
    }
    mutate() {
      this.brain.mutate(1);
      
    }

}
