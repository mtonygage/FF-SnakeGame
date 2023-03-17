// Draw the canvas
let canvasElement = document.getElementById("canvas");
let ctx = canvasElement.getContext("2d");

canvasElement.width = 500;
canvasElement.height = 500;

ctx.fillStyle = "#64c4ed";
ctx.strokeStyle = "#fcfafa";

let width = 15;
let height = 15;
let cellWidth = canvasElement.width / width;
let cellHeight = canvasElement.height / height;

for (let row = 0; row < height; row++) {
  for (let column = 0; column < width; column++) {
    ctx.fillRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
    ctx.strokeRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
  }
}

// Draw the snake
let snake = {
  x: 7,
  y: 7,
  length: 3,
  segments: [],
  dir: "up"
};

// NOTE: Segments coordinates are *capital* X and Y
for (let seg = 0; seg < snake.length; seg++) {
  snake.segments.push({
    X: 7,
    Y: 9 - seg
  });
}

for (let segIndex = 0; segIndex < snake.segments.length; segIndex++) {
  if (segIndex === snake.segments.length - 1) {
    ctx.fillStyle = "deepPink";
  } else {
    ctx.fillStyle = "darkRed";
  }

  ctx.fillRect(snake.segments[segIndex].X * cellWidth,
    snake.segments[segIndex].Y * cellHeight,
    cellWidth, cellHeight);
}
