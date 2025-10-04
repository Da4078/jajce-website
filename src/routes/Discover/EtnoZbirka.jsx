import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/etno-zbirka-2.webp"
import Footer from "../../components/Footer/Footer"
import AboutEtnoZbirka from '../../components/AboutJajce/AboutEtnoZbirka'

function EtnoZbirka (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Etno Zbirka"
                btnClass="hide"
            />
            <AboutEtnoZbirka/>
            <Footer/>
        </>
    )
}

export default EtnoZbirka
