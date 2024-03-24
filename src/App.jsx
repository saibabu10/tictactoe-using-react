import React, { useState } from 'react';
import './App.css';

function SquareComponent({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{value}</button>;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function App({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="container">
        <div className='container-title'>Tic Tac Toe Game</div>
        <div className='status'>{status}</div>
        <div className='game-board'>
          <div className='board-row'>
            <SquareComponent value={squares[0]} onSquareClick={() => handleClick(0)} />
            <SquareComponent value={squares[1]} onSquareClick={() => handleClick(1)} />
            <SquareComponent value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className='board-row'>
            <SquareComponent value={squares[3]} onSquareClick={() => handleClick(3)} />
            <SquareComponent value={squares[4]} onSquareClick={() => handleClick(4)} />
            <SquareComponent value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className='board-row'>
            <SquareComponent value={squares[6]} onSquareClick={() => handleClick(6)} />
            <SquareComponent value={squares[7]} onSquareClick={() => handleClick(7)} />
            <SquareComponent value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

