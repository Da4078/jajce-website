import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavigationBar/Navbar'
import AboutImg from "../../assets/Omerbegova-kuca-Jajce-2.webp"
import Footer from "../../components/Footer/Footer"
import AboutOmerbegovaKuca from '../../components/AboutJajce/AboutOmerbegovaKuca'

function OmerbegovaKuca (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Omerbegova Kuća"
                btnClass="hide"
            />
            <AboutOmerbegovaKuca/>
            <Footer/>
        </>
    )
}

export default OmerbegovaKuca
