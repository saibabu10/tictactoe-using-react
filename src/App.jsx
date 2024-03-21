import './App.css'
function SquareComponent({value})
{
  return <button className='square'>{value}</button>
}
function App() {
  return (
    <>
    <div className="container">
      <div className='container-title'>Tic Tac Toe Game</div>
      <div className='game-board'>
      <div>
      <SquareComponent value="1"/>
<SquareComponent value={2}/>
<SquareComponent value={3}/>
      </div>
      <div>
      <SquareComponent value={4}/>
      <SquareComponent value={5}/>
      <SquareComponent value={6}/>
      </div>
      <div>
      <SquareComponent value={7}/>
      <SquareComponent value={8}/>
      <SquareComponent value={9}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
