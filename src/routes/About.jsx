import Hero from '../components/Hero/Hero'
import Navbar from '../components/NavigationBar/Navbar'
import AboutImg from "../assets/katakombe.jpg"
import Footer from "../components/Footer/Footer"
import AboutJajce from '../components/AboutJajce/AboutJajce'

function About (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="O našem gradu"
                btnClass="hide"
            />
            <AboutJajce/>
            <Footer/>
        </>
    )
}

export default About