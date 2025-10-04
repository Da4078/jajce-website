import AboutSection from "./AboutSection";
import Avnoj from "../../assets/avnoj.jpg";

function AboutAvnoj() {
  const text = [
    "U školama smo učili da je 29. i 30. studenog 1943. godine u Jajcu održano II. Zasjedanje AVNOJ-a, gdje su udareni temelji SFRJ i gdje je stvorena Jugoslavija. Kao obilježje tog značajnog povijesnog događaja za našu zemlju, 1953. godine osnovan je Muzej II. zasjedanja AVNOJ-a. Danas se u muzeju mogu pronaći zapisi, predmeti, kao i fotografije iz tog razdoblja, a napravljena je i rekonstrukcija spomen sale u  kojoj je 1943. godine održano Zasjedanje. Jedan je od malobrojnih muzeja koji je posvećen antifašizmu kao svjetskoj pojavi, a danas posjetiocima pruža doživljaj tog dijela prošlosti.",
    "Dio stalne postavke Muzeja je parna lokomotiva “Ćiro” proizvedena početkom 20. stoljeća, koju možete svakako vidjeti, a koja više nije u funkciji, nego je izložbeni dio Muzeja. Služila je za prijevoz stanovništva, vojske i naoružanja, a spada u red manjih lokomotiva sa četiri točka, te je posebno zanimljiva turistima koji ovdje dolaze."
    ];
  return (
    <AboutSection title="Muzej AVNOJ-a" content={text} image={Avnoj} />
  );
}

export default AboutAvnoj;
