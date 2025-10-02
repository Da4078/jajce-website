import { useState } from "react";
import "./LandmarksStyles.css";
import CardData from "../Card/CardData";

import CrkvaMarija from "../../assets/crkva-sv-marije.jpg";
import SvIvo from "../../assets/sv-ivo.jpg";
import Mitra from "../../assets/mitra.jpg";
import Avnoj from "../../assets/avnoj.jpg";
import Muzej from "../../assets/muzej.jpg";
import Most from "../../assets/most.jpg";
import Mlincici from "../../assets/mlincici-2.jpg";
import Jezera from "../../assets/jezera.jpg";
import Vikendica from "../../assets/vikendica.jpg";
import MedvjedKula from "../../assets/medvjed-kula.jpg"
import Katakombe from "../../assets/katakombe-2.jpg"
import OmerbegovaKuca from "../../assets/omerbegova-kuca.jpg"
import Dzamija from "../../assets/dzamija.jpg"
import EtnoZbirka from "../../assets/etno-zbirka.jpg"

const SLIDES = [
  { image: CrkvaMarija, heading: "Crkva sv. Marije i toranj sv. Luke", text: "Crkva sv. Marije, poznata i kao crkva sv. Luke, nastala je u 15. stoljeću, kada je Jelena Branković donijela moći sv. Luke kao miraz pri udaji za Stjepana Tomaševića. Višestruko preoblikovana kroz stoljeća, bila je romanička bazilika, zatim gotička crkva sa zvonikom, pretvorena u džamiju 1528., a nakon požara 1832. izgubila je tu funkciju te je 1892. proglašena kulturnim spomenikom." },
  { image: SvIvo, heading: "Crkva sv. Ivana Krstitelja", text: "Crkva sv. Ive u Podmilačju, sagrađena u 15. stoljeću, bila je mjesto zajedništva katolika, pravoslavaca i muslimana te preživjela osmanske napade i pad Jajca. Potpuno uništena 1993. godine, rekonstruirana je nakon rata, a poznata je kao pokorničko i zavjetno svetište, gdje se slave mise za bolesnike uz sudjelovanje vjernika različitih vjeroispovijesti." },
  { image: Mitra, heading: "Hram boga Mitre", text: "Hram boga Mitre, najstariji nacionalni spomenik u Jajcu, sagrađen je u 2. stoljeću i obnovljen u 4. stoljeću od strane rimskih carinika. Posvećen perzijskom bogu sunca Mitri, hram sadrži očuvani reljef boga u borbi s bikom te tri žrtvenika, od kojih najmanji, simbol siromašnih, jedini nije sačuvan u cijelosti." },
  { image: Avnoj, heading: "Muzej AVNOJ-a", text: "Muzej II. zasjedanja AVNOJ-a u Jajcu osnovan je 1953. godine kao obilježje povijesnog događaja iz 1943., kada su na zasjedanju AVNOJ-a udareni temelji buduće SFRJ. U muzeju se nalaze autentični zapisi, predmeti i fotografije tog razdoblja, uključujući rekonstruiranu spomen salu, a dio stalne postavke čini i lokomotiva “Ćiro” iz 20. stoljeća, nekada korištena za prijevoz ljudi i vojske, danas atrakcija za posjetitelje." },
  { image: Muzej, heading: "Franjevački muzej", text: "Crkva sv. Ive u Podmilačju, sagrađena u 15. stoljeću, bila je mjesto zajedništva katolika, pravoslavaca i muslimana te preživjela osmanske napade i pad Jajca. Potpuno uništena 1993. godine, rekonstruirana je nakon rata, a poznata je kao pokorničko i zavjetno svetište, gdje se slave mise za bolesnike uz sudjelovanje vjernika različitih vjeroispovijesti." },
  { image: Most, heading: "Most ljubavi", text: "Mostovi spajaju obale, a Most ljubavi spaja obale Malog Plivskog jezera, na jednom od najljepših mjesta na Plivi. Pored divnog krajolika i jezera, na Mostu ljubavi otvorio se beach bar koji je okupio mnoge zaljubljenike u prirodu." },
  { image: Mlincici, heading: "Mlinčići", text: "Mlinčići na Plivskim jezerima kod Jajca pravi su biser prirode i kulturne baštine, stari oko 400 godina. Nekada su služili lokalnim obiteljima za mljevenje žita, a danas su zaštićeni nacionalni spomenik koji oduševljava turiste iz cijeloga svijeta. Njihova jedinstvena gradnja i povijesna vrijednost čine ih pravom malom umjetnošću." },
  { image: Jezera, heading: "Plivska jezera", text: "Veliko i Malo Plivsko jezero, smještena svega pet kilometara od centra Jajca, najveća su prirodna jezera u Bosni i Hercegovini. Posjetiteljima pružaju mirnu oazu netaknute prirode, ali i brojne aktivnosti poput vožnje kajaka, kanua, pecanja ili kupanja." },
  { image: Vikendica, heading: "Mikijeva vikendica", text: "Mikijeva vikendica smještena je u mirnom okruženju prirode, nedaleko od Jajca, i predstavlja savršeno mjesto za bijeg od svakodnevnice. Ovdje možete uživati u tišini, zelenilu i čistom zraku, a istovremeno ste dovoljno blizu grada i njegovih znamenitosti. Idealna je za opuštanje s obitelji ili prijateljima, ali i za aktivan odmor u prirodi." },
  { image: MedvjedKula, heading: "Medvjed Kula", text: "Medvjed Kula u Jajcu srednjovjekovna je utvrda koja svjedoči o bogatoj povijesti i nudi prekrasan panoramski pogled na grad i okolni krajolik. Okružena zelenilom i povijesnim znamenitostima, predstavlja idealno mjesto za istraživanje, šetnju i nezaboravne fotografije." },
  { image: Katakombe, heading: "Katakombe", text: "Katakombe u Jajcu su podzemna crkva isklesana u stijeni krajem 14. i početkom 15. stoljeća, podignuta po nalogu Hrvoja Vukčića Hrvatinića kao grobnica njegove obitelji. Ovaj jedinstveni spomenik, ukrašen simbolima kulta smrti i vječnog života, posjetiteljima pruža posebno duhovno iskustvo i povratak 600 godina u prošlost." },
  { image: OmerbegovaKuca, heading: "Omerbegova Kuca", text: "Omerbegova kuća u Jajcu iz 17. stoljeća primjer je bosanske stambene arhitekture iz osmanskog perioda, s kamenom prizemljem, drvenim katom i ukrašenim ulazom. Od 2013. godine služi kao restoran, omogućujući posjetiteljima da uživaju u autentičnom ambijentu i bosanskoj kuhinji." },
  { image: Dzamija, heading: "Džamija Esme Sultanije", text: "Esme Sultanije džamija u Jajcu jedina je džamija u Bosni i Hercegovini nazvana po ženi, a zajedno sa šadrvanom, mektebom i haremom proglašena je nacionalnim spomenikom BiH. Izgrađena u 18. stoljeću od strane Esme Sultanije, srušena 1993. godine, džamija je obnovljena 2010. i predstavlja značajan primjer islamske arhitekture pokrivene kupolom." },
  { image: EtnoZbirka, heading: "Etno Zbirka", text: "Zavičajna etno zbirka u Jajcu, formirana 2010. godine, prikazuje tradiciju, običaje i kulturno naslijeđe jajačkog kraja kroz predmete, nošnju i dokumente katoličke, pravoslavne i islamske zajednice. Zbirka obuhvaća domaće posuđe, ručne bosanske ćilime, tkalački stan i bosansku gradsku sobu, pružajući uvid u život, zanatstvo i uređenje interijera prošlih stoljeća." },

];

function Landmarks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const maxIndex = SLIDES.length - cardsPerView;

  const nextSlide = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

  const prevSlide = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="trip">
      <h1>Znamenitosti Jajca</h1>
      <p>Istraži jedinstvene znamenitosti Jajca</p>

      <div className="slider-container">
        <button className="slide-btn" onClick={prevSlide}>◀</button>

        <div className="slider-wrapper">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {SLIDES.map((s, i) => (
              <CardData key={i} image={s.image} heading={s.heading} text={s.text} />
            ))}
          </div>
        </div>

        <button className="slide-btn" onClick={nextSlide}>▶</button>
      </div>
    </div>
  );
}

export default Landmarks
