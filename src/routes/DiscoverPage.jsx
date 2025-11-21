import { useParams } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/NavigationBar/Navbar';
import Footer from "../components/Footer/Footer";
import AboutPage from '../components/About/AboutPage';
import { aboutPages } from '../components/About/AboutData';

import PlivaLakes from "../assets/jezera.jpg";
import Watermills from "../assets/mlincici-1.jpg";
import Cottage from "../assets/vikendica.jpg";
import StMaryChurch from "../assets/crkva-sv-marije-2.jpg";
import StJohnChurch from "../assets/sv-ivo-2.jpg";
import Mitra from "../assets/mitra-2.jpeg";
import Avnoj from "../assets/avnoj-2.jpg";
import Museum from "../assets/muzej-2.jpg";
import Bridge from "../assets/most-2.webp";
import BearTower from "../assets/medvjed-kula-2.jpg";
import Catacombs from "../assets/katakombe.jpg";
import OmerbegHouse from "../assets/Omerbegova-kuca-Jajce-2.webp";
import Mosque from "../assets/dzamija-2.jpg";
import EthnoCollection from "../assets/etno-zbirka-2.webp";
import Dam from "../assets/dam.jpg"
import DefaultImg from "../assets/mlincici-3.jpg";

const heroImages = {
  "plivska-jezera": PlivaLakes,
  "mlincici": Watermills,
  "vikendica": Cottage,
  "crkva-sv-marije": StMaryChurch,
  "crkva-sv-ivana-krstitelja": StJohnChurch,
  "mitras": Mitra,
  "muzej-avnoja": Avnoj,
  "franjevacki-muzej": Museum,
  "most-ljubavi": Bridge,
  "medvjed-kula": BearTower,
  "katakombe": Catacombs,
  "omerbegova-kuca": OmerbegHouse,
  "dzamija-esme-sultanije": Mosque,
  "etno-zbirka": EthnoCollection,
  "brana": Dam
};

function DiscoverPage() {
  const { pageId } = useParams();
  const pageData = aboutPages[pageId]
  const heroImage = heroImages[pageId] || DefaultImg;

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImage}
        title={pageData.heroTitle || 'Jajce'}
        btnClass="hide"
      />
      <AboutPage />
      <Footer/>
    </>
  );
}

export default DiscoverPage;