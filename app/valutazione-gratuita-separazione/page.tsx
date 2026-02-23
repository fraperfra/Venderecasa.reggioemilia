import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "separazione",
    heroLabel: "Separazione & Divorzio",
    h1: "Stai affrontando una <span class=\"h1-kw\">separazione</span>? Vendiamo la casa coniugale in <strong>tempi certi</strong>",
    subtitle: "Gestiamo la vendita in modo <strong>professionale e neutrale</strong>, tutelando <strong>entrambi i coniugi</strong>. Anche quando non c'è accordo.",
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
    problemTitle: "La casa è l'ultima cosa di cui vorresti occuparti adesso",
    problemSubtitle: "Eppure è lì, con le sue spese, i suoi ricordi e le sue decisioni da prendere. Ecco cosa rende tutto più complicato.",
    problems: [
        { icon: "⚖️", title: "Uno vuole vendere, l'altro no", desc: "È forse il blocco più comune. In un momento già difficile, discutere del prezzo di casa rischia di diventare un'altra battaglia. Una valutazione oggettiva fatta da un terzo spesso <strong>sblocca tutto in pochi giorni</strong>." },
        { icon: "⏳", title: "L'avvocato fa il suo, ma la casa rimane ferma", desc: "Mentre la separazione legale va avanti, la casa continua a costare: mutuo, condominio, IMU. <strong>Lavorare in parallelo</strong> tra gestione legale e vendita evita mesi di costi inutili." },
        { icon: "💸", title: "L'ansia porta a svendere", desc: "Chi ha fretta di chiudere spesso accetta la prima offerta, anche quando non è quella giusta. Noi gestiamo la trattativa con testa fredda, <strong>tutelando entrambe le parti</strong>, anche quando le emozioni sono ancora calde." },
    ],
    stepsTitle: "Come funziona con noi",
    steps: [
        { icon: "📝", title: "Compila il form", desc: "Puoi farlo anche da solo, senza che l'altro coniuge sappia. <strong>Massima riservatezza garantita</strong>." },
        { icon: "📊", title: "Valutazione certificata", desc: "Produciamo una <strong>perizia oggettiva</strong> che entrambe le parti possono accettare, senza discussioni." },
        { icon: "🤝", title: "Ti consigliamo la soluzione migliore", desc: "Ci occupiamo di tutto: acquirenti, trattativa, atti notarili. <strong>Voi pensate al futuro</strong>." },
    ],
    socialProofTitle: "Immobili venduti. Risultati veri.",
    socialProofSubtitle: "Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.",
    socialProofItems: [
        { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
        { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
    ],
    midFormTitle: "Richiedi una consulenza riservata completa",
    midFormSubtitle: "Raccontaci la tua situazione in modo riservato. Ogni dettaglio ci aiuta a trovare la soluzione migliore per entrambe le parti.",
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
        { q: "Cosa succede se c'è un mutuo in corso?", a: "Il mutuo può essere estinto con il ricavato della vendita al momento del rogito. Se uno dei due vuole restare in casa, può tentare l'accollo del mutuo dell'altro, previa approvazione della banca." },
        { q: "Chi paga le spese della casa fino alla vendita?", a: "In genere dipendono dagli accordi di separazione. Spesso le spese ordinarie spettano a chi abita la casa, mentre quelle straordinarie si dividono in base alle quote di proprietà." },
        { q: "La casa è stata assegnata a me per i figli, posso venderla?", a: "L'assegnazione della casa familiare non toglie la proprietà. Se entrambi i proprietari sono d'accordo, si può vendere, ma l'acquirente deve essere consapevole che il diritto di abitazione potrebbe permanere se non revocato dal giudice." },
        { q: "Come fate a essere sicuri di essere neutrali tra noi due?", a: "Il nostro cliente è 'l'immobile'. Il nostro obiettivo è ottenere il massimo prezzo possibile. Comunichiamo in trasparenza con entrambi i coniugi (o i loro avvocati) inviando le stesse informazioni a entrambi." },
        { q: "Cosa succede se uno dei due coniugi cambia idea durante la vendita?", a: "Senza la firma di entrambi non si può rogitare. Per questo lavoriamo molto sulla fase preliminare, facendo firmare un incarico chiaro che vincoli entrambi alla strategia concordata." },
        { q: "Potete testimoniare in tribunale sul valore della casa?", a: "Forniamo una perizia scritta documentata che può essere presentata dai vostri avvocati durante la fase di separazione per stabilire le basi della divisione patrimoniale." },
        { q: "Si può vendere la casa mentre la causa di separazione è in corso?", a: "Sì, anzi spesso è consigliabile per evitare che il valore dell'immobile diminuisca o che i costi di gestione diventino insostenibili. Basta l'accordo tra le parti." },
        { q: "Come si gestiscono gli appuntamenti se uno dei due vive ancora in casa?", a: "Concordiamo un calendario di visite che rispetti la privacy e la situazione emotiva di chi vive lì, evitando tensioni e rendendo la casa sempre presentabile per gli acquirenti." },
        { q: "Chi decide il prezzo finale se noi due non siamo d'accordo?", a: "Noi forniamo il dato di mercato. Se non c'è accordo, la vendita rischia di bloccarsi. Il nostro compito è mediare spiegando le conseguenze economiche di un rifiuto ingiustificato." },
        { q: "È possibile che uno dei due coniugi compri la quota dell'altro?", a: "Certamente. In questo caso la nostra valutazione serve a determinare la cifra equa per la liquidazione, evitando che uno dei due si senta penalizzato dall'altro." },
    ],
    ctaTitle: "Vuoi una valutazione riservata della casa coniugale?",
    ctaSubtitle: "Rispondiamo entro poche ore con la massima discrezione.",
    footerDesc: "Specialisti nella vendita di immobili in situazioni complesse a Reggio Emilia. Professionalità e riserbo garantiti.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
