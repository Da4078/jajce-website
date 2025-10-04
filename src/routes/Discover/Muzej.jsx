import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/muzej-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutMuzej from '../../components/AboutJajce/AboutMuzej'

function Muzej (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Franjevački muzej"
                btnClass="hide"
            />
            <AboutMuzej/>
            <Footer/>
        </>
    )
}

export default Muzej
