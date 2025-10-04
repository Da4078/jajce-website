import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/medvjed-kula-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutMedvjedKula from '../../components/AboutJajce/AboutMedvjedKula'

function MedvjedKula (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Medvjed Kula"
                btnClass="hide"
            />
            <AboutMedvjedKula/>
            <Footer/>
        </>
    )
}

export default MedvjedKula
