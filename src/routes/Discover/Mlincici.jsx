import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/mlincici-2.jpg"
import Footer from "../../components/Footer/Footer"
import AboutMlincici from '../../components/AboutJajce/AboutMlincici'

function Mlincici (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Mlinčići"
                btnClass="hide"
            />
            <AboutMlincici/>
            <Footer/>
        </>
    )
}

export default Mlincici