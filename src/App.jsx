import './App.css'
import Header from './Header'
import Player from './Player'
import data from './data'

function App() {

  const players = data.map((item, index) => {
    return (
      <Player key={item.name} rank={index + 1} {...item}/>
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
