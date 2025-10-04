import AboutSection from "./AboutSection";
import Most from "../../assets/most.jpg";

function AboutMost() {
  const text = [
    "Mostovi spajaju obale, a Most ljubavi spaja obale Malog Plivskog jezera, na jednom od najljepših mjesta na Plivi. Pored divnog krajolika i jezera, na Mostu ljubavi otvorio se beach bar koji je okupio mnoge zaljubljenike u prirodu.",
    "most privlači posjetioce svojom prirodnom ljepotom, mirnom atmosferom i simbolikom koju nosi. Okružen zelenilom, čistom vodom i planinskim pejzažom, predstavlja savršeno mjesto za odmor, šetnju i fotografisanje."
  ];
  return (
    <AboutSection title="Most ljubavi" content={text} image={Most} />
  );
}

export default AboutMost;
