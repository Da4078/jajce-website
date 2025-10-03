
import AboutSection from "./AboutSection";
import Vikendica from "../../assets/vikendica-2.jpg"
function AboutMlincici() {
  const text = [
    "Mikijeva vikendica smještena je u mirnom okruženju prirode, neposredno uz Plivsko jezero, nedaleko od Jajca, i predstavlja savršeno mjesto za bijeg od svakodnevnice. Ovdje možete uživati u tišini, zelenilu i čistom zraku, a istovremeno ste dovoljno blizu grada i njegovih znamenitosti. Blizina Plivskog jezera omogućava vam da provedete vrijeme u opuštanju na obali, ribolovu ili vožnji čamcem, dok okolna priroda pruža brojne staze za šetnju, biciklizam i planinarenje. Mikijeva vikendica idealna je za odmor s obitelji ili prijateljima, ali i za aktivan boravak u prirodi, nudeći savršen spoj mira i rekreativnih aktivnosti."
  ];
  return (
    <AboutSection
      title="Mikijeva Vikendica"
      content={text}
      image={Vikendica}
    />
  );
     
}

export default AboutMlincici;
