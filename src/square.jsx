import React from "react";

function Square({ index, square, setsquareArray, handleClick }) {
  return (
    <div className="square" onClick={() => handleClick(index)}>
      {square}
    </div>
  );
}

export default Square;
