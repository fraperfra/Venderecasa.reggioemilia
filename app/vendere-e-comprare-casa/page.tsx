import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "upgrade",
    heroLabel: "Cambio Casa",
    h1: "Vuoi vendere e comprare casa? Ti aiutiamo con un piano coordinato su misura",
    subtitle: "Niente periodi di limbo senza tetto, niente doppi mutui. Sincronizziamo vendita e acquisto per farti vivere la tua nuova casa senza stress.",
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
    problemTitle: "Le insidie del cambio casa fai da te",
    problemSubtitle: "Coordinare vendita e acquisto senza un piano preciso può costarti molto caro.",
    problems: [
        { icon: "⏱️", title: "Tempi sfasati", desc: "Vendi prima del previsto e non hai ancora trovato la nuova? Oppure compri e poi non riesci a vendere? Senza coordinamento rischi mesi in affitto o con due mutui." },
        { icon: "💸", title: "Perdita di potere contrattuale", desc: "Chi vende urgente per comprare rischia di svendere. Chi compra urgente per aver già venduto finisce per pagare troppo. Noi bilanciamo entrambe le operazioni." },
        { icon: "🤯", title: "Stress da gestione parallela", desc: "Visite, proposte, trattative, mutui, notai: gestire tutto in parallelo da soli è estenuante. Noi facciamo da regia per te." },
    ],
    stepsTitle: "Il nostro piano in 3 passi",
    steps: [
        { icon: "🗺️", title: "Definiamo il piano", desc: "Captiamo le tue esigenze, valutiamo l'immobile attuale e definiamo il budget per il nuovo acquisto." },
        { icon: "🔄", title: "Coordinamento parallelo", desc: "Attiviamo la vendita e la ricerca contemporaneamente, sincronizzando i tempi per minimo 1 soluzione di continuità." },
        { icon: "🏠", title: "Doppio rogito coordinato", desc: "Organizziamo i due rogiti in sequenza stretta (anche stesso giorno) per evitare periodi senza casa." },
    ],
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
    ],
    ctaTitle: "Inizia a pianificare il tuo cambio casa",
    ctaSubtitle: "Valutiamo gratuitamente la tua casa attuale e definiamo insieme il piano migliore.",
    footerDesc: "Specialisti nel cambio casa coordinato a Reggio Emilia. Vendiamo e compriamo simultaneamente per te.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
