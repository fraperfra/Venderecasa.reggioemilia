import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulenza Acquisto Casa Reggio Emilia | Diba Servizi Immobiliari",
  description: "Cerchi casa a Reggio Emilia? Ti troviamo noi quella giusta. Consulenza gratuita, accesso alle migliori opportunità di mercato, assistenza fino al rogito.",
  alternates: {
    canonical: "https://venderecasa.reggioemilia.it/consulenza-acquisto",
  },
};

const config: PageConfig = {
  heroLabel: "Consulenza Acquisto · Reggio Emilia",
  h1: "Cerchi casa a Reggio Emilia? Ti troviamo noi quella giusta",
  subtitle: "Selezioniamo le proprietà in base alle tue esigenze reali, ti aiutiamo a valutarle correttamente e a trattare il prezzo migliore.",
  benefits: [
    "Accesso a immobili non ancora pubblicati sui portali",
    "Valutazione indipendente per evitare di pagare troppo",
    "Assistenza nella trattativa e nella fase notarile",
    "Consulenza gratuita e senza impegno",
  ],
  formTitle: "Raccontaci cosa cerchi",
  selectLabel: "Cosa stai cercando?",
  selectOptions: [
    { value: "appartamento", label: "Appartamento" },
    { value: "villa-casa", label: "Villa / Casa indipendente" },
    { value: "box-garage", label: "Box / Garage" },
    { value: "locale-commerciale", label: "Locale commerciale" },
  ],
  problemTitle: "I rischi di comprare casa da soli",
  problemSubtitle: "Acquistare senza supporto professionale può costare molto più di quanto si pensi.",
  problems: [
    {
      icon: "🌫️",
      title: "Mercato opaco",
      desc: "I prezzi richiesti spesso non riflettono il valore reale. Senza dati comparativi recenti, rischi di pagare il 10-15% in più del giusto.",
    },
    {
      icon: "⏱️",
      title: "Perdita di opportunità",
      desc: "Le case migliori vengono ritirate dal mercato in pochi giorni. Senza un consulente che monitora per te, arrivi sempre tardi.",
    },
    {
      icon: "⚖️",
      title: "Trattativa svantaggiosa",
      desc: "Negoziare direttamente con il venditore o la sua agenzia ti mette in posizione di svantaggio. Un mediatore neutrale fa la differenza.",
    },
  ],
  stepsTitle: "Come funziona con Diba",
  steps: [
    {
      icon: "📋",
      title: "Compila il form",
      desc: "Descrivici cosa cerchi: zona, metratura, budget, caratteristiche essenziali.",
    },
    {
      icon: "🏘️",
      title: "Selezioniamo gli immobili",
      desc: "Filtriamo il mercato per te, incluse le proposte off-market non ancora pubblicate.",
    },
    {
      icon: "🤝",
      title: "Ti accompagniamo al rogito",
      desc: "Dalla visita alla trattativa, dalla proposta al notaio: siamo con te in ogni fase.",
    },
  ],
  socialProofTitle: "Case trovate per i nostri acquirenti",
  socialProofSubtitle: "Risultati reali per chi cercava casa a Reggio Emilia.",
  socialProofItems: [
    { src: "/assets/properties/property1.jpg", alt: "Appartamento centro", caption: "Bilocale · Centro Storico", tag: "ACQUISTATO" },
    { src: "/assets/properties/property2.jpg", alt: "Villa Coviolo", caption: "Villa · Coviolo", tag: "ACQUISTATO" },
    { src: "/assets/properties/property3.jpg", alt: "Appartamento zona sud", caption: "Trilocale · Zona Sud", tag: "ACQUISTATO" },
    { src: "/assets/properties/property4.jpg", alt: "Casa Mancasale", caption: "Casa · Mancasale", tag: "ACQUISTATO" },
  ],
  midFormTitle: "Dì a Diba cosa cerchi",
  midFormSubtitle: "Iniziamo a selezionare gli immobili giusti per te. Gratis, senza impegno.",
  reviewsTitle: "Chi ha già comprato con noi",
  reviews: [
    { text: "Cercavo un trilocale in zona stazione da oltre un anno. In tre settimane con Diba ho visitato 5 immobili selezionati perfettamente e ho comprato quello giusto. Potrei averlo trovato io ma non al prezzo che hanno ottenuto loro.", author: "Martina C. — Acquirente, Q.re Stazione", stars: 5 },
    { text: "Prima volta che compravo casa e avevo paura di fare errori. Diba mi ha guidato passo dopo passo dalla ricerca al notaio. Mi sono sentito protetto in ogni momento.", author: "Alessandro V. — Primo acquisto", stars: 5 },
    { text: "Volevo una villa con giardino sotto i 300k. Impossibile pensavo. Diba aveva un off-market che non era ancora sui portali. L'ho comprata in 10 giorni.", author: "Serena e Marco D. — Villa con giardino", stars: 5 },
  ],
  faqTitle: "Domande sull'acquisto",
  faqs: [
    { q: "Quanto costa il servizio di consulenza acquisto?", a: "La consulenza iniziale è gratuita. Le condizioni della nostra assistenza all'acquisto vengono definite chiaramente prima di iniziare, senza costi nascosti." },
    { q: "Avete accesso a immobili off-market?", a: "Sì. Grazie alla nostra rete di contatti locali, abbiamo spesso accesso a immobili in vendita prima che vengano pubblicati sui portali pubblici. Questo è uno dei vantaggi principali di lavorare con Diba." },
    { q: "Come si svolge il processo di acquisto?", a: "Consulenza iniziale → selezione immobili → visite → valutazione professionale → proposta di acquisto → contratto preliminare → rogito. Vi affianchiamo in ogni fase." },
    { q: "Posso acquistare con mutuo?", a: "Assolutamente sì. Vi mettiamo in contatto con i nostri consulenti creditizi di fiducia per trovare il mutuo migliore. Possiamo anche aiutarvi a capire la vostra capacità di acquisto prima di iniziare la ricerca." },
    { q: "Quanto tempo ci vuole per trovare casa?", a: "Dipende dalle vostre esigenze e dal budget. In media i nostri clienti trovano l'immobile giusto entro 4-8 settimane dalla consulenza iniziale." },
    { q: "Cosa succede se non troviamo quello che cerco?", a: "Non vi addebiteremo nulla. Lavoreremo finché non troveremo l'immobile giusto per voi, o vi diremo onestamente se le vostre aspettative non sono allineate con il mercato attuale." },
    { q: "Perché non cercare direttamente sui portali?", a: "I portali mostrano solo ciò che è già pubblico, spesso con prezzi gonfiati. Non vi aiutano a valutare se l'immobile vale davvero quello che chiedono, né a negoziare. Un consulente cambia radicalmente l'outcome dell'acquisto." },
    { q: "Perché dovrei pagare un consulente se l'agenzia del venditore prende già la provvigione?", a: "Perché l'agenzia del venditore fa gli interessi di chi vende. Noi siamo 'Buyer Agents': lavoriamo solo per te, per scovare i difetti nascosti e abbassare il prezzo il più possibile." },
    { q: "Come fate a trovare case non ancora sui portali?", a: "Abbiamo un database di proprietari che stanno valutando di vendere ma non hanno ancora pubblicato. Inoltre, collaboriamo con altri professionisti che ci segnalano le novità in anteprima." },
    { q: "Verificate voi la conformità urbanistica e catastale?", a: "Sì, è una parte fondamentale. Prima che tu firmi qualsiasi proposta, facciamo controllare i documenti da tecnici esperti per evitare che tu compri una casa con abusi edilizi non sanabili." },
    { q: "Mi aiutate a capire quanto mi costerà ristrutturare?", a: "Portiamo con noi in visita (se necessario) imprese o architetti di fiducia per darti un preventivo di massima immediato, così saprai se la casa rientra nel tuo budget totale." },
    { q: "Gestite voi la trattativa economica?", a: "Sì, ed è dove portiamo il massimo valore. Usiamo dati reali di mercato e motivazioni tecniche per convincere il venditore ad accettare l'offerta più bassa possibile." },
    { q: "Cosa succede se la perizia della banca è più bassa del prezzo di vendita?", a: "È un rischio concreto. Ti aiutiamo a inserire clausole protettive nella proposta, così se la banca non ti concede il mutuo per colpa della perizia bassa, non perdi la caparra." },
    { q: "Seguite anche l'acquisto di case all'asta?", a: "Sì, affianchiamo i clienti che vogliono esplorare il mercato delle aste immobiliari a Reggio Emilia, valutando la convenienza reale e la fattibilità del mutuo in tempi brevi." },
  ],
  ctaTitle: "Inizia la ricerca con il supporto di Diba",
  ctaSubtitle: "Dicci cosa cerchi e ti mostreremo le migliori opportunità disponibili, anche quelle non ancora sui portali.",
  footerDesc: "Aiutiamo i nostri clienti a trovare la casa giusta a Reggio Emilia. Valutazione indipendente, accesso off-market, assistenza completa fino al rogito.",
  utmCampaign: "acquisto",
};

export default function ConsulenzaAcquistoPage() {
  return <LandingPageTemplate config={config} />;
}
