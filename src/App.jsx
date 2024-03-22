import './App.css'
import {useState} from 'react';
function SquareComponent({value,onSquareClick})
{
   return <button className='square' onClick={onSquareClick}>{value}</button>
}
function calculateWinner(squares)
{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++)
  {
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      return squares[a];
    }
  }
  return null;
}
function App() {
  const[xIsNext,setXIsNext] = useState(true);
  const[squares,setSquares] = useState(Array(9).fill(null));
  function handleClick(i){
   const nextSquares = squares.slice();
   if(squares[i] || calculateWinner(squares))
   {
    return;
   }
   if(xIsNext)
   {
   nextSquares[i]='X'
   }
   else{
    nextSquares[i]='O'
   }
   setSquares(nextSquares);
   setXIsNext(!xIsNext);
   }
   const winner = calculateWinner(squares);
   let status;
   if(winner)
   {
     status = "Winner: "+winner;
   }
   else{
     status="Next player: "+(xIsNext ? 'X':'O');
   }
  return (
    <>
    <div className="container">
      <div className='container-title'>Tic Tac Toe Game</div>
      <div>{status}</div>
      <div className='game-board'>
      <div className='board-row'>
      <SquareComponent value={squares[0]} onSquareClick={()=>handleClick(0)}/>
<SquareComponent value={squares[1]} onSquareClick={()=>handleClick(1)}/>
<SquareComponent value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className='board-row'>
      <SquareComponent value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <SquareComponent value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <SquareComponent value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className='board-row'>
      <SquareComponent value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <SquareComponent value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <SquareComponent value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
