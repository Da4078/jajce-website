import AboutSection from "./AboutSection";
import Jezera from "../../assets/jezera-2.avif"
function AboutLakes() {
  const text = [
    "Plivska jezera su dva prekrasna jezera koja se nalaze na rijeci Plivi, nedaleko od grada Jajca u Bosni i Hercegovini. Ova jezera su nastala prirodno i predstavljaju najveću prirodnu akumulaciju u zemlji. Plivska jezera su idealno mjesto za odmor i uživanje u netaknutoj prirodi, miru i tišini. Osim toga, ova jezera nude i brojne mogućnosti za rekreaciju, sport i zabavu.",
    "Na Plivskim jezerima možete se baviti raznim vodenim sportovima, kao što su veslanje, kajak, kanu ili ribolov. Također, možete se prošetati ili voziti biciklom uz obalu jezera, koja je uređena i opremljena klupama i stolovima za piknik.",
    "Plivska jezera su također odlična destinacija za one koji traže smještaj u prirodi. U blizini jezera možete pronaći razne vrste smještaja, od hotela i vikendica do kampova i apartmana. Smještaj je prilagođen svim ukusima i potrebama gostiju, a cijene su vrlo pristupačne. Uz to, možete uživati u ukusnoj domaćoj hrani i piću, koja se nudi u restoranima i kafićima uz jezera."
  ];
  return (
    <AboutSection
      title="Plivska jezera"
      content={text}
      image={Jezera}
    />
  );
     
}

export default AboutLakes;
