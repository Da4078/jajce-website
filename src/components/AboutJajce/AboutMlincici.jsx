
import AboutSection from "./AboutSection";
import Mlincici from "../../assets/mlincici-3.jpg"
function AboutMlincici() {
  const text = [
    "Ako vas put povede u Jajce, nemojte propustiti upoznati pravi mali raj na Zemlji. Svatko tko je već bio ovdje, zna o čemu govorimo. Mlinčići, kako i samo ime kaže, vodenice, nalaze se 5 km od Jajca, između Malog i Velikog Plivskog jezera. Oni su danas nacionalni spomenik, koji privlači turiste iz cijeloga svijeta. Ovi predivni mlinčići izgrađeni su u srednjem vijeku i stari su nekih 400 godina. Stoljećima su ljudi iz okolnih krajeva na konjima donosili pune vreće žita i pšenice koje su mljeli u mlinčićima. Kući su odlazili sa kvalitetnim brašnom. Mlinčići su pravljeni u obiteljima, te je svaka obitelj imala svoju vodenicu koju je koristila cijela loza. Njih su izgradili iskusni majstori, te se upravo na njima vidi prelijepo umijeće gradnje. Možemo slobodno reći da su mlinčići prava mala umjetnost.",
    "To su preslatke “kućice” koje zajedno sa prirodnim krajolikom čine pravu oazu mira. Fotografije vam mogu prenijeti samo mali dio ovog raja na Zemlji. Da vidite kako zaista izgledaju, obavezno ih posjetite."
  ];
  return (
    <AboutSection
      title="Mlinčići"
      content={text}
      image={Mlincici}
    />
  );
     
}

export default AboutMlincici;
