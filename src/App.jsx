import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Discover from './routes/Discover/Discover'
import About from './routes/About'
import Lakes from './routes/Discover/Lakes'
import Mlincici from './routes/Discover/Mlincici'
import Vikendica from './routes/Discover/Vikendica'
function App() {

  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="discover/lakes" element={<Lakes/>}/>
        <Route path="discover/mlincici" element={<Mlincici/>}/>‚
        <Route path="discover/vikendica" element={<Vikendica/>}/>

        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
