import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/dzamija-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutDzamija from '../../components/AboutJajce/AboutDzamija'

function Dzamija (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Džamija Esme Sultanije"
                btnClass="hide"
            />
            <AboutDzamija/>
            <Footer/>
        </>
    )
}

export default Dzamija
