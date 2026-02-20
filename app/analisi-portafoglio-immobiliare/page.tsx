import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "investitore",
    heroLabel: "Investitore Immobiliare",
    h1: "Analisi gratuita del tuo portafoglio immobiliare a Reggio Emilia",
    subtitle: "Scopri quali immobili rendono davvero, quali conviene vendere e come ottimizzare la fiscalità. Un'analisi professionale senza impegno.",
    benefits: [
        "Analisi rendimento reale di ogni immobile",
        "Ottimizzazione fiscale e carico tributario",
        "Strategia di uscita per gli asset in perdita",
        "Confronto con i valori di mercato aggiornati",
    ],
    formTitle: "Richiedi analisi gratuita",
    selectLabel: "Numero di immobili da analizzare",
    selectOptions: [
        { value: "2-3", label: "2-3 immobili" },
        { value: "4-6", label: "4-6 immobili" },
        { value: "7+", label: "7 o più immobili" },
        { value: "non_so", label: "Da definire" },
    ],
    problemTitle: "I problemi nascosti del portafoglio immobiliare",
    problemSubtitle: "Molti investitori scoprono tardi che alcune proprietà costano più di quanto rendono.",
    problems: [
        { icon: "📊", title: "Rendimenti sotto mercato", desc: "Un affitto fissato anni fa può essere molto più basso dell'attuale valore di mercato. Stai lasciando soldi sul tavolo ogni mese." },
        { icon: "💰", title: "Carico fiscale elevato", desc: "IMU, IRPEF sugli affitti, cedolare secca: la fiscalità sugli immobili è complessa. Un'ottimizzazione può valere migliaia di euro l'anno." },
        { icon: "🔧", title: "Immobili che costano invece di rendere", desc: "Proprietà sfitte, in manutenzione o con inquilini morosi consumano risorse. Liquidarle spesso è la scelta più intelligente." },
    ],
    stepsTitle: "Come gestiamo l'analisi del portafoglio",
    steps: [
        { icon: "📋", title: "Mappa degli asset", desc: "Rileviamo tutti gli immobili: tipologia, valore attuale, rendita lorda e netta, spese e carichi fiscali." },
        { icon: "📈", title: "Analisi performance", desc: "Calcoliamo il ROI reale di ogni immobile e lo confrontiamo con le alternative di mercato disponibili oggi." },
        { icon: "🎯", title: "Piano d'azione", desc: "Ti forniamo una raccomandazione chiara: cosa tenere, cosa ottimizzare e cosa vendere per massimizzare il patrimonio." },
    ],
    reviewsTitle: "Investitori che ci hanno affidato il loro portafoglio",
    reviews: [
        { text: "Avevo 5 appartamenti e pensavo andassero tutti bene. Diba mi ha dimostrato che due costavano più di quanto rendevano. Li ho venduti e il netto è aumentato.", author: "Fabrizio T., Reggio Emilia", stars: 5 },
        { text: "Analisi professionale e onesta. Nessuna pressione a vendere, solo dati chiari. Poi ho deciso io in autonomia.", author: "Daniela O., Reggio Emilia", stars: 5 },
        { text: "Hanno individuato un errore nella mia cedolare secca che mi faceva pagare troppo da anni. Solo per questo valeva la consulenza.", author: "Massimo R., Reggio Emilia", stars: 5 },
    ],
    faqTitle: "Domande frequenti per investitori",
    faqs: [
        { q: "L'analisi è davvero gratuita?", a: "Sì. Offriamo una prima consulenza senza costi perché crediamo nel valore della relazione a lungo termine. Se poi decidi di vendere tramite noi, paghi solo la provvigione al rogito." },
        { q: "Posso analizzare immobili in zone diverse di Reggio Emilia?", a: "Sì. Siamo attivi su tutto il territorio provinciale e conosciamo bene le differenze di valore tra centro, semicentro e periferia." },
        { q: "Come calcolate il rendimento reale?", a: "Partiamo dal canone annuo lordo e sottraiamo: spese condominiali, IMU, manutenzione ordinaria e straordinaria, periodi di sfitto stimati e tassazione. Il risultato è il rendimento netto reale." },
        { q: "Quanto tempo richiede l'analisi?", a: "La prima analisi informale può essere completata in 48-72 ore con i dati che ci fornite. Un'analisi approfondita con perizia scritta richiede 1-2 settimane." },
    ],
    ctaTitle: "Scopri la performance reale del tuo portafoglio",
    ctaSubtitle: "Compila il form e ti contatteremo per fissare un incontro senza impegno.",
    footerDesc: "Consulenza strategica per investitori immobiliari a Reggio Emilia. Analisi di portafoglio e ottimizzazione patrimoniale.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
