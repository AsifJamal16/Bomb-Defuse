
let h2 = document.querySelector('h2');
let time = 15;
let resultHeading = document.querySelector('.resultHeading');
let hiddenSection = document.querySelector('.hideSection');
let blastSound = document.getElementById('blastSound');

let timerId = setInterval(boomHandler, 1000);

function boomHandler() {
  if (time === 0) {
    resultHeading.innerText = 'Bommmmmmm 💥💥💥';
    hiddenSection.style.display = 'none';
    blastSound.play();
    clearInterval(timerId);
  } else {
    time--;
    h2.innerText = time;
  }
}

let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');

let rand1 = Math.floor(Math.random() * 100);
num1.innerText = rand1;

let rand2 = Math.floor(Math.random() * 100);
num2.innerText = rand2;

let result = rand1 + rand2;

let stringClass = document.querySelector('.stringClass');

num1.style.display = 'none';
num2.style.display = 'none';

stringClass.innerText = `${rand1}+${rand2}`;

let ans = document.querySelector('input');

let btn = document.querySelector('button');

function defuseButton() {
  if (result == Number(ans.value)) {
    clearInterval(timerId);
    resultHeading.innerText = 'Congratulations bomb defused successfully';
    hiddenSection.style.display = 'none';
  }
}

btn.addEventListener('click', defuseButton);
