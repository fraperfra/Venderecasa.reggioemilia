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
        { icon: "📝", title: "Compila il form", desc: "Raccontaci dove sei nel percorso: cosa vuoi vendere, cosa cerchi e in che tempi. Ci vuole meno di 2 minuti." },
        { icon: "🔄", title: "Coordiniamo vendita e acquisto", desc: "Attiviamo le due operazioni <strong>in parallelo</strong>, sincronizzando i tempi per garantirti la continuità abitativa." },
        { icon: "✅", title: "Ti consigliamo la soluzione migliore", desc: "Definiamo insieme la strategia: prezzi, tempistiche e clausole. Fino al <strong>doppio rogito coordinato</strong>, anche nello stesso giorno." },
    ],
    socialProofTitle: "Immobili venduti. Risultati veri.",
    socialProofSubtitle: "Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.",
    socialProofItems: [
        { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
    ],
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
        { q: "Cosa succede se vendo la mia casa ma non ho ancora trovato quella nuova?", a: "Inseriamo una 'clausola di consegna posticipata' nel contratto di vendita. Avrai qualche mese di tempo dopo il rogito per restare in casa (o trovare una sistemazione temporanea) con tranquillità." },
        { q: "Posso vincolare la vendita della mia casa all'acquisto della nuova?", a: "È possibile inserire una clausola sospensiva, ma rende l'immobile meno appetibile per gli acquirenti. Esistono strategie migliori di coordinamento temporale che ti spieghiamo." },
        { q: "Esiste un prestito per coprire la caparra della nuova casa mentre aspetto i soldi della vecchia?", a: "Sì, si chiama 'finanziamento ponte' (bridge loan). Ti mettiamo in contatto con istituti di credito a Reggio Emilia che offrono questa soluzione specifica." },
        { q: "Devo pagare due volte le provvigioni dell'agenzia?", a: "Essendo un'operazione doppia gestita da noi, concordiamo un trattamento di favore sul pacchetto completo 'Vendi & Compra', facendoti risparmiare sensibilmente." },
        { q: "Come si sincronizzano i due traslochi in un solo giorno?", a: "Organizziamo tutto con ditte di traslochi esperte in 'incastri'. Spesso si carica il camion la mattina dalla vecchia casa e si scarica il pomeriggio nella nuova, dopo il doppio rogito." },
        { q: "Se la nuova casa ha bisogno di lavori, come gestite i tempi?", a: "Calcoliamo il tempo necessario per la ristrutturazione nella data di consegna della vecchia casa, o cerchiamo soluzioni di affitto breve per coprire il periodo dei lavori." },
        { q: "Il credito d'imposta prima casa si applica subito al notaio?", a: "Sì, se vendi e riacquisti entro un anno, puoi compensare direttamente l'imposta di registro dovuta al momento del rogito della nuova casa, riducendo l'esborso immediato." },
        { q: "Perché affidarsi a un'unica agenzia per entrambe le operazioni?", a: "Avere un unico regista evita sfasamenti di tempi e problemi di comunicazione tra diversi attori. Coordiniamo le caparre e le scadenze dei mutui in modo millimetrico per la tua massima sicurezza." },
    ],
    ctaTitle: "Inizia a pianificare il tuo cambio casa",
    ctaSubtitle: "Valutiamo gratuitamente la tua casa attuale e definiamo insieme il piano migliore.",
    footerDesc: "Specialisti nel cambio casa coordinato a Reggio Emilia. Vendiamo e compriamo simultaneamente per te.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
