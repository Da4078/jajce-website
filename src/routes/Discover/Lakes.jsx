import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/jezera-3.jpg"
import Footer from "../../components/Footer/Footer"
import AboutLakes from '../../components/AboutJajce/AboutLakes'

function Lakes (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Plivska jezera"
                btnClass="hide"
            />
            <AboutLakes/>
            <Footer/>
        </>
    )
}

export default Lakes