import React, { useState, useEffect } from "react";
import Square from "./square";
// let squareArray = ["", "", "", "", "", "", "", "", "", ""];

function Squares() {
  const [xTurn, setxTurn] = useState(true);
  const [Lock, setLock] = useState(false);

  const [squareArray, setsquareArray] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const checkWinner = () => {
    const lines = [
      [3, 4, 5],
      [0, 1, 2],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squareArray[a] !== "" &&
        squareArray[a] === squareArray[b] &&
        squareArray[a] === squareArray[c]
      ) {
        return squareArray[a];
      }
      // return false;
    }
  };
  const isWinner = checkWinner();
  const checkTie = () => {
    let count = 0;
    squareArray.forEach((square) => {
      if (square !== "" && !isWinner) {
        count++;
      }
    });
    return count === 9;
  };
  const isTie = checkTie();
  const handleClick = (i) => {
    console.log(squareArray);
    if (squareArray[i] !== "") {
      return 0;
    }
    if (isWinner) {
      return 0;
    }
    updateValue(i);
  };
  const updateValue = (i) => {
    const updated = [...squareArray];
    updated[i] = xTurn ? "X" : "O";
    setxTurn(!xTurn);
    setsquareArray(updated);
  };
  const reset = () => {
    console.log("clicked");
    setsquareArray(["", "", "", "", "", "", "", "", ""]);
    setxTurn(true);
  };
  return (
    <div className="board">
      {isWinner ? (
        <h1 className="game-title">
          {isWinner} is the winner{" "}
          <button onClick={() => reset()}>Play again</button>
        </h1>
      ) : isTie ? (
        <h1 className="game-title">
          There is no winner <button onClick={() => reset()}>Play again</button>
        </h1>
      ) : (
        <div className="game-title"> Tic Tac Toe Game </div>
      )}
      {}
      <div className="squares">
        {squareArray.map((square, i) => {
          return (
            <Square
              key={i}
              index={i}
              square={square}
              setsquareArray={setsquareArray}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Squares;
