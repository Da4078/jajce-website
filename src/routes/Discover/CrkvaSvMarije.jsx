import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/crkva-sv-marije-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutCrkvaSvMarije from '../../components/AboutJajce/AboutCrkvaSvMarije'

function CrkvaSvMarije (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Crkva sv. Marije i toranj sv. Luke"
                btnClass="hide"
            />
            <AboutCrkvaSvMarije/>
            <Footer/>
        </>
    )
}

export default CrkvaSvMarije
