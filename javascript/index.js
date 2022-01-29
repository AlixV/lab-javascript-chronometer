const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

  printMinutes();
  printSeconds();
}

function printMinutes(minutes) {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  
  // decimal is minutes 
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];

}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
  let li = document.createElement('li')
  li.innerHTML = `${chronometer.split()}`
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.classList.add("stop")
  btnLeftElement.classList.remove("start")
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.classList.add("start")
  btnLeftElement.classList.remove("stop")
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
  btnRightElement.innerHTML = "RESET";
}


//To change the status of the buttons, we have to toggle their classes

// function handleClick1(event){
//  btnLeftElement.classList.toggle("start")
//  btnLeftElement.classList.toggle("stop")
// }

// function handleClick2(event){
//   btnRightElement.classList.toggle("reset")
//   btnRightElement.classList.toggle("split")
// }

// Start/Stop Button
//btnLeftElement.addEventListener('click', () => {});
btnLeftElement.addEventListener('click', ()=>{
  if(btnLeftElement.classList.contains("start")){
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
})
// Reset/Split Button
//btnRightElement.addEventListener('click', () => {});
// btnRightElement.addEventListener('click', handleClick2);
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
  if (btnRightElement.classList.contains('reset')) {
    clearSplits();
  }
});