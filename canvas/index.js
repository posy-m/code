let canvas, context;

// 이동 속도 변수 dx: 좌우, dy: 상하
let dx = 0, dy = 0;

// 캐릭터 현재 위치
let x = 200, y = 250;

// 캐릭터 이미지 크기 반지름
let w = 40, h = 40;

// 눌린 키 표시용 텍스트
let keyText = "";

// 이미지 객체 생성 (캐릭터, 배경)
let imgChar = new Image();
let imgBg = new Image();

// 이미지가 모두 로드되었는지 확인하기 위한 카운터
let imagesLoaded = 0;

imgChar.onload = checkLoaded;
imgBg.onload = checkLoaded;

imgChar.src = "./images/avatar.jpeg";      // 이미지 경로 정확히
imgBg.src = "./images/background.jpeg";    // 이미지 경로 정확히

// 두 이미지가 모두 로드 되었는지 확인하는 함수
function checkLoaded() {
  imagesLoaded++;
  if (imagesLoaded === 2) {
    init();
  }
}

// 초기화 함수
function init() {
  canvas = document.getElementById("c1");
  context = canvas.getContext("2d");

  // 키보드 이벤트 리스너 등록
  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);

  // 10ms마다 runGame 실행 
  setInterval(runGame, 10);
}

// 메인 루프 (움직임과 그리기 반복 실행)
function runGame() {
  moveAll();
  drawAll();
}

// 현재 이동 속도에 따라 캐릭터 좌표 갱신
function moveAll() {
  x += dx;
  y += dy;
}

// 화면 전체를 다시 그리는 함수
function drawAll() {
  // 배경 그리기 (캔버스 크기에 맞춰서)
  context.drawImage(imgBg, 0, 0, 400, 500);

  // 캐릭터 이미지 그리기 (중심 좌표 기준)
  context.drawImage(imgChar, x - w, y - h, w * 2, h * 2);

  // 눌린 키 표시용 텍스트 (좌측 상단)
  context.fillStyle = "white";
  context.font = "20px sans-serif";
  context.fillText(keyText, 10, 30);
}

// 키 누를 때 실행되는 함수
function keydown(event) {
  switch (event.keyCode) {
    case 37: dx = -1; keyText = "LEFT"; break;
    case 38: dy = -1; keyText = "UP"; break;
    case 39: dx = 1; keyText = "RIGHT"; break;
    case 40: dy = 1; keyText = "DOWN"; break;
  }
}

// 키 누를 때 실행되는 함수
function keyup(event) {
  switch (event.keyCode) {
    case 37:
    case 39:
      dx = 0;
      break;
    case 38:
    case 40:
      dy = 0;
      break;
  }
  keyText = "";
}


