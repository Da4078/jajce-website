import AboutSection from "./AboutSection";
import Muzej from "../../assets/muzej.jpg";

function AboutMuzej() {
  const text = [
    "Franjevački muzej Jajce smješten je u prostorijama Franjevačkog samostana Sv. Luke u Jajcu koji je izgrađen koncem 19. stoljeća (izgradnja je započela 1877., a završena 1885. godine). Muzej franjevačkog samostana u Jajcu je po prvi put otvoren za javnost 1905. godine. Stotinu godina poslije (2005.), uz obilježavanje stote godišnjice od otvaranja prvoga muzejskog postava, jajački su franjevci muzej ponovno otvorili za javnost.",
    "Mjesto gdje je prikazana srednjovjekovna povijest Bosne. Bogatstvo antičkih, starokršćanskih i srednjovjekovnih arheoloških artefakata izloženo je upravo u ovom muzeju. Muzej čine tri zbirke: arheološka, etnografska i sakralna. Samostan posjeduje preko 2000 eksponata, a u muzeju je izloženo tek dva posto ili 100 predmeta dostupnih javnosti.",
    "Posebnu vrijednost ovom muzeju daje sarkofag u kom se čuvaju kosti posljednjeg Bosanskog kralja Stjepana Tomaševića. Riječ je o skeletu koji je 1888. godine iskopao Ćiro Truhelka i koji se od tada čuva u ovom samostanu. Pored toga, u muzeju su izloženi eksponati kao što je kratki brončani mač s koricama tipa Mošunj, reprint Hrvojeva misala i Hvalov zbornik."
  ];
  return (
    <AboutSection title="Franjevački muzej" content={text} image={Muzej} />
  );
}

export default AboutMuzej;
