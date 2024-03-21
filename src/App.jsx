import './App.css'
import {useState} from 'react';
function SquareComponent()
{
  const[value,setValue] = useState(null)
  const handleClick=()=>{
    setValue('X');
   }
   return <button className='square' onClick={handleClick}>{value}</button>
}

function App() {
  return (
    <>
    <div className="container">
      <div className='container-title'>Tic Tac Toe Game</div>
      <div className='game-board'>
      <div>
      <SquareComponent/>
<SquareComponent/>
<SquareComponent/>
      </div>
      <div>
      <SquareComponent/>
      <SquareComponent/>
      <SquareComponent/>
      </div>
      <div>
      <SquareComponent/>
      <SquareComponent/>
      <SquareComponent/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
