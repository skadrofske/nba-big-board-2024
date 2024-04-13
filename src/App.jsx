import './App.css'
import Header from './Header'
import Player from './Player'
import data from './data'

function App() {

  const players = data.map(item => {
    return (
      <Player key={item.id} {...item}/>
    )
  })

  return (
    <>
      <Header />
      <div className="container">
        {players}
      </div>
    </>
  )
}

export default App
