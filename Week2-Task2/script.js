let boxes = document.querySelectorAll(".box");
console.log(boxes);
let turn = "X";
let isGameOver = false;
boxes.forEach((box) => {
  box.style.color = "white";
});
boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;

      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});
function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.getElementById("player-1").style.backgroundColor = "red";
    document.getElementById("player-2").style.backgroundColor = "#2eaf10";
  } else {
    turn = "X";
    document.getElementById("player-2").style.backgroundColor = "red";
    document.getElementById("player-1").style.backgroundColor = "#2eaf10";
  }
}

function checkWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    console.log(v0);
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;
    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      document.querySelector("#result").innerHTML = turn + " wins";
      document.querySelector("#play-again").style.display = "block";

      for (j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "#ffdd16";
        boxes[winConditions[i][j]].style.color = "black ";
      }
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") {
        isDraw = false;
      }
    });
    if (isDraw) {
      isGameOver = true;
      document.querySelector("#result").innerHTML = "Draw";
      document.querySelector("#play-again").style.display = "block";
    }
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "white";
  });
  document.getElementById("player-2").style.backgroundColor = "#ffdd16";
  document.getElementById("player-1").style.backgroundColor = "#85ff72";
});
