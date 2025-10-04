import Hero from '../components/Hero/Hero'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import JajceImg from "../assets/jajce.jpg"
import Destination from '../components/Destination/Destination'
import Trip from '../components/Trip/Trip'

function Home (){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={JajceImg}
                title="Grad Starih Priča i Nevjerojatne Ljepote"
                text="Legende stare, ljepote nove, Jajce te čeka, u srcu i snove."
                buttonText="Istraži Jajce"
                url="/discover"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home