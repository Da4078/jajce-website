import Grb from "../../assets/Hrvoje_Vukcic_Grb.jpg"
import AboutSection from "./AboutSection";

function AboutJajce() {
  const text = [
        "Jajce je povijesni grad u Bosni i Hercegovini, smješten na ušću rijeke Plive u Vrbas, poznat po svojoj bogatoj kulturnoj, političkoj i vjerskoj povijesti. Grad je kroz stoljeća bio središte važnih događaja, od vremena Rimskog Carstva, preko srednjovjekovnog Kraljevstva Bosne, do modernih ratova i političkih previranja 20. stoljeća.",
        
        "Jedna od najznačajnijih arheoloških atrakcija u Jajcu je Mitraeum, hram posvećen bogu Sunca, Mitri. Mitra je bio predmet štovanja u Rimskom Carstvu, a hram u Jajcu datira iz 2. stoljeća, dok je obnova izvedena u 4. stoljeću. Smatra se jednim od najbolje očuvanih mitraea u Europi. Otkriven je slučajno tijekom gradnje kuće, a danas je zaštićen staklenim zidovima kako bi posjetitelji mogli vidjeti unutrašnjost. Za ulazak i detaljniji obilazak potrebno je prethodno najaviti posjet Etnološkom muzeju u Jajcu. Hram je proglašen nacionalnim spomenikom Bosne i Hercegovine.",
        
        "Grad Jajce osnovao je u 14. stoljeću Hrvoje Vukčić Hrvatinić, a ubrzo je postao prijestolnica nezavisnog Kraljevstva Bosne. Prvi pisani spomen imena Jajce datira iz 1396. godine, iako je tvrđava postojala i ranije. Posljednji bosanski kralj, Stjepan Tomašević, primio je krunu u Jajcu, ali je pogubljen nakon osmanskog osvajanja 1463. godine. Nakon kratke uprave Osmanlija, grad je prešao pod vlast Ugarske, koja je koristila Jajce kao strateško uporište protiv osmanskog širenja.",
        
        "Tijekom osmanskog razdoblja (od 1527. godine), Jajce gubi strateški značaj, ali ostaje kulturno i vjerski raznolik grad s brojnim crkvama i džamijama. Pod Austro-Ugarskom (1878.–1918.) dovršeni su neki od važnih građevinskih projekata, poput franjevačkog samostana sv. Luke.",
        
        "U Drugom svjetskom ratu Jajce je dobilo povijesnu ulogu kao središte oslobođenih teritorija, a 1943. godine domaćin je drugog zasjedanja AVNOJ-a, na kojem su donesene odluke o stvaranju federalne Jugoslavije i ravnopravnosti njezinih naroda. U socijalističkom razdoblju grad je razvijao industriju i turizam.",
        
        "Tijekom rata u Bosni i Hercegovini 1990-ih Jajce je doživjelo velike razaranja. Većina etničkih Srba napustila je grad početkom 1992. godine, a grad je bio pod opsadom Vojske Republike Srpske. Uslijedili su masovni egzodus civila i uništavanje vjerskih objekata, uključujući crkve, džamije i franjevački samostan. Grad je oslobođen u rujnu 1995. tijekom operacije “Maestral 2”, a prema Daytonskom sporazumu pripao je Federaciji Bosne i Hercegovine. Povratak izbjeglica bio je otežan, no postepeno je uspostavljena multietnička zajednica.",
        
        "Danas Jajce predstavlja važan kulturni, povijesni i turistički centar, s bogatom arhitekturom, muzejima i prirodnim ljepotama poput Plivskih jezera i vodopada, svjedočeći o složenoj i bogatoj povijesti ovog grada."
  ];
  return (
    <AboutSection
      title="Naša povijest"
      content={text}
      image={Grb}
    />
  );
}

export default AboutJajce;
