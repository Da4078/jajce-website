import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Discover from './routes/Discover/Discover'
import About from './routes/About'
import Lakes from './routes/Discover/Lakes'
import Mlincici from './routes/Discover/Mlincici'
import Vikendica from './routes/Discover/Vikendica'
import CrkvaMarija from "./routes/Discover/CrkvaSvMarije";
import SvIvo from "./routes/Discover/SvIvo";
import Mitra from "./routes/Discover/Mitra";
import Avnoj from "./routes/Discover/Avnoj";
import Muzej from "./routes/Discover/Muzej";
import Most from "./routes/Discover/Most";
import MedvjedKula from "./routes/Discover/MedvjedKula";
import Katakombe from "./routes/Discover/Katakombe";
import OmerbegovaKuca from "./routes/Discover/OmerbegovaKuca";
import Dzamija from "./routes/Discover/Dzamija";
import EtnoZbirka from "./routes/Discover/EtnoZbirka";
function App() {

  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="discover/plivska-jezera" element={<Lakes/>}/>
        <Route path="discover/mlincici" element={<Mlincici/>}/>‚
        <Route path="discover/vikendica" element={<Vikendica/>}/>
        <Route path="discover/crkva-sv-marije" element={<CrkvaMarija />} />
        <Route path="discover/crkva-sv-ivana-krstitelja" element={<SvIvo />} />
        <Route path="discover/mitras" element={<Mitra />} />
        <Route path="discover/muzej-avnoja" element={<Avnoj />} />
        <Route path="discover/franjevacki-muzej" element={<Muzej />} />
        <Route path="discover/most-ljubavi" element={<Most />} />
        <Route path="discover/medvjed-kula" element={<MedvjedKula />} />
        <Route path="discover/katakombe" element={<Katakombe />} />
        <Route path="discover/omerbegova-kuca" element={<OmerbegovaKuca />} />
        <Route path="discover/dzamija-esme-sultanije" element={<Dzamija />} />
        <Route path="discover/etno-zbirka" element={<EtnoZbirka />} />


        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
