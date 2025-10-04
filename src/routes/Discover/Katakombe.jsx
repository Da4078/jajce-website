import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/katakombe.jpg"
import Footer from "../../components/Footer/Footer"
import AboutKatakombe from '../../components/AboutJajce/AboutKatakombe'

function Katakombe (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Katakombe"
                btnClass="hide"
            />
            <AboutKatakombe/>
            <Footer/>
        </>
    )
}

export default Katakombe
