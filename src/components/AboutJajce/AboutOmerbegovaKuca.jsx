import AboutSection from "./AboutSection";
import OmerbegovaKuca from "../../assets/omerbegova-kuca.jpg";

function AboutOmerbegovaKuca() {
  const text = [
    "Omerbegova kuća podignuta je u drugoj polovini 17. stoljeća, nalazi se u sklopu srednjovjekovnog kompleksa grada Jajca, neposredno uz Travničku kapiju i predstavlja karakterističan primjer bosanske stambene arhitekture iz osmanskog perioda. To je jedan od većih stambenih objekata tog vremena, sa prizemljem zidanim u kamenu i katom rađenim u bondruku, s puno malih prozora, ukrašenim ulaznim vratima i kosim krovom, pokrivenim šindrom.",
    "Od 2013. godine objekt ima funkciju restorana. Tako pored užitka u staro-bosanskom ambijentu možete uživati i u izvrsnoj bosanskoj kuhinji."
    ];
  return (
    <AboutSection title="Omerbegova Kuća" content={text} image={OmerbegovaKuca} />
  );
}

export default AboutOmerbegovaKuca;
