import AboutSection from "./AboutSection";
import Dzamija from "../../assets/dzamija.jpg";

function AboutDzamija() {
  const text = [
    "Džamija Esme Sultanije u Jajcu jedan je od najvažnijih spomenika islamske arhitekture u gradu. Sagrađena je u 18. stoljeću, u vrijeme osmanske vladavine, i nosi ime po Esmi Sultaniji, kćeri osmanskog sultana. Ova džamija predstavlja značajan primjer sakralne arhitekture tog perioda, ističući se svojom jednostavnom, ali elegantnom formom koja odražava islamske graditeljske tradicije.",
    "Džamija Esme Sultanije bila je i ostala vjersko, kulturno i društveno središte zajednice Jajca. Osim vjerskih funkcija, džamija je kroz stoljeća bila mjesto okupljanja, učenja i očuvanja islamske tradicije na ovom području. Njena arhitektura i kulturni značaj čine je nezaobilaznim dijelom istorijskog identiteta Jajca, a restauracije i danas pomažu očuvanju ovog vrijednog spomenika."
    ];
  return (
    <AboutSection title="Džamija Esme Sultanije" content={text} image={Dzamija} />
  );
}

export default AboutDzamija;
