import AboutSection from "./AboutSection";
import MedvjedKula from "../../assets/medvjed-kula.jpg";

function AboutMedvjedKula() {
  const text = [
    "Medvjed kula se  nalazi na zapadnom gradskom bedemu. Pripada tipu odbrambenih, okruglih. Samo ime Medvjed kula budi zainteresiranost za ovo utvrđenje koje je imalo tako da kažemo veliku odgovornost i ulogu u zaštiti od neprijatelja. Masivnih kula koje se počinju graditi sa pojavom vatrenog oružja.",
     "Naime, za Medvjed kulu se vežu razne legende i priče o strašnim događajima unutar nje.",
      "Postoje dva vjerovanja, od kojih je jedno da je nazvana medvjeđom zbog veličine i debljine zidova, dok drugo, među jajčanima popularnije, kaže da su je tako zvali jer su u njoj živjeli medvjedi kojima su bacani zarobljenici i kažnjenici."
    ];
  return (
    <AboutSection title="Medvjed Kula" content={text} image={MedvjedKula} />
  );
}

export default AboutMedvjedKula;
