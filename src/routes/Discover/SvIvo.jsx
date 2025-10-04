import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/sv-ivo-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutSvIvo from '../../components/AboutJajce/AboutSvIvo'

function SvIvo (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Crkva sv. Ivana Krstitelja"
                btnClass="hide"
            />
            <AboutSvIvo/>
            <Footer/>
        </>
    )
}

export default SvIvo
