const modeBtn = document.getElementById('mode-btn')
const destroyByn = document.getElementById('destroy-btn')
const eraserBtn = document.getElementById('eraser-btn')
const colorOption = Array.from(
  document.getElementsByClassName('color-option')
);
const color = document.getElementById('color')
const lineWidth = document.getElementById('line-width')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;

}

function onColorChange(event) {
  // console.log(event.target.value);
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  // console.dir(event.target.dataset.color);
  const colorValue = event.target.dataset.color
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = 'Fill'
  } else {
    isFilling = true;
    modeBtn.innerText = 'Draw'
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}

function onDestroyClick() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function onEraserClick() {
  ctx.strokeStyle = 'white'
  isFilling = false;
  modeBtn.innerText = 'Fill'
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener('click', onCanvasClick)
lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange)

colorOption.forEach(color => color.addEventListener('click', onColorClick))


modeBtn.addEventListener('click', onModeClick)
destroyByn.addEventListener('click', onDestroyClick)
eraserBtn.addEventListener('click', onEraserClick)




// console.log(colorOption);




// const colors = [
//   "#ff3838",
//   '#ffb8b8',
//   '#c56cf0',
//   '#ff9f1a',
//   '#fff200',
//   '#32ff7e',
//   '#7efff5',
//   '#18dcff',
//   '#7d5fff'
// ]

// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener('mousemove', onClick)

// x, y = 이동 / width, height
// ctx.rect(50, 50, 100, 100);

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
// ctx.stroke();

