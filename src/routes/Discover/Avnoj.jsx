import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/muzej-avnoja-3.webp"
import Footer from "../../components/Footer/Footer"
import AboutAvnoj from '../../components/AboutJajce/AboutAvnoj'

function Avnoj (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Muzej AVNOJ-a"
                btnClass="hide"
            />
            <AboutAvnoj/>
            <Footer/>
        </>
    )
}

export default Avnoj
