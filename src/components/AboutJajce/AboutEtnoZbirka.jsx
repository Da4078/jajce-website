import AboutSection from "./AboutSection";
import EtnoZbirka from "../../assets/etno-zbirka.jpg";

function AboutEtnoZbirka() {
  const text = [
    "Zavičajna etno zbirka formirana je 2010. godine. Ona prikazuje tradiciju, način i običaje jajačkog života. Ovdje možete vidjeti predmete i dokumente muzičke tradicije sa područja Jajca. Osnovu izloženih predmeta sa vjerskim knjigama i narodnom nošnjom čini balkansko kulturno naslijeđe slavenske umjetničke tradicije. Zbirka sadrži zaista vrijedne i reprezentativne primjerke osobnih predmeta i nošnje jajačkog kraja: katolička, pravoslavna i islamska. Centralni prostor čini posuđe od metala i gline koje se koristilo za pripremanje i čuvanje namirnica, jela i napitaka. Na ovom dijelu možemo vidjeti primjer ručnog bosanskog ćilima napravljenog od vune. Također u ovom dijelu možemo vidjeti različite predmete praktične namjene koji su korišteni u domaćinstvu, zanatstvu i poljoprivredi.",
    "U centralnoj prostoriji nalazi se i tkalački stan – ručna mašina za tkanje. Dio etno zbirke je i bosanska gradska soba koja je nastala na prijelazu 19. i 20. stoljeća. Tu se susrećemo sa kulturom stanovanja i uređenja interijera kod gradskog stanovništva tog vremena. "
    ];
  return (
    <AboutSection title="Etno Zbirka" content={text} image={EtnoZbirka} />
  );
}

export default AboutEtnoZbirka;
