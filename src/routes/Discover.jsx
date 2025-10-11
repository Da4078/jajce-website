import Hero from '../components/Hero/Hero'
import Navbar from '../components/NavigationBar/Navbar'
import AboutImg from "../assets/mlincici-1.jpg"


import Footer from '../components/Footer/Footer'
import Landmarks from '../components/Landmarks/Landmarks'
import Map from '../components/Map/Map'

function Discover (){


    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Istraži"
                btnClass="hide"
            />
            
            <Landmarks/>
            <Map/>
            <Footer/>

        </>
    )
}

export default Discover