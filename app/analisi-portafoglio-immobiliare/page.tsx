import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "investitore",
    heroLabel: "Investitore Immobiliare",
    h1: "Analisi gratuita del tuo <span class=\"h1-kw\">portafoglio immobiliare</span> a Reggio Emilia",
    subtitle: "Scopri quali immobili <strong>rendono davvero</strong>, quali conviene vendere e come <strong>ottimizzare la fiscalità</strong>. Un'analisi professionale <strong>senza impegno</strong>.",
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
    problemTitle: "Hai davvero il controllo del tuo portafoglio?",
    problemSubtitle: "Molti investitori scoprono tardi — a volte troppo tardi — che alcune proprietà costano più di quanto rendono.",
    problems: [
        { icon: "📊", title: "Stai affittando a prezzi di 5 anni fa", desc: "I canoni di mercato a Reggio Emilia sono cambiati, ma molti contratti sono rimasti fermi. Se non hai aggiornato i tuoi affitti di recente, potresti <strong>guadagnare ogni mese meno di quanto potresti</strong>." },
        { icon: "💰", title: "La fiscalità immobiliare è un labirinto", desc: "IMU, cedolare secca, IRPEF sugli affitti: pochi investitori hanno davvero chiaro quanto stanno pagando. <strong>Un errore di regime fiscale può costare migliaia di euro l'anno</strong> — e spesso non se ne accorge nessuno." },
        { icon: "🔧", title: "Hai immobili che costano anziché rendere?", desc: "Sfitta da mesi, con inquilino moroso, o in continua manutenzione: certe proprietà drenano risorse e tempo senza dare niente in cambio. <strong>Spesso il problema non è il mercato, è che quell'immobile va venduto.</strong>" },
    ],
    stepsTitle: "Come gestiamo l'analisi del portafoglio",
    steps: [
        { icon: "📋", title: "Mappa degli asset", desc: "Rileviamo tutti gli immobili: tipologia, <strong>valore attuale</strong>, rendita lorda e netta, spese e carichi fiscali." },
        { icon: "📈", title: "Analisi performance", desc: "Calcoliamo il <strong>ROI reale</strong> di ogni immobile e lo confrontiamo con le alternative di mercato disponibili oggi." },
        { icon: "🎯", title: "Piano d'azione", desc: "Ti forniamo una <strong>raccomandazione chiara</strong>: cosa tenere, cosa ottimizzare e cosa vendere per <strong>massimizzare il patrimonio</strong>." },
    ],
    socialProofTitle: "Immobili venduti. Risultati veri.",
    socialProofSubtitle: "Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.",
    socialProofItems: [
        { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
    ],
    midFormTitle: "Mandaci i dettagli del tuo portafoglio",
    midFormSubtitle: "Descrivici quanti immobili possiedi e la tua situazione attuale. Ti ricontatteremo con un'analisi preliminare personalizzata.",
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
        { q: "Come gestite gli immobili attualmente affittati?", a: "Analizziamo la durata residua del contratto e la solvibilità dell'inquilino. Un immobile affittato può essere un ottimo investimento per alcuni acquirenti, o un limite per chi vuole abitarlo." },
        { q: "Ci sono tasse sulle plusvalenze in caso di vendita?", a: "Se l'immobile è posseduto da più di 5 anni (o ereditato), in genere non c'è imposta sulla plusvalenza. Altrimenti si applica l'imposta sostitutiva del 26% o l'aliquota IRPEF." },
        { q: "Fornite un report scritto?", a: "Sì, al termine dell'analisi riceverai un documento che riassume la situazione di ogni asset con le nostre raccomandazioni strategiche basate sui dati reali del mercato locale." },
    ],
    ctaTitle: "Scopri la performance reale del tuo portafoglio",
    ctaSubtitle: "Compila il form e ti contatteremo per fissare un incontro senza impegno.",
    footerDesc: "Consulenza strategica per investitori immobiliari a Reggio Emilia. Analisi di portafoglio e ottimizzazione patrimoniale.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
