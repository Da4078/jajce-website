import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./LandmarksStyles.css";
import CardData from "../Card/CardData";

import StMaryChurch from "../../assets/crkva-sv-marije.jpg";
import StJohnChurch from "../../assets/sv-ivo.jpg";
import MithraTemple from "../../assets/mitra.jpg";
import AvnojMuseum from "../../assets/avnoj.jpg";
import FranciscanMuseum from "../../assets/muzej.jpg";
import LoveBridge from "../../assets/most.jpg";
import Watermills from "../../assets/mlincici-2.jpg";
import PlivaLakes from "../../assets/jezera.jpg";
import MikiCottage from "../../assets/vikendica.jpg";
import BearTower from "../../assets/medvjed-kula.jpg";
import Catacombs from "../../assets/katakombe-2.jpg";
import OmerbegHouse from "../../assets/omerbegova-kuca.jpg";
import EsmaSultanijaMosque from "../../assets/dzamija.jpg";
import EthnoCollection from "../../assets/etno-zbirka.jpg";
import Dam from "../../assets/dam.jpg";

const SLIDES = [
  { image: StMaryChurch, heading: "Crkva sv. Marije i toranj sv. Luke", text: "Crkva sv. Marije, poznata i kao crkva sv. Luke, nastala je u 15. stoljeću, kada je Jelena Branković donijela moći sv. Luke kao miraz pri udaji za Stjepana Tomaševića. Višestruko preoblikovana kroz stoljeća, bila je romanička bazilika, zatim gotička crkva sa zvonikom, pretvorena u džamiju 1528., a nakon požara 1832. izgubila je tu funkciju te je 1892. proglašena kulturnim spomenikom.", link: "/discover/crkva-sv-marije"},
  { image: StJohnChurch, heading: "Crkva sv. Ivana Krstitelja", text: "Crkva sv. Ive u Podmilačju, sagrađena u 15. stoljeću, bila je mjesto zajedništva katolika, pravoslavaca i muslimana te preživjela osmanske napade i pad Jajca. Potpuno uništena 1993. godine, rekonstruirana je nakon rata, a poznata je kao pokorničko i zavjetno svetište, gdje se slave mise za bolesnike uz sudjelovanje vjernika različitih vjeroispovijesti.", link: "/discover/crkva-sv-ivana-krstitelja" },
  { image: MithraTemple, heading: "Hram boga Mitre", text: "Hram boga Mitre, najstariji nacionalni spomenik u Jajcu, sagrađen je u 2. stoljeću i obnovljen u 4. stoljeću od strane rimskih carinika. Posvećen perzijskom bogu sunca Mitri, hram sadrži očuvani reljef boga u borbi s bikom te tri žrtvenika, od kojih najmanji, simbol siromašnih, jedini nije sačuvan u cijelosti.", link: "/discover/mitras" },
  { image: AvnojMuseum, heading: "Muzej AVNOJ-a", text: "Muzej II. zasjedanja AVNOJ-a u Jajcu osnovan je 1953. godine kao obilježje povijesnog događaja iz 1943., kada su na zasjedanju AVNOJ-a udareni temelji buduće SFRJ. U muzeju se nalaze autentični zapisi, predmeti i fotografije tog razdoblja, uključujući rekonstruiranu spomen sala, a dio stalne postavke čini i lokomotiva \"Ćiro\" iz 20. stoljeća, nekada korištena za prijevoz ljudi i vojske, danas atrakcija za posjetitelje.", link: "/discover/muzej-avnoja" },
  { image: FranciscanMuseum, heading: "Franjevački muzej", text: "Mjesto gdje je prikazana srednjovjekovna povijest Bosne. Bogatstvo antičkih, starokršćanskih i srednjovjekovnih arheoloških artefakata izloženo je upravo u ovom muzeju. Muzej čine tri zbirke: arheološka, etnografska i sakralna. Samostan posjeduje preko 2000 eksponata, a u muzeju je izloženo tek dva posto ili 100 predmeta dostupnih javnosti.", link: "/discover/franjevacki-muzej"},
  { image: LoveBridge, heading: "Most ljubavi", text: "Mostovi spajaju obale, a Most ljubavi spaja obale Malog Plivskog jezera, na jednom od najljepših mjesta na Plivi. Pored divnog krajolika i jezera, na Mostu ljubavi otvorio se beach bar koji je okupio mnoge zaljubljenike u prirodu.", link: "/discover/most-ljubavi" },
  { image: Watermills, heading: "Mlinčići", text: "Mlinčići na Plivskim jezerima kod Jajca pravi su biser prirode i kulturne baštine, stari oko 400 godina. Nekada su služili lokalnim obiteljima za mljevenje žita, a danas su zaštićeni nacionalni spomenik koji oduševljava turiste iz cijeloga svijeta. Njihova jedinstvena gradnja i povijesna vrijednost čine ih pravom malom umjetnošću.", link: "/discover/mlincici" },
  { image: PlivaLakes, heading: "Plivska jezera", text: "Veliko i Malo Plivsko jezero, smještena svega pet kilometara od centra Jajca, najveća su prirodna jezera u Bosni i Hercegovini. Posjetiteljima pružaju mirnu oazu netaknute prirode, ali i brojne aktivnosti poput vožnje kajaka, kanua, pecanja ili kupanja.", link: "/discover/plivska-jezera" },
  { image: MikiCottage, heading: "Mikijeva vikendica", text: "Mikijeva vikendica smještena je u mirnom okruženju prirode, nedaleko od Jajca, i predstavlja savršeno mjesto za bijeg od svakodnevnice. Ovdje možete uživati u tišini, zelenilu i čistom zraku, a istovremeno ste dovoljno blizu grada i njegovih znamenitosti. Idealna je za opuštanje s obitelji ili prijateljima, ali i za aktivan odmor u prirodi.", link: "/discover/vikendica" },
  { image: BearTower, heading: "Medvjed Kula", text: "Medvjed Kula u Jajcu srednjovjekovna je utvrda koja svjedoči o bogatoj povijesti i nudi prekrasan panoramski pogled na grad i okolni krajolik. Okružena zelenilom i povijesnim znamenitostima, predstavlja idealno mjesto za istraživanje, šetnju i nezaboravne fotografije.", link: "/discover/medvjed-kula" },
  { image: Catacombs, heading: "Katakombe", text: "Katakombe u Jajcu su podzemna crkva isklesana u stijeni krajem 14. i početkom 15. stoljeća, podignuta po nalogu Hrvoja Vukčića Hrvatinića kao grobnica njegove obitelji. Ovaj jedinstveni spomenik, ukrašen simbolima kulta smrti i vječnog života, posjetiteljima pruža posebno duhovno iskustvo i povratak 600 godina u prošlost.", link: "/discover/katakombe" },
  { image: OmerbegHouse, heading: "Omerbegova Kuća", text: "Omerbegova kuća u Jajcu iz 17. stoljeća primjer je bosanske stambene arhitekture iz osmanskog perioda, s kamenom prizemljem, drvenim katom i ukrašenim ulazom. Od 2013. godine služi kao restoran, omogućujući posjetiteljima da uživaju u autentičnom ambijentu i bosanskoj kuhinji.", link: "/discover/omerbegova-kuca" },
  { image: EsmaSultanijaMosque, heading: "Džamija Esme Sultanije", text: "Esme Sultanije džamija u Jajcu jedina je džamija u Bosni i Hercegovini nazvana po ženi, a zajedno sa šadrvanom, mektebom i haremom proglašena je nacionalnim spomenikom BiH. Izgrađena u 18. stoljeću od strane Esme Sultanije, srušena 1993. godine, džamija je obnovljena 2010. i predstavlja značajan primjer islamske arhitekture pokrivene kupolom.", link: "/discover/dzamija-esme-sultanije" },
  { image: EthnoCollection, heading: "Etno Zbirka", text: "Zavičajna etno zbirka u Jajcu, formirana 2010. godine, prikazuje tradiciju, običaje i kulturno naslijeđe jajačkog kraja kroz predmete, nošnju i dokumente katoličke, pravoslavne i islamske zajednice. Zbirka obuhvaća domaće posuđe, ručne bosanske ćilime, tkalački stan i bosansku gradsku sobu, pružajući uvid u život, zanatstvo i uređenje interijera prošlih stoljeća.", link: "/discover/etno-zbirka" },
  { image: Dam, heading: "Kupalište Brana", text: "Kupalište Brana je mjesto ponosa i ljepote, mjesto koje građani Jajca uvijek nose u svojim srcima i kojem jedva čekaju da se vrate. Dok se drugdje vrijeme provodi u betonu, u Jajcu se uživa uz plavozeleni biser, Branu, i aktivnosti koje su drugima samo pojam.", link: "/discover/brana" }
];

function Landmarks() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);
  
  return (
    <div className="trip">
      <h1>Znamenitosti Jajca</h1>
      <p>Istraži jedinstvene znamenitosti Jajca</p>

      <div className="swiper-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={50}
          pagination={{
          clickable: true,
          dynamicBullets: true,
      }}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }}
     autoplay={{
      delay: 10000,
      disableOnInteraction: false,
     }}
        breakpoints={{
           640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      },
      }}
  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
>
          {SLIDES.map((s, i) => (
            <SwiperSlide key={i}>
              <div 
                className="card-wrapper"
                onClick={() => navigate(s.link)} 
                style={{ cursor: "pointer" }}
              >
                <CardData image={s.image} heading={s.heading} text={s.text} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        
        <div className="swiper-info">
          <span>{Math.floor(activeIndex / 3) + 1} / {Math.ceil(SLIDES.length / 3)}</span>
        </div>
      </div>
    </div>
  );
}

export default Landmarks;