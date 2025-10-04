import AboutSection from "./AboutSection";
import CrkvaMarija from "../../assets/crkva-sv-marije.jpg";

function AboutCrkvaSvMarije() {
  const text = [
    "Crkva sv. Marije nalazi se unutar povijesne jezgre Jajca, u podnožju Tvrđave. Prema utvrđenim povijesnim činjenicama  u crkvu sv. Marije je, nakon udaje za bosanskog prijestolonasljednika Stjepana Tomaševića, 1. travnja 1459. godine, kćerka srpskog despota Lazara, Jelena Branković (udajom prelazi na rimokatoličanstvo i uzima ime Marija-Mara), kao miraz donijela moći sv. Luke koje je 1453. godine despot Đurađ Branković otkupio od osmanskog sultana. Zbog toga ovu crkvu nazivaju i crkva sv. Luke. Objekt ima nekoliko građevinskih faza. Prije ove crkve postojala je i starija, na istom mjestu. Prvi oblik objekta bio je jednostavna jednobrodna bazilika sa odlikama romaničkog stila. To je bila jednostavna propovjednička crkva sa širokim brodom i pravokutnim izduženim korom, tj. svetištem, na čijem je kraju stajao oltar, prislonjen uz zid.",
    "Tijekom prve polovice 15. stoljeća adaptirana je stara crkva u gotički stil, a sa sjeveroistočne strane objekta izgrađen je zvonik – toranj sv. Luke u kasnogotičkom stilu s romaničkim naznakama. Za vrijeme osmanskih osvajanja 1528. godine, crkva je djelomično proširena i potom pretvorena u džamiju Sulejmana II. Funkciju džamije prekinuo je požar 1832. godine. Objekt je 1892. godine proglašen spomenikom kulture od strane austrougarske vlasti."
    ];
  return (
    <AboutSection title="Crkva sv. Marije i toranj sv. Luke" content={text} image={CrkvaMarija} />
  );
}

export default AboutCrkvaSvMarije;