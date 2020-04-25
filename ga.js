function nextGeneration() {
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
  squares[i] = pickOne();

  }
  savedsquares = [];

}
function calculateFitness() {
  let sum = 0;

  for (let square of savedsquares) {
    sum += square.score;

  }
  for (let square of savedsquares) {
    square.fitness = square.score / sum;

  }

}
function pickOne() {
  let r = random(1);
  let index = 0;
  while (r > 0) {
    r = r - savedsquares[index].fitness;
    index++;

  }
  index--;
  let square = savedsquares[index];
  let squarechild = new Square(square.brain);
  squarechild.mutate();
  return squarechild;
  
}
