const counterEl = document.querySelector("h1");
const buttonEl = document.querySelector("button");
let count = 0;
let timer = 3000;
buttonEl.addEventListener("click", startGame);

function startGame() {
 console.log("Start game");
  buttonEl.removeEventListener("click", startGame);
  buttonEl.addEventListener("click", increment);
  buttonEl.innerHTML = "Click Me";
  setTimeout(endGame, timer)
}

function endGame() {
  console.log("End game");
  buttonEl.innerHTML = "Game Over!";
  buttonEl.removeEventListener("click", increment);
  setTimeout(resetGame, 2000);
}

function resetGame() {
  count = 0;
  buttonEl.addEventListener("click", startGame);
  counterEl.innerHTML = count;
  buttonEl.innerHTML = "Start Game";
}

function increment() {
  count++;
  counterEl.innerHTML = count;
}