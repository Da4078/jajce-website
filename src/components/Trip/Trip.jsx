import "./TripStyles.css"
import CardData from "../Card/CardData"
import Mlincici from "../../assets/mlincici-2.jpg"
import Jezera from "../../assets/jezera.jpg"
import Vikendica from "../../assets/vikendica.jpg"
import { useNavigate } from "react-router-dom"
const SLIDES = [
  { image: Mlincici, heading: "Mlinčići", text: "Mlinčići na Plivskim jezerima kod Jajca pravi su biser prirode i kulturne baštine, stari oko 400 godina. Nekada su služili lokalnim obiteljima za mljevenje žita, a danas su zaštićeni nacionalni spomenik koji oduševljava turiste iz cijeloga svijeta. Njihova jedinstvena gradnja i povijesna vrijednost čine ih pravom malom umjetnošću.", link: "/discover/mlincici"},
  { image: Jezera, heading: "Plivska jezera", text: "Veliko i Malo Plivsko jezero, smještena svega pet kilometara od centra Jajca, najveća su prirodna jezera u Bosni i Hercegovini. Posjetiteljima pružaju mirnu oazu netaknute prirode, ali i brojne aktivnosti poput vožnje kajaka, kanua, pecanja ili kupanja.", link: "/discover/plivska-jezera"},
  { image: Vikendica, heading: "Mikijeva Vikendica", text: "Mikijeva vikendica smještena je u mirnom okruženju prirode, nedaleko od Jajca, i predstavlja savršeno mjesto za bijeg od svakodnevnice. Ovdje možete uživati u tišini, zelenilu i čistom zraku, a istovremeno ste dovoljno blizu grada i njegovih znamenitosti. Idealna je za opuštanje s obitelji ili prijateljima, ali i za aktivan odmor u prirodi.", link: "/discover/vikendica"},
];



function Trip() {
    const navigate = useNavigate();
  return (
    <div className="trip">
      <h1>Najbolji odabiri</h1>
      <p>Otkrij najbolje što Jajce nudi</p>

      <div className="tripcard">
        {SLIDES.map((slide, index) => (
          <div 
            key={index} 
            onClick={() => navigate(slide.link)} 
            style={{ cursor: "pointer" }} 
          >
          <CardData
            key={index}
            image={slide.image}
            heading={slide.heading}
            text={slide.text}
          />
          </div>
        ))}
      </div>
    </div>
);
}
export default Trip