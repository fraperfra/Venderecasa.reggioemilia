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
    problemTitle: "Quella casa lasciata a Reggio costa più di quanto pensi",
    problemSubtitle: "Non vendere non è neutro. Ogni mese che passa ha un costo reale — economico e mentale.",
    problems: [
        { icon: "💰", title: "Due spese al mese, senza capirci niente", desc: "L'affitto nella nuova città più il mutuo (o le spese) della casa lasciata vuota a Reggio Emilia: ogni mese che passa senza vendere sono <strong>soldi veri che escono</strong> senza un motivo." },
        { icon: "🏚️", title: "Una casa vuota si deteriora prima di quanto pensi", desc: "Umidità, piccoli danni non visti, caldaia che si guasta... quando sei lontano, i problemi si scoprono sempre tardi. <strong>E risolverli a distanza è ancora più costoso.</strong>" },
        { icon: "📍", title: "Organizzare visite da un'altra città è un incubo", desc: "Prendere ferie, rientrare a Reggio solo per un appuntamento, gestire trattative via messaggio mentre sei in ufficio nella nuova città. <strong>Non è così che deve andare.</strong>" },
    ],
    stepsTitle: "Come lavoriamo anche a distanza",
    steps: [
        { icon: "📝", title: "Compila il form", desc: "Puoi farlo comodamente da dove sei. <strong>Prima consulenza in video call</strong>, senza doverti spostare." },
        { icon: "🔑", title: "Gestiamo tutto noi", desc: "Accogliamo gli acquirenti, mostriamo l'immobile e <strong>gestiamo le trattative per tuo conto</strong>. Tu ricevi aggiornamenti costanti." },
        { icon: "✅", title: "Ti consigliamo la soluzione migliore", desc: "Ti diciamo prezzo, tempistiche e strategia. Con delega notarile puoi <strong>firmare il rogito senza tornare</strong> a Reggio Emilia." },
    ],
    socialProofTitle: "Immobili venduti. Risultati veri.",
    socialProofSubtitle: "Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.",
    socialProofItems: [
        { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
    ],
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
        { q: "Come posso monitorare le visite se sono a 500km di distanza?", a: "Ti inviamo un report digitale dopo ogni appuntamento con i feedback degli acquirenti e il punteggio di interesse. Puoi anche richiedere video-chiamate di aggiornamento settimanali." },
        { q: "Chi si occupa della pulizia e del decoro mentre la casa è vuota?", a: "Possiamo incaricare una ditta di pulizie per passaggi periodici e assicurarci che la casa sia sempre in ordine e profumata prima degli appuntamenti." },
        { q: "Cosa succede se c'è un'emergenza (es. perdita d'acqua) e io non ci sono?", a: "Avendo le chiavi e la tua fiducia, interveniamo subito con i nostri tecnici di pronto intervento (idraulici, elettricisti) e ti informiamo in tempo reale." },
        { q: "Posso firmare i documenti digitalmente?", a: "Per la maggior parte dei documenti pre-contrattuali usiamo la firma elettronica avanzata. Per l'atto notarile, se non puoi venire, organizziamo una procura speciale." },
        { q: "Mi aiutate a gestire la voltura delle utenze per l'acquirente?", a: "Sì, coordiniamo la lettura dei contatori l'ultimo giorno e aiutiamo l'acquirente a fare il subentro, così non dovrai preoccuparti di bollette che arrivano dopo la vendita." },
        { q: "Come gestite il ritiro della posta rimasta nella cassetta?", a: "Ritiriamo noi la corrispondenza e, se importante, te la scansioniamo o te la rispediamo al nuovo indirizzo, evitando che la cassetta piena segnali che la casa è vuota." },
        { q: "Posso vendere la casa arredata per fare prima?", a: "A volte l'arredo aiuta a vendere, altre volte è un ostacolo. Ti consigliamo noi se conviene lasciare tutto, vendere i mobili separatamente o sgombrare." },
    ],
    ctaTitle: "Parti tranquillo. Pensiamo noi alla casa.",
    ctaSubtitle: "Valutiamo gratuitamente e ti diciamo in 24 ore quanto vale il tuo immobile.",
    footerDesc: "Gestiamo la vendita di immobili a Reggio Emilia anche per proprietari già trasferiti altrove.",
    blogCategory: "Situazioni Difficili",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
