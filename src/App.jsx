import './App.css'
function SquareComponent()
{
  return <button className='square' onClick={handleClick}>X</button>
}
function handleClick(){
  console.log("Clicked")
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
