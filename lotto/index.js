function getRandomNumber() {
  return Math.floor(Math.random() * 45 + 1);
}

function getSixNumber() {
  let numbers = new Set();

  while (numbers.size < 6) {
    let number = getRandomNumber();

    if (numbers.has(number)) {


    } else {
      numbers.add(number);
    }
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

function getLucky() {
  let numbers = getSixNumber();

  let ball1 = document.getElementById('ball1');
  ball1.innerText = numbers[0];

  let ball2 = document.getElementById('ball2');
  ball2.innerText = numbers[1];

  let ball3 = document.getElementById('ball3');
  ball3.innerText = numbers[2];

  let ball4 = document.getElementById('ball4');
  ball4.innerText = numbers[3];

  let ball5 = document.getElementById('ball5');
  ball5.innerText = numbers[4];

  let ball6 = document.getElementById('ball6');
  ball6.innerText = numbers[5];
}