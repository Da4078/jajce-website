import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Discover from './routes/Discover'
import About from './routes/About'

function App() {

  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
