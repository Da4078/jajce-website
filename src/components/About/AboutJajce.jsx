import "./AboutJajceStyles.css"
import Prehistoric from "../../assets/prapovijest.jpg"
import Antique from "../../assets/mitra.jpg"
import MiddleAges from "../../assets/Hrvoje_Vukcic_Grb.jpg"
import OttomanRule from "../../assets/dzamija.jpg"
import AustroHungarianRule from "../../assets/muzej-2.jpg"
import Modern1 from "../../assets/avnoj-2.jpg"
import Modern2 from "../../assets/jajce-2.jpg"
function AboutJajce() {
  const historicalPeriods = [
    {
      title: "Brončano doba (2000.-800. pr. Kr)",
      image: Prehistoric,
      layout: "right",
      content: [
        "Prapovijesno razdoblje na području Jajca još uvijek nije dovoljno istraženo, a o njegovoj brončanodobnoj prošlosti svjedoče tek slučajno pronađeni nalazi. Među njima se spominje i brončani mač tipa Mošunj, pronađen na obližnjem lokalitetu Bešpelj.", 
        "Oskudni brončanodobni nalazi s jajačkog područja ukazuju na postojanje naselja iz eneolitika i brončanog doba, iako je o ovom razdoblju malo konkretnih podataka. Nalazi keramike s prapovijesne gradine u obližnjem Vincu dodatno potvrđuju naseljenost ovog prostora.",
        "Prapovijesne zajednice bile su organizirane oko poljoprivrede i stočarstva, a bogatstvo prirodnih resursa omogućilo im je razvoj zanata i trgovine. Tragovi ovih davnih civilizacija i danas su vidljivi u okolnim brdima i dolinama."
      ]
    },
  {
      title: "Antika",
      image: Antique,
      layout: "right", 
      subsections: [
        {
          title: "Ilirsko doba  (800. - 27. g. pr. Kr.)",
          content: [
            "U ilirsko doba, ovo područje naseljavaju ilirska plemena, među kojima se ističu Desidijati. Oni su izgradili utvrde na strateškim položajima, koristeći prirodne prednosti terena za odbranu.",
            "Iliri su bili vješti ratnici i pomorski trgovci, a njihova kultura obilježena je karakterističnom keramikom, nakítom i vjerskim običajima. Brojna ilirska gradina u okolini Jajca svjedoče o razvijenoj društvenoj organizaciji."
          ]
        },
        {
          title: "Rimsko doba (27. g. pr. Kr. – 476. g. n. e.)", 
          content: [
            "Dolaskom Rimljana u 1. stoljeću prije nove ere, područje Jajca postaje dio rimske provincije Dalmacije. Rimljani su prepoznali strateški značaj ovog mjesta i izgradili cestovnu mrežu koja je povezivala unutrašnjost s obalom.",
            "Najznačajniji spomenik iz rimskog doba je Mitraeum - hram posvećen bogu Mitri, izgrađen u 2. stoljeću nove ere. Ovaj hram, otkriven slučajno 1931. godine, jedan je od najbolje očuvanih mitreja u jugoistočnoj Europi i svjedoči o snažnom utjecaju mitraizma među rimskim vojnicima i carinicima.",
            "Rimljani su također razvili rudarstvo i poljoprivredu u regionu, ostavljajući trajni pečat na gospodarstvo i infrastrukturu."
          ]
        }
      ]
    },
    {
      title: "Srednji vijek (6. – 15. stoljeće)",
      image: MiddleAges,
      layout: "left",
      content: [
        "Srednjovjekovno razdoblje predstavlja zlatno doba Jajca. Grad je osnovao Hrvoje Vukčić Hrvatinić 1396. godine, a brzo je postao jedna od najvažnijih tvrđava u Bosanskom Kraljevstvu.",
        "Jajce je postalo prijestolnica posljednjih bosanskih vladara. Upravo ovdje je 1461. godine okrunjen posljednji bosanski kralj Stjepan Tomašević, što je bio vrhunac političkog značaja grada.",
        "U ovom razdoblju izgrađena je impozantna tvrđava, crkve sv. Marije i sv. Luke, te katakombe koje su služile kao grobnica vojvodske obitelji Vukčić Hrvatinić. Grad je postao središte političke, kulturne i vjerske moći.",
        "Bosanska crkva je imala važnu ulogu u životu grada, a Jajce je bilo mjesto gdje su se susretali utjecaji istočnog i zapadnog kršćanstva."
      ]
    }, 
    {
      title: "Osmansko carstvo (1528.-1878)", 
      image: OttomanRule,
      layout: "right",
      content: [
         "Nakon pada pod osmansku vlast 1528. godine, Jajce se transformira u administrativni centar s izrazitim orijentalnim karakterom. Jedan od najznačajnijih osmanskih spomenika je Džamija Esme Sultanije, izgrađena u 18. stoljeću.",
        "Ova džamija, jedina u Bosni i Hercegovini nazvana po ženi, zajedno sa šadrvanom, mektebom i haremom predstavlja remek-djelo islamske arhitekture. Njeno ime nosi po Esmi Sultaniji, kćeri osmanskog sultana.",
        "U osmanskom razdoblju Jajce postaje važno trgovačko središte s razvijenim zanatstvom. Osim Džamije Esme Sultanije, izgrađene su brojne druge džamije, mektebi, hanovi i hamami koji su oblikovali gradski pejzaž.",
        "Unatoč promjenama, Jajce je zadržalo svoj multietnički i multireligijski karakter. Kršćani, muslimani i Židovi živjeli su zajedno, a grad je postao simbol tolerancije i koegzistencije različitih kultura."
      ]
    },
    {
      title: "Austro-Ugarska monarhija (1878.-1918.)",
      image: AustroHungarianRule,
      layout: "left",
      content: [
        "Dolaskom Austro-Ugarske monarhije 1878. godine, Jajce doživljava značajne promjene. Novi upravitelji uvode moderne upravne sustave, grade infrastrukturu i pokreću gospodarski razvoj.",
        "U ovom razdoblju izgrađen je Franjevački samostan sv. Luke (1877-1885), koji postaje važan kulturni i prosvjetni centar. Samostan je karakterističan primjer arhitekture austrougarskog perioda s elementima neoromanike.",
        "Austro-Ugarska je također započela s sustavnim arheološkim istraživanjima, što je omogućilo bolje razumijevanje bogate povijesti Jajca. Uvedeno je javno školstvo, zdravstvena zaštita i moderno upravljanje, što je postavilo temelje za razvoj grada u 20. stoljeću.",
        "Grad polako poprima europski izgled s novim administrativnim zgradama i infrastrukturom, zadržavajući svoj povijesni karakter."
      ]
    },
   {
      title: "20. stoljeće",
      image: Modern1,
      layout: "left",
      content: [
            "Dvadeseto stoljeće donijelo je dramatične promjene za Jajce. Tokom Drugog svjetskog rata, grad je postao simbol antifašističke borbe kada je 1943. godine održano Drugo zasjedanje AVNOJ-a, ključni događaj za stvaranje socijalističke Jugoslavije.",
            "U socijalističkom razdoblju Jajce doživljava industrijski razvoj i jačanje turističkog potencijala. Godine 1953. osnovan je Muzej AVNOJ-a kao sjećanje na povijesni događaj iz rata, postavši važna kulturna institucija.",
            "Rat devedesetih godina donio je velika razaranja i demografske promjene. Mnogi povijesni objekti su oštećeni ili uništeni, uključujući brojne crkve, džamije i franjevački samostan.",
            "Nakon Daytonskog sporazuma 1995. godine, započinje obnova grada i postepeni povratak izbjeglica. Jajce se polako oporavlja od ratnih razaranja, nastavljajući svoju bogatu povijesnu tradiciju."
      ]
    },
    {
      title: "Jajce danas",
      image: Modern2,
      layout: "right",
      content: [
            "Danas Jajce predstavlja jedinstvenu kombinaciju bogate povijesti i prekrasne prirode. Proglašen nacionalnim spomenikom 2006. godine, grad nastoji očuvati svoju baštinu dok se istovremeno razvija kao moderni turistički centar.",
            "Jajački vodopad, jedinstven po tome što se nalazi u samom srcu grada, postao je zaštitni znak Jajca i glavna turistička atrakcija. Noću osvijetljen, simbolizira spoj tradicije i modernog pristupa turizmu.",
            "Plivska jezera nude brojne rekreativne mogućnosti, od kajaka i čamaca do plaža i restorana, privlačeći posjetioce iz cijelog svijeta. Grad se kontinuirano razvija, uvodeći nove sadržaje dok čuva svoj autentični karakter.",
            "Jajce danas predstavlja živu sliku pomirenja i napretka, gdje se višestoljetna povijest susreće s modernim turističkim potencijalom, čineći ga jednom od najprivlačnijih destinacija u Bosni i Hercegovini."
      ]
    }

  ];

  return (
    <div className="about-jajce-container">
      <h1>Povijest Jajca</h1>

      {historicalPeriods.map((period, index) => (
        <section key={index} className={`historical-period ${period.layout}`}>
          <div className="period-content">
            <h2>{period.title}</h2>
            
            {period.subsections ? (
              period.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="subsection">
                  <h3>{subsection.title}</h3>
                  {subsection.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              ))
            ) : (
              period.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))
            )}
          </div>
          
          <div className="period-image">
            <img src={period.image} alt={period.title} />
          </div>
        </section>
      ))}
    </div>
  );
}
export default AboutJajce;