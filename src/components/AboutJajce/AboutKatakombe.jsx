import AboutSection from "./AboutSection";
import Katakombe from "../../assets/katakombe.jpg";

function AboutKatakombe() {
  const text = [
    "Katakombe u Jajcu su kršćanska vjerska građevina. Narod ju naziva katakombama, iako nije to u klasičnom smislu, nego je u naravi podzemna crkvica.",
    "Spomenik je podzemna crkva isklesana u živoj stijeni krajem 14. i početkom 15. stoljeća, po nalogu Hrvoja Vukčića Hrvatinića, kao mjesto posljednjeg prebivališta vojvodske obitelji Vukčić Hrvatinić. Ovaj spomenik, jedinstvene vrijednosti i značaja, pokazuje nam kako je izgledao život stoljećima unazad.",
    "Stari simboli kulta smrti, zagrobnog života, vječnoga sna, muške i ženske figure isklesane u stijeni unutar crkve odišu posebnom duhovnošću i pozivaju posjetioce da posjete ovaj spomenik pod zemljom i osjete dašak prošlosti vrativši se 600 godina unazad."
    ];
  return (
    <AboutSection title="Katakombe" content={text} image={Katakombe} />
  );
}

export default AboutKatakombe;
