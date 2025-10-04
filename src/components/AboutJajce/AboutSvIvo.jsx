import AboutSection from "./AboutSection";
import SvIvo from "../../assets/sv-ivo.jpg";

function AboutSvIvo() {
  const text = [
    "Podmilačje se prvi put spominje 1461. godine u povelji posljednjeg bosanskog kralja Stjepana Tomaševića. Od izgradnje do danas crkva sv. Ive bila je mjesto zajedništva ne samo bosanskih katolika, nego i pravoslavaca i muslimana. Taj duh otvorenosti u vjeri i nadi plod je stoljetnog djelovanja i velikog osjećaja za ljudske i narodne potrebe, ali i velikog osjećaja za vrednote Božjeg kraljevstva.",
    "Ovo je svetište jedno od najstarijih u Bosni i Hercegovini. Datira iz 15. stoljeća kada je, vjeruje se, i sagrađena stara crkvica u gotičkom stilu. Ona je preživjela i veliko osmanlijsko osvajanje 1463. godine, ali i pad Jajca 1528. Godine.",
    "U ožujku 1993. godine do temelja je srušena velika crkva sv. Ive, a u njezinu sklopu i ona stara iz srednjeg vijeka.  Sve što je tada spašeno bio je čudotvorni kip sv. Ive Krstitelja. Svetkovina sv. Ive slavljena je i u progonstvu, a nakon proteklog rata ova zavjetna crkva u cijelosti je rekonstruirana.",
    "Svetište u Podmilačju nadaleko je poznato kao pokorničko i zavjetno mjesto. O tome svjedoče i mnogi zapisi iz prošlosti, posebno oni koji se odnose na mise za bolesnike, koje se slave 23. i 24. lipnja i na kojima uz katolike sudjeluju i pripadnici drugih vjera, što je velika posebnost ovog svetišta. Iz vjere u moć ozdravljenja mnogi sa sobom osim uspomena s duhovnih okupljanja nose kamenja, daščice i pijesak kao lijek."
    ];
  return (
    <AboutSection title="Crkva sv. Ivana Krstitelja" content={text} image={SvIvo} />
  );
}

export default AboutSvIvo;
