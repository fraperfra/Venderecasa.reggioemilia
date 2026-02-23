import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulenza Vendita Casa Reggio Emilia | Diba Servizi Immobiliari",
  description: "Vuoi vendere casa a Reggio Emilia? Ti aiutiamo a ottenere il massimo dalla vendita. Valutazione gratuita entro 24 ore, 45 giorni medi, 4.9/5 su Google.",
  alternates: {
    canonical: "https://venderecasa.reggioemilia.it/consulenza-vendita",
  },
};

const config: PageConfig = {
  heroLabel: "Consulenza Vendita · Reggio Emilia",
  h1: "Vuoi vendere casa a Reggio Emilia? Ti aiutiamo a ottenere il massimo",
  subtitle: "Valutiamo il tuo immobile gratuitamente e costruiamo la strategia di vendita più efficace. Senza pressioni, senza costi nascosti.",
  benefits: [
    "Valutazione gratuita entro 24 ore",
    "45 giorni medi dalla messa in vendita al rogito",
    "Marketing professionale: foto, virtual tour, portali",
    "Compenso solo a vendita conclusa",
  ],
  formTitle: "Ricevi la tua valutazione gratuita",
  selectLabel: "Motivo della vendita",
  selectOptions: [
    { value: "libera-scelta", label: "Libera scelta" },
    { value: "cambio-casa", label: "Cambio casa" },
    { value: "trasferimento", label: "Trasferimento lavorativo" },
    { value: "eredita", label: "Casa ereditata" },
    { value: "separazione", label: "Separazione / Divorzio" },
    { value: "difficolta-mutuo", label: "Difficoltà con il mutuo" },
  ],
  problemTitle: "I rischi di vendere senza la giusta guida",
  problemSubtitle: "Molti proprietari perdono migliaia di euro o mesi di tempo per questi errori comuni.",
  problems: [
    {
      icon: "📉",
      title: "Svendere per fretta",
      desc: "Un prezzo sbagliato nella prima settimana brucia il miglior momento di mercato. Recuperarlo è quasi impossibile senza abbassare ancora.",
    },
    {
      icon: "🎯",
      title: "Agente sbagliato",
      desc: "Un'agenzia che non conosce il microzona sbaglia la stima, produce annunci mediocri e porta acquirenti non qualificati.",
    },
    {
      icon: "🔄",
      title: "House flipping mentality",
      desc: "Alcuni agenti spingono a vendere in fretta per incassare la provvigione, non per ottenere il massimo prezzo per te.",
    },
  ],
  stepsTitle: "Come funziona con Diba",
  steps: [
    {
      icon: "📋",
      title: "Compila il form",
      desc: "Inserisci i dati dell'immobile. La valutazione iniziale è completamente gratuita.",
    },
    {
      icon: "🔍",
      title: "Valutiamo l'immobile",
      desc: "Analizziamo le compravendite recenti in zona e le caratteristiche specifiche della tua casa.",
    },
    {
      icon: "💡",
      title: "Ti consigliamo la soluzione",
      desc: "Ti presentiamo prezzo di mercato, strategia di vendita e tempistiche realistiche. Senza impegno.",
    },
  ],
  socialProofTitle: "Immobili venduti di recente",
  socialProofSubtitle: "Risultati concreti per i nostri clienti a Reggio Emilia.",
  socialProofItems: [
    { src: "/assets/properties/property1.jpg", alt: "Appartamento centro", caption: "Appartamento · Centro Storico", tag: "VENDUTO" },
    { src: "/assets/properties/property2.jpg", alt: "Villa Coviolo", caption: "Villa · Coviolo", tag: "VENDUTO" },
    { src: "/assets/properties/property3.jpg", alt: "Appartamento zona sud", caption: "Appartamento · Zona Sud", tag: "VENDUTO" },
    { src: "/assets/properties/property4.jpg", alt: "Casa Mancasale", caption: "Casa · Mancasale", tag: "VENDUTO" },
  ],
  midFormTitle: "Pronto a scoprire quanto vale la tua casa?",
  midFormSubtitle: "Ricevi una stima gratuita e un piano d'azione personalizzato entro 24 ore.",
  reviewsTitle: "Chi ha già venduto con noi",
  reviews: [
    { text: "Avevo una casa da vendere in zona ospedale e non sapevo da dove cominciare. Diba ha gestito tutto: foto professionali, visite, trattativa. Venduta in 40 giorni al prezzo che speravo.", author: "Paola T. — Venditrice, Q.re Ospedale", stars: 5 },
    { text: "Dopo due anni con un'altra agenzia senza risultati, in 6 settimane con Diba avevo il rogito. La differenza è la conoscenza reale del mercato locale.", author: "Giorgio L. — Venditore, Rivalta", stars: 5 },
    { text: "Dovevo vendere per un trasferimento urgente. Mi aspettavo di dover svendere, invece Diba ha ottenuto il prezzo pieno in meno di due mesi. Incredibile.", author: "Francesca B. — Trasferimento lavorativo", stars: 5 },
  ],
  faqTitle: "Domande sulla vendita",
  faqs: [
    { q: "Quanto vale la mia casa?", a: "Il valore di mercato dipende da zona, metratura, stato conservativo, piano, esposizione e compravendite recenti comparabili. Offriamo una valutazione gratuita basata su dati reali, non stime indicative." },
    { q: "Quanto tempo ci vuole per vendere?", a: "La nostra media è 45 giorni. I tempi dipendono dalla zona, dal prezzo e dalla tipologia. Un prezzo corretto dalla partenza accelera significativamente la vendita." },
    { q: "Devo fare lavori prima di vendere?", a: "Non sempre. In alcuni casi piccoli interventi di home staging aumentano il valore percepito più del loro costo. Ti consigliamo caso per caso durante il sopralluogo gratuito." },
    { q: "Posso vendere se ho ancora un mutuo?", a: "Sì. Il mutuo viene estinto al rogito con il ricavato della vendita. Gestiamo tutta la procedura con la banca, compresa l'eventuale attestazione di cancellazione dell'ipoteca." },
    { q: "Cosa include il vostro servizio?", a: "Valutazione, servizio fotografico professionale, virtual tour, inserzione su tutti i principali portali, gestione delle visite, screening acquirenti, negoziazione e assistenza al rogito." },
    { q: "Quanto è la vostra provvigione?", a: "La provvigione è definita nel mandato di vendita e corrisposta solo a rogito concluso. Non ci sono costi fissi o anticipi: se non vendiamo, non pagate." },
    { q: "Lavorate in esclusiva?", a: "Proponiamo l'incarico in esclusiva perché ci permette di investire di più in marketing e ottenere risultati migliori. Ne discutiamo durante la consulenza iniziale, sempre senza pressione." },
    { q: "Perché non dovrei mettere un prezzo leggermente più alto 'per poter trattare'?", a: "È il modo più sicuro per 'bruciare' l'immobile. Una casa fuori prezzo resta invenduta per mesi; quando abbasserai, gli acquirenti penseranno che abbia dei difetti e faranno offerte ancora più basse." },
    { q: "Quanto influisce la classe energetica sul prezzo finale?", a: "A Reggio Emilia, una classe alta (A o B) può valere dal 10% al 15% in più rispetto a una classe G. Ti consigliamo se piccoli interventi (come la caldaia o le valvole) possono farti guadagnare di più." },
    { q: "Fate il servizio di Home Staging?", a: "Sì, prepariamo la casa per le foto e le visite. Piccoli accorgimenti estetici possono cambiare radicalmente la percezione degli acquirenti e accelerare la vendita sensibilmente." },
    { q: "Come filtrate gli 'stanchi di casa' che vogliono solo guardare?", a: "Qualifichiamo ogni potenziale acquirente telefonicamente prima del sopralluogo. Verifichiamo se hanno la capacità finanziaria (mutuo già approvato) e un interesse reale per la zona." },
    { q: "Cosa succede se ricevo un'offerta più bassa di quella che desidero?", a: "Ti presentiamo l'offerta con un'analisi del mercato attuale. Decidi tu se accettare, fare una controproposta o rifiutare. Noi ti diamo i dati per decidere con cognizione di causa." },
    { q: "Il vostro mandato ha una durata fissa?", a: "Sì, in genere chiediamo 4-6 mesi. È il tempo necessario per applicare tutta la nostra strategia di marketing. Se non vendiamo in quel periodo, sei libero di non rinnovare." },
    { q: "Chi prepara l'APE (Attestato di Prestazione Energetica)?", a: "Se non lo hai, incarichiamo noi un tecnico convenzionato per produrlo rapidamente, assicurandoci che tutta la documentazione obbligatoria sia pronta per la pubblicità." },
  ],
  ctaTitle: "Ottieni la tua valutazione gratuita",
  ctaSubtitle: "Scopri quanto vale la tua casa e qual è la strategia di vendita più efficace. Senza impegno.",
  footerDesc: "Specialisti nella vendita di immobili residenziali a Reggio Emilia. Valutazione gratuita, marketing professionale, compenso solo a risultato.",
  utmCampaign: "vendita",
};

export default function ConsulenzaVenditaPage() {
  return <LandingPageTemplate config={config} />;
}
