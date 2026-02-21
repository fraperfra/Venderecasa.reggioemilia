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
    problemTitle: "Perché tenere una casa grande in pensione diventa oneroso",
    problemSubtitle: "I costi di una casa grande si moltiplicano nel tempo, riducendo le tue risorse economiche e la qualità della vita.",
    problems: [
        { icon: "🔧", title: "Manutenzione costante", desc: "Tetto, caldaia, facciata, giardino: una casa grande richiede <strong>interventi continui</strong> che <strong>pesano sulla pensione</strong>." },
        { icon: "💶", title: "IMU e spese fisse elevate", desc: "Le tasse sulla proprietà, le spese condominiali e le utenze di una casa grande <strong>erodono il budget mensile</strong>." },
        { icon: "😔", title: "Troppo spazio, poca vita", desc: "Stanze vuote, scale, giardino da gestire: una casa grande può diventare <strong>faticosa da vivere</strong> da soli o in coppia." },
    ],
    stepsTitle: "Il nostro approccio per te",
    steps: [
        { icon: "☕", title: "Un caffè insieme", desc: "Veniamo da te, <strong>senza fretta</strong>, per capire la tua situazione e i tuoi desideri per il futuro." },
        { icon: "📊", title: "Valutazione trasparente", desc: "Ti diciamo <strong>onestamente quanto vale</strong> la tua casa e quali sono le opzioni più convenienti per te." },
        { icon: "🏡", title: "Ti seguiamo fino in fondo", desc: "Dalla vendita all'eventuale acquisto della nuova casa: <strong>ti teniamo per mano</strong> per tutto il percorso." },
    ],
    socialProofTitle: "Case liberate, famiglie che hanno ricominciato",
    socialProofSubtitle: "Alcune delle case grandi che abbiamo aiutato a valorizzare e a cedere al momento giusto. Foto reali in arrivo.",
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
    ],
    ctaTitle: "Inizia il tuo percorso verso una vita più leggera",
    ctaSubtitle: "Prenota una consulenza gratuita e senza impegno. Veniamo noi da te.",
    footerDesc: "Accompagniamo i pensionati nel percorso di downsizing a Reggio Emilia con rispetto e professionalità.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
