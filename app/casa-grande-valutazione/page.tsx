import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "downsizing",
    heroLabel: "Pensionati & Downsizing",
    h1: "La casa è diventata <span class=\"h1-kw\">troppo grande</span>? Liberati dei costi e vivi la pensione con più serenità",
    subtitle: "Ti aiutiamo a vendere la casa grande, trovare la soluzione più adatta alle tue esigenze e gestire tutto <strong>con calma e rispetto</strong>.",
    benefits: [
        "Consulenza personalizzata senza fretta",
        "Valorizzazione massima del tuo immobile",
        "Supporto anche nell'acquisto della nuova casa",
        "Assistenza completa durante tutto il percorso",
    ],
    formTitle: "Richiedi una consulenza gratuita",
    selectLabel: "La tua intenzione",
    selectOptions: [
        { value: "vendere", label: "Voglio vendere e comprare più piccolo" },
        { value: "valutare", label: "Voglio solo capire quanto vale" },
        { value: "affittare", label: "Sto valutando di affittare" },
        { value: "non_so", label: "Non so ancora cosa fare" },
    ],
    problemTitle: "Una casa grande, una volta sola, era perfetta. Adesso?",
    problemSubtitle: "Nessuno lo dice apertamente, ma tenere una casa troppo grande in pensione può pesare più di quanto si pensi.",
    problems: [
        { icon: "🔧", title: "La manutenzione non finisce mai", desc: "Caldaia, tetto, facciata, giardino, impianti... una casa grande ha sempre qualcosa che chiede attenzione, tempo e soldi. <strong>In pensione, gestire tutto questo è un lavoro.</strong>" },
        { icon: "💶", title: "Quanto ti costa davvero quella casa ogni anno?", desc: "IMU, condominio, utenze, assicurazione... sommate, le spese fisse di una casa grande possono superare i <strong>5.000–8.000€ l'anno</strong>. Soldi che potrebbero restare in tasca." },
        { icon: "😔", title: "Stanze chiuse e scale da salire non sono vita", desc: "Ci sono camere che non si aprono più da mesi. Un piano che si usa sempre meno. Un giardino che era bello quando c'erano i figli. <strong>Una casa più piccola non è una rinuncia: è spesso una libertà.</strong>" },
    ],
    stepsTitle: "Il nostro approccio per te",
    steps: [
        { icon: "📝", title: "Compila il form", desc: "Bastano nome, telefono e l'indirizzo della casa. Ci vuole meno di 2 minuti, poi pensiamo noi a tutto." },
        { icon: "📊", title: "Valutiamo la tua casa", desc: "Ti diciamo <strong>onestamente quanto vale</strong> la tua casa e quali sono le opzioni più convenienti per te." },
        { icon: "🏡", title: "Ti consigliamo la soluzione migliore", desc: "Vendere, affittare o aspettare: ti diciamo cosa fare, come farlo e in che tempi — <strong>senza nessun impegno</strong>." },
    ],
    socialProofTitle: "Immobili venduti. Risultati veri.",
    socialProofSubtitle: "Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.",
    socialProofItems: [
        { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
    ],
    midFormTitle: "Raccontaci la tua casa e i tuoi piani",
    midFormSubtitle: "Ogni situazione è diversa. Più dettagli ci dai, più precisa sarà la nostra consulenza e più facile trovare la soluzione giusta per te.",
    reviewsTitle: "Cosa dicono le famiglie che abbiamo aiutato",
    reviews: [
        { text: "Avevo paura di fare questo passo. Diba mi ha accompagnato con pazienza, senza mai farmi sentire in fretta. Casa venduta al prezzo giusto.", author: "Maria G., Reggio Emilia", stars: 5 },
        { text: "Mio marito era scettico, ma alla fine siamo felicissimi. Casa più piccola, zero pensieri, più soldi per viaggiare.", author: "Carla P., Reggio Emilia", stars: 5 },
        { text: "Ci hanno aiutato sia a vendere la vecchia casa che a trovare il nuovo appartamento. Un servizio completo e umano.", author: "Bruno e Lucia M., Reggio Emilia", stars: 5 },
    ],
    faqTitle: "Domande frequenti sul downsizing",
    faqs: [
        { q: "È il momento giusto per vendere?", a: "Il mercato immobiliare di Reggio Emilia è solido e i prezzi sono sostenuti. In generale, prima si agisce, più si ha margine di scelta sia nella vendita che nell'acquisto della nuova abitazione." },
        { q: "Posso vendere e comprare contemporaneamente?", a: "Sì, coordiniamo le due operazioni per evitare che tu rimanga senza casa nel mezzo del percorso. Si può prevedere un periodo di affitto ponte o una clausola di rientro posticipato nel contratto di vendita." },
        { q: "Che tasse si pagano sulla vendita?", a: "Se la casa è la tua prima abitazione da più di 5 anni, non paghi plusvalenze. Le spese principali sono quelle notarili e l'eventuale provvigione d'agenzia." },
        { q: "Come fa l'agenzia a guadagnare se non mi fai pagare nulla in anticipo?", a: "La nostra provvigione è a successo: la paghiamo solo quando la vendita si completa, tramite il ricavato del rogito. Zero rischi per te." },
        { q: "La manutenzione straordinaria imminente svaluta molto la casa?", a: "Certamente influisce, ma spesso conviene vendere 'nello stato di fatto' piuttosto che imbarcarsi in ristrutturazioni costose prima di andare via. Ti consigliamo noi la strategia migliore." },
        { q: "Mi aiutate anche con il trasloco?", a: "Collaboriamo con ditte di traslochi affidabili a Reggio Emilia e possiamo aiutarti a organizzare il tutto per rendere il passaggio meno faticoso possibile." },
        { q: "Cosa succede se trovo la casa dei sogni prima di aver venduto la mia?", a: "Gestiamo la situazione con 'clausole sospensive' o accordi di tempistica precisi per bloccare la nuova casa senza rischiare di dover pagare due mutui contemporaneamente." },
        { q: "Come si gestisce la vendita se la casa è cointestata con i figli?", a: "È una situazione comune. Coordiniamo il consenso di tutte le parti e spieghiamo ai figli i vantaggi economici per la famiglia, gestendo la documentazione in modo che il passaggio sia fluido per tutti." },
        { q: "Se la nuova casa costa meno della vecchia, come conviene gestire il surplus?", a: "Molti nostri clienti usano la differenza per integrare la pensione o aiutare i figli. Ti consigliamo come ottimizzare l'operazione per massimizzare la liquidità che ti rimarrà in tasca." },
        { q: "Posso vendere la nuda proprietà e restare in casa per sempre?", a: "Assolutamente sì. È un'ottima soluzione per chi vuole liquidità immediata mantenendo il diritto di vivere nella propria casa. Ti spieghiamo come si calcola il valore in base alla tua età." },
        { q: "Mi aiutate a smaltire i mobili e gli oggetti che non porterò via?", a: "Sì, collaboriamo con ditte specializzate in sgomberi e mercatini dell'usato a Reggio Emilia. Ti aiutiamo a svuotare la casa vecchia senza che tu debba sollevare un solo scatolone." },
        { q: "Come scelgo il quartiere giusto per la mia 'nuova' vita?", a: "Cerchiamo zone pianeggianti, vicine ai servizi essenziali (farmacie, supermercati, parchi) e ben servite dai mezzi pubblici, per garantirti la massima autonomia anche in futuro." },
        { q: "È possibile fare uno scambio diretto con un altro proprietario?", a: "La permuta è rara ma tecnicamente possibile. Più spesso troviamo noi l'acquirente per te e il venditore della tua nuova casa, sincronizzando le date per un passaggio unico." },
        { q: "Quali sono le agevolazioni per chi vende e riacquista dopo i 65 anni?", a: "Esistono specifici crediti d'imposta per il riacquisto della prima casa. Inoltre, valutiamo se ci sono i presupposti per detrazioni legate alla ristrutturazione della nuova abitazione più piccola." },
    ],
    ctaTitle: "Inizia il tuo percorso verso una vita più leggera",
    ctaSubtitle: "Prenota una consulenza gratuita e senza impegno. Veniamo noi da te.",
    footerDesc: "Accompagniamo i pensionati nel percorso di downsizing a Reggio Emilia con rispetto e professionalità.",
    blogCategory: "Vendita",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
