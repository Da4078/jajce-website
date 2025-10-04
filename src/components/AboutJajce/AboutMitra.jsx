import AboutSection from "./AboutSection";
import Mitra from "../../assets/mitra.jpg";

function AboutMitra() {
  const text = [
    "Hram boga Mitre u Jajcu jedan je od najznačajnijih arheoloških i kulturno-historijskih spomenika u Bosni i Hercegovini. Smatra se najstarijim nacionalnim spomenikom u Jajcu, a njegova gradnja datira iz 2. stoljeća, dok je u 4. stoljeću hram obnovljen od strane rimskih carinika, što potvrđuje snažan utjecaj Rimskog Carstva na ovo područje.",
    "Hram je posvećen Mitri, perzijskom bogu sunca, svjetlosti i istine, čiji je kult bio raširen među rimskim vojnicima i carinicima. Mitraizam je predstavljao religiju misterija, a njegovi sljedbenici su vjerovali u borbu dobra i zla, svjetla i tame. U rimskom periodu Mitrin kult postaje posebno popularan jer je naglašavao lojalnost, hrabrost i red – osobine koje su bile izuzetno cijenjene u rimskoj vojsci.",
    "Ovaj hram svjedoči o dubokom prožimanju rimske i orijentalne kulture na prostoru današnje Bosne i Hercegovine. Njegova arheološka i duhovna vrijednost čini ga neprocjenjivim dijelom kulturnog identiteta Jajca i dokazuje da je ovo područje još u antičko doba bilo važna tačka religijskog i kulturnog susretanja različitih civilizacija."
  ];
  return (
    <AboutSection title="Hram boga Mitre" content={text} image={Mitra} />
  );
}

export default AboutMitra;
