import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/vikendica.jpg"
import Footer from "../../components/Footer/Footer"
import AboutVikendica from '../../components/AboutJajce/AboutVikendica'

function Vikendica (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Mikijeva Vikendica"
                btnClass="hide"
            />
            <AboutVikendica/>
            <Footer/>
        </>
    )
}

export default Vikendica