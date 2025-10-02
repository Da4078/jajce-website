import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import Vodopad from "../../assets/vodopad.jpg"
import Vodopad1 from "../../assets/pliva.jpg"
import Tvrdjava from "../../assets/starigrad.jpg"
import Tvrdjava1 from "../../assets/tvrdjava.jpg"


const Destination = () =>{
    return (
        <div className="destination">
            <h1>Popularna odredišta</h1>
            <p>Ture po Jajcu omogućuju ti da vidiš najvažnije znamenitosti grada u samo nekoliko sati.</p>

            <DestinationData
                className="first-des"
                heading="Vodopad" 
                text="U samom centru grada više od 50 000 godina stoji ponosno i prkosi vremenu. 
                        Svojom ljepotom kroz sva četiri godišnja doba iz godine u godinu privlači sve 
                        veći broj posjetioca. Plivski vodopad, smješten u srcu Jajca, jedan je 
                        od 12 najljepših vodopada na planeti Zemlji. Mjesto gdje Pliva sa 20 m visine 
                        skače u zagrljaj Vrbasu, najljepši je dokaz da je priroda najveći “umjetnik”. 
                         Ovaj prirodni fenomen nikoga ne ostavlja ravnodušnim."
                img1={Vodopad}
                img2={Vodopad1}                        
            />
                <DestinationData
                className="first-des-reverse"
                heading="Tvrđava" 
                text="Za tvrđavu se često upotrebljavaju nazivi kastel i citadela, a postojala je i prije prvog spomena imena Jajca u pisanim izvorima. U pisanim izvorima Jajce se prvi put spominje 1396. godine, a Hrvoje Vukčić Hrvatinić se titulira “conte di Jajcze”. Upravo se njemu pripisuje osnutak grada Jajca. Iako ne raspolažemo dokazima o vremenu njenog postanka, vjerojatno da je tvrđava, kao središnji element kasnijeg obrambenog sustava postojala već u XIII. stoljeću, a tijekom XIV. i XV. stoljeća na njoj su vršene popravke, te je dograđivana. Prošla je burnu prošlost, a ipak nastavila prkositi vremenu. Kao nekadašnja kraljevska prijestolnica i mjesto borbi, ostavila je trag bogate povijesti, a njezini zidovi šapuću nam o prošlosti. Ovo je mjesto koje će vas vratiti stoljećima unazad. Sa tvrđave se pruža prelijep pogled na grad, a tvrđava i stari grad predstavljaju prošli život Jajca. Nevjerovatno je doći ovdje, osjetiti ovu građevinu koja dominira nad gradom, zaviriti u prošlost i zamisliti kako je zapravo ovdje izgledao život. "
                img1={Tvrdjava1}
                img2={Tvrdjava}                        
            />
        </div>
    );
};

export default Destination