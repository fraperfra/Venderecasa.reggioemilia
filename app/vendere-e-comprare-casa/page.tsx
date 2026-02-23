import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "upgrade",
    heroLabel: "Cambio Casa",
    h1: "Vuoi <span class=\"h1-kw\">vendere e comprare casa</span>? Ti aiutiamo con un piano coordinato su misura",
    subtitle: "<strong>Niente periodi di limbo</strong> senza tetto, niente doppi mutui. Sincronizziamo vendita e acquisto per farti vivere la tua nuova casa <strong>senza stress</strong>.",
    benefits: [
        "Piano coordinato vendita + acquisto",
        "Zero rischio di restare senza casa",
        "Un solo interlocutore per tutto il percorso",
        "Risparmio tempo e costi notarili coordinati",
    ],
    formTitle: "Raccontaci il tuo progetto",
    selectLabel: "Fase in cui ti trovi",
    selectOptions: [
        { value: "solo_vendere", label: "Devo prima vendere, poi cerco" },
        { value: "solo_comprare", label: "Ho già trovato la nuova, devo vendere" },
        { value: "entrambi", label: "Voglio fare tutto insieme" },
        { value: "valutare", label: "Non ho ancora deciso" },
    ],
    problemTitle: "Il cambio casa fai-da-te ha più insidie di quanto sembri",
    problemSubtitle: "Non è solo una questione logistica. Senza un piano coordinato, i rischi sono concreti — e costosi.",
    problems: [
        { icon: "⏱️", title: "Il timing è tutto, e nessuno te lo dice", desc: "Vendi troppo presto e ti ritrovi in affitto per mesi. Compri prima e poi non riesci a vendere la vecchia casa. <strong>Coordinare i due rogiti senza un piano preciso</strong> è come camminare su un filo." },
        { icon: "💸", title: "L'urgenza ti fa perdere soldi, in entrambe le direzioni", desc: "Chi ha fretta di vendere accetta offerte più basse. Chi ha fretta di comprare paga di più. <strong>Quando gestisci le due trattative senza un filo conduttore, il rischio di sbagliare è doppio.</strong>" },
        { icon: "🤯", title: "Da soli è davvero troppo", desc: "Due agenzie, due notai, due mutui, visite incrociate, caparre da bilanciare... gestire tutto in autonomia, mentre si lavora e si vive, è una fonte di stress enorme. <strong>Non devi farlo da solo.</strong>" },
    ],
    stepsTitle: "Il nostro piano in 3 passi",
    steps: [
        { icon: "🗺️", title: "Definiamo il piano", desc: "Captiamo le tue esigenze, valutiamo l'immobile attuale e definiamo il <strong>budget per il nuovo acquisto</strong>." },
        { icon: "🔄", title: "Coordinamento parallelo", desc: "Attiviamo la vendita e la ricerca <strong>contemporaneamente</strong>, sincronizzando i tempi per garantire la continuità abitativa." },
        { icon: "🏠", title: "Doppio rogito coordinato", desc: "Organizziamo i due rogiti in <strong>sequenza stretta (anche stesso giorno)</strong> per evitare periodi senza casa." },
    ],
    socialProofTitle: "Cambi casa riusciti a Reggio Emilia",
    socialProofSubtitle: "Alcune delle operazioni di compravendita coordinata che abbiamo gestito con successo. Foto dei casi reali in arrivo.",
    midFormTitle: "Pianifichiamo insieme il tuo cambio casa",
    midFormSubtitle: "Raccontaci il tuo progetto: cosa vuoi vendere, cosa cerchi, e in che tempi. Definiamo insieme la strategia più adatta.",
    reviewsTitle: "Chi ha già fatto cambio casa con noi",
    reviews: [
        { text: "Avevo paura di restare senza tetto. Invece Diba ha coordinato tutto: il giorno stesso abbiamo firmato vendita e acquisto. Incredibile.", author: "Alessandra V., Reggio Emilia", stars: 5 },
        { text: "Grazie alla loro rete abbiamo trovato la casa ideale mentre ancora vendevano la nostra. Tutto perfettamente sincronizzato.", author: "Paolo e Francesca R., Reggio Emilia", stars: 5 },
        { text: "Sembrava complicatissimo. Invece con un unico agente che seguiva tutto, è stato molto più semplice di quanto pensassi.", author: "Tommaso B., Reggio Emilia", stars: 5 },
    ],
    faqTitle: "Domande frequenti sul cambio casa",
    faqs: [
        { q: "Meglio vendere prima o comprare prima?", a: "Dipende dalla situazione di mercato e dalla tua solidità finanziaria. In genere consigliamo di iniziare la ricerca della nuova casa in parallelo alla messa in vendita, così sei pronto ad acquistare non appena arriva la proposta giusta per la tua." },
        { q: "Posso chiedere un mutuo se non ho ancora venduto?", a: "Dipende dal tuo reddito e dalla tua situazione finanziaria. Molte banche concedono il nuovo mutuo a condizione che quello vecchio venga estinto al rogito. Ti mettiamo in contatto con consulenti creditizi di fiducia." },
        { q: "Cosa succede se la nuova casa che voglio viene venduta prima che io finisca di vendere la mia?", a: "È un rischio reale che gestiamo con clausole contrattuali ad hoc (come l'opzione d'acquisto) e anticipando i tempi di messa in vendita della vecchia casa." },
        { q: "Quanto tempo richiede in media il doppio operazione?", a: "Con un piano ben strutturato, 60-90 giorni dall'incarico al doppio rogito. Dipende molto dalla velocità del mercato nella zona dell'immobile in vendita." },
        { q: "Cos'è il credito d'imposta per il riacquisto prima casa?", a: "Se vendi la tua prima casa e ne compri un'altra entro un anno, puoi detrarre l'imposta di registro già pagata sul primo acquisto dalle tasse del secondo. Ti aiutiamo a calcolare il risparmio esatto." },
        { q: "Posso restare in casa vecchia qualche mese dopo il rogito?", a: "Sì, si chiama 'comodato d'uso posticipato'. Si stabilisce una data di consegna chiavi successiva all'atto, spesso lasciando una somma in deposito a garanzia presso il notaio." },
        { q: "Perché affidarsi a un'unica agenzia per entrambe le operazioni?", a: "Avere un unico regista evita sfasamenti di tempi e problemi di comunicazione tra diversi attori. Coordiniamo le caparre e le scadenze dei mutui in modo millimetrico per la tua massima sicurezza." },
    ],
    ctaTitle: "Inizia a pianificare il tuo cambio casa",
    ctaSubtitle: "Valutiamo gratuitamente la tua casa attuale e definiamo insieme il piano migliore.",
    footerDesc: "Specialisti nel cambio casa coordinato a Reggio Emilia. Vendiamo e compriamo simultaneamente per te.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
