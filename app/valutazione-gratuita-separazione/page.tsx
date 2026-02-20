import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "separazione",
    heroLabel: "Separazione & Divorzio",
    h1: "Stai affrontando una separazione? Vendiamo la casa coniugale in tempi certi",
    subtitle: "Gestiamo la vendita in modo professionale e neutrale, tutelando entrambi i coniugi. Anche quando non c'è accordo.",
    benefits: [
        "Mediazione professionale tra coniugi in disaccordo",
        "Valutazione imparziale e certificata dell'immobile",
        "Gestione completa della documentazione legale",
        "Massimo riserbo e discrezione assoluta",
    ],
    formTitle: "Richiedi consulenza riservata",
    selectLabel: "Situazione attuale",
    selectOptions: [
        { value: "accordo", label: "Siamo d'accordo sulla vendita" },
        { value: "disaccordo", label: "C'è disaccordo tra noi" },
        { value: "valutare", label: "Voglio solo una valutazione" },
        { value: "non_so", label: "Non lo so ancora" },
    ],
    problemTitle: "Le sfide della casa durante una separazione",
    problemSubtitle: "Gestire un immobile in comproprietà durante una separazione è complesso. Ecco perché affidarsi a un professionista fa la differenza.",
    problems: [
        { icon: "⚖️", title: "Disaccordo tra coniugi", desc: "Spesso uno vuole vendere e l'altro no. Un valutatore neutro aiuta a trovare un punto d'incontro oggettivo." },
        { icon: "⏳", title: "Tempi legali lunghi", desc: "L'iter giuridico può rallentare tutto. Noi ti supportiamo parallelamente alla procedura legale per non perdere tempo." },
        { icon: "💸", title: "Valore non ottimizzato", desc: "Vendere in fretta per ansia porta a perdere migliaia di euro. Massimizziamo il prezzo anche nei tempi stretti." },
    ],
    stepsTitle: "Come funziona con noi",
    steps: [
        { icon: "📞", title: "Consulenza riservata", desc: "Ci confrontiamo in totale riserbo con uno o entrambi i coniugi per capire la situazione." },
        { icon: "📊", title: "Valutazione certificata", desc: "Produciamo una perizia oggettiva che entrambe le parti possono accettare." },
        { icon: "🤝", title: "Gestione della vendita", desc: "Ci occupiamo di tutto: acquirenti, trattativa, atti notarili. Voi pensate al futuro." },
    ],
    reviewsTitle: "Cosa dicono le famiglie che abbiamo aiutato",
    reviews: [
        { text: "La separazione era già difficile. Diba ha gestito la vendita della casa senza farci litigare ulteriormente. Professionali e discreti.", author: "Marco B., Reggio Emilia", stars: 5 },
        { text: "Non riuscivamo ad accordarci sul prezzo. La loro valutazione indipendente ha sbloccato tutto in una settimana.", author: "Silvia R., Reggio Emilia", stars: 5 },
        { text: "Ci hanno seguito passo passo senza mai prendere le parti di nessuno. Finalmente casa venduta e capitolo chiuso.", author: "Andrea C., Reggio Emilia", stars: 5 },
    ],
    faqTitle: "Domande frequenti sulla vendita in caso di separazione",
    faqs: [
        { q: "Posso vendere la casa anche se mio marito/moglie non vuole?", a: "No, non è possibile vendere senza il consenso dell'altro coniuge se la casa è in comproprietà. Tuttavia, esistono strumenti legali (come il giudice di pace o la mediazione) che possono sbloccare la situazione. Noi lavoriamo spesso in sinergia con avvocati specializzati per trovare soluzioni condivise." },
        { q: "Come viene diviso il ricavato della vendita?", a: "In genere in parti uguali (50/50) se la comproprietà è paritetica, oppure in base alle quote proprietà stabilite nell'atto. Il notaio gestisce la distribuzione al rogito." },
        { q: "Quanto tempo ci vuole per vendere in questi casi?", a: "I tempi dipendono dalla cooperazione tra le parti e dalle condizioni del mercato. Con accordo tra coniugi: 30-60 giorni. Con mediazione necessaria: 60-90 giorni." },
        { q: "Devo dire agli acquirenti che è una vendita per separazione?", a: "Non siete obbligati a comunicarlo, ma il notaio dovrà verificare la situazione catastale. Noi gestiamo la comunicazione in modo da non svantaggiarvi nelle trattative." },
    ],
    ctaTitle: "Vuoi una valutazione riservata della casa coniugale?",
    ctaSubtitle: "Rispondiamo entro poche ore con la massima discrezione.",
    footerDesc: "Specialisti nella vendita di immobili in situazioni complesse a Reggio Emilia. Professionalità e riserbo garantiti.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
