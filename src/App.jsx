import './App.css'
import Header from './compnents/Header'
import BodyMassIndex from './compnents/BodyMassIndex'
import Usersrendering from './compnents/Usersrendering'
import Postsharing from './compnents/Postsharing'
import Calculator from './compnents/Calculator'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='firstrow'>
        <BodyMassIndex />
        <Usersrendering />
        <Postsharing />
        <Calculator />
      </div>



    </div>
  )
}

export default App
