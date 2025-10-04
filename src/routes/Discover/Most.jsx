import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/most-2.webp"
import Footer from "../../components/Footer/Footer"
import AboutMost from '../../components/AboutJajce/AboutMost'

function Most (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Most ljubavi"
                btnClass="hide"
            />
            <AboutMost/>
            <Footer/>
        </>
    )
}

export default Most
