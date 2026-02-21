import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "trasferimento",
    heroLabel: "Trasferimento Lavorativo",
    h1: "Ti stai <span class=\"h1-kw\">trasferendo</span> per lavoro? Vendiamo la tua casa a Reggio Emilia mentre tu ti sistemi altrove",
    subtitle: "<strong>Niente doppio affitto</strong>, niente casa vuota che si svaluta. <strong>Gestiamo tutto noi</strong>: dalla valutazione al rogito, anche a distanza.",
    benefits: [
        "Gestione completa anche se sei già lontano",
        "Vendita media in 45 giorni",
        "Aggiornamenti costanti via telefono o video call",
        "Nessun costo anticipato",
    ],
    formTitle: "Richiedi valutazione gratuita",
    selectLabel: "La tua situazione",
    selectOptions: [
        { value: "trasferimento_certo", label: "Ho già la data di trasferimento" },
        { value: "trasferimento_probabile", label: "Il trasferimento è probabile" },
        { value: "valutare", label: "Voglio valutare prima di decidere" },
        { value: "gia_trasferito", label: "Mi sono già trasferito" },
    ],
    problemTitle: "I rischi di lasciare casa vuota",
    problemSubtitle: "Una casa non venduta diventa rapidamente un costo inutile e un rischio patrimoniale.",
    problems: [
        { icon: "💰", title: "Doppia spesa ogni mese", desc: "Pagare l'affitto nella nuova città E le spese della casa vuota (mutuo, IMU, condominio) <strong>erode il tuo budget rapidamente</strong>." },
        { icon: "🏚️", title: "Svalutazione progressiva", desc: "Una casa sfitta e non curata <strong>perde valore</strong>. Umidità, usura, problemi tecnici possono emergere senza che tu lo sappia." },
        { icon: "📍", title: "Difficoltà gestione a distanza", desc: "Trovare acquirenti, fare visite, gestire la trattativa — tutto è <strong>molto più difficile</strong> quando non sei in città." },
    ],
    stepsTitle: "Come lavoriamo anche a distanza",
    steps: [
        { icon: "📱", title: "Video call iniziale", desc: "Prima consulenza in remoto per valutare l'immobile e capire le tue <strong>esigenze di tempistica</strong>." },
        { icon: "🔑", title: "Deleghiamo noi le visite", desc: "Accogliamo gli acquirenti, mostriamo l'immobile e <strong>gestiamo le trattative per tuo conto</strong>." },
        { icon: "📝", title: "Rogito a distanza", desc: "Con delega notarile o videoconferenza puoi <strong>firmare il rogito anche senza tornare</strong> a Reggio Emilia." },
    ],
    socialProofTitle: "Venduto a distanza, senza tornare a Reggio Emilia",
    socialProofSubtitle: "Alcune delle case che abbiamo venduto per conto di proprietari già trasferiti altrove in Italia. Foto in arrivo.",
    midFormTitle: "Organizziamo la vendita a distanza",
    midFormSubtitle: "Dicci dove sei, quando ti sei trasferito e le caratteristiche della casa. Ci occupiamo di tutto noi, tu ricevi aggiornamenti costanti.",
    reviewsTitle: "Cosa dicono chi si è trasferito con noi",
    reviews: [
        { text: "Mi sono trasferito a Milano per lavoro. Diba ha gestito tutto: visite, trattativa, rogito. Non sono tornato a Reggio Emilia neanche una volta.", author: "Stefano B., ex Reggio Emilia", stars: 5 },
        { text: "Pensavo fosse impossibile vendere stando già a Torino. Invece in 50 giorni era tutto finito. Aggiornamenti continui via WhatsApp.", author: "Valentina C., Torino", stars: 5 },
        { text: "Puntualissimi, precisi, e hanno spuntato un prezzo superiore alle mie aspettative nonostante la fretta.", author: "Gianluca M., Milano", stars: 5 },
    ],
    faqTitle: "Domande frecuenti sulla vendita per trasferimento",
    faqs: [
        { q: "Posso vendere casa senza essere presente a Reggio Emilia?", a: "Sì. Con una delega notarile, puoi autorizzare noi o un vostro fiduciario a firmare tutti i documenti per tuo conto, incluso il rogito. Gestiamo questa procedura regolarmente." },
        { q: "Quanto ci vuole per vendere?", a: "In media 45 giorni dalla presa in carico, con le giuste condizioni di prezzo. Se hai urgenza di partire presto, possiamo attivare la nostra rete di acquirenti qualificati per accelerare." },
        { q: "Conviene aspettare a trasferirsi per chiudere la vendita?", a: "Non sempre. Se il trasferimento è urgente, ti conviene partire e lasciarci gestire tutto. Aspettare per presidiare la vendita costa spesso più di quanto si guadagna." },
        { q: "Posso affittare la casa nell'attesa di venderla?", a: "È tecnicamente possibile ma sconsigliato se vuoi vendere velocemente: gli affittuari possono rallentare le visite e complicare il rogito. Valutiamo caso per caso." },
        { q: "Come gestite le chiavi e le visite mentre sono via?", a: "Gestiamo noi le chiavi in massima sicurezza. Ogni visita viene documentata e riceverai un report dettagliato via email o WhatsApp dopo ogni appuntamento." },
        { q: "La valutazione online è precisa?", a: "La valutazione iniziale basata sui dati è una stima attendibile. Per una perizia certificata, chiediamo a una persona di tua fiducia di aprirci casa una sola volta per verificare lo stato interno." },
        { q: "Potete aiutarmi a trovare casa nella mia nuova città?", a: "Grazie alle nostre partnership nazionali, possiamo segnalarti i migliori agenti locali nella città in cui ti stai trasferendo, assicurandoci che riceverai lo stesso standard di servizio." },
    ],
    ctaTitle: "Parti tranquillo. Pensiamo noi alla casa.",
    ctaSubtitle: "Valutiamo gratuitamente e ti diciamo in 24 ore quanto vale il tuo immobile.",
    footerDesc: "Gestiamo la vendita di immobili a Reggio Emilia anche per proprietari già trasferiti altrove.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
