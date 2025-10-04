import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/mitra-2.jpeg"
import Footer from "../../components/Footer/Footer"
import AboutMitra from '../../components/AboutJajce/AboutMitra'

function Mitra (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Hram boga Mitre"
                btnClass="hide"
            />
            <AboutMitra/>
            <Footer/>
        </>
    )
}

export default Mitra
