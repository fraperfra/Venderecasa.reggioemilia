import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "mutuo",
    heroLabel: "Difficoltà con il Mutuo",
    h1: "Non riesci a pagare il <span class=\"h1-kw\">mutuo</span>? Vendi casa prima che diventi un problema serio",
    subtitle: "Ti aiutiamo a vendere rapidamente al <strong>miglior prezzo</strong>, saldare il mutuo e ritrovare <strong>serenità finanziaria</strong>. Senza brutte sorprese.",
    benefits: [
        "Valutazione gratuita entro 24 ore",
        "Vendita rapida: mediamente 45 giorni",
        "Coordinamento con la banca e il notaio",
        "Zero costi anticipati per te",
    ],
    formTitle: "Analisi gratuita della tua situazione",
    selectLabel: "Situazione del mutuo",
    selectOptions: [
        { value: "rate_difficili", label: "Faccio fatica a pagare le rate" },
        { value: "arretrati", label: "Ho già degli arretrati" },
        { value: "valutare", label: "Voglio solo capire le opzioni" },
        { value: "non_so", label: "Non lo so ancora" },
    ],
    problemTitle: "Aspettare non risolve niente. Anzi.",
    problemSubtitle: "Lo sappiamo: affrontare queste situazioni fa paura. Ma più si aspetta, meno margine resta. Ecco perché.",
    problems: [
        { icon: "📉", title: "Il debito cresce ogni giorno che passa", desc: "Le rate arretrate non aspettano. Gli interessi di mora si sommano, il margine tra il valore della casa e il debito si restringe. <strong>Prima si agisce, più opzioni si hanno</strong> per chiudere in modo dignitoso." },
        { icon: "🔨", title: "Una vendita volontaria è un'altra cosa rispetto all'asta", desc: "Se la banca avvia la procedura esecutiva, il prezzo di aggiudicazione è quasi sempre molto più basso di quello di mercato. <strong>Vendere adesso, da soli, vuol dire incassare molto di più</strong> e non avere brutte sorprese." },
        { icon: "😓", title: "Il peso mentale è reale", desc: "L'ansia di non riuscire a pagare la rata del mutuo è estenuante. Non è solo una questione economica: pesa sulla famiglia, sui rapporti, sul sonno. Spesso, trovare una via d'uscita concreta è già <strong>il primo sollievo vero</strong>." },
    ],
    stepsTitle: "Come ti aiutiamo",
    steps: [
        { icon: "🔍", title: "Analisi della situazione", desc: "Valutiamo l'immobile e il debito residuo per capire qual è il <strong>margine reale</strong> che otterresti dalla vendita." },
        { icon: "🏦", title: "Coordinamento con la banca", desc: "Ci occupiamo noi di comunicare con l'istituto di credito e gestire le <strong>tempistiche di svincolo dell'ipoteca</strong>." },
        { icon: "✅", title: "Vendita veloce", desc: "Grazie alla nostra rete di acquirenti qualificati, chiudiamo in media in <strong>30-60 giorni</strong> al miglior prezzo." },
    ],
    socialProofTitle: "Fuori dal mutuo in tempi record",
    socialProofSubtitle: "Alcuni degli immobili che abbiamo venduto rapidamente per liberare i proprietari da difficoltà finanziarie. Foto in arrivo.",
    midFormTitle: "Analizziamo insieme la tua situazione",
    midFormSubtitle: "Raccontaci la tua situazione con il mutuo. Più informazioni ci fornisci, meglio possiamo valutare la fattibilità e i margini reali.",
    reviewsTitle: "Storie di chi ha trovato una via d'uscita",
    reviews: [
        { text: "Stavo per finire in procedura esecutiva. Grazie a Diba ho venduto in 40 giorni, saldato il mutuo e mi sono rimasti 30.000€. Un sollievo enorme.", author: "Roberto L., Reggio Emilia", stars: 5 },
        { text: "Non sapevo nemmeno da dove cominciare. Loro hanno gestito tutto, anche i rapporti con la banca. Professionalità vera.", author: "Cristina M., Reggio Emilia", stars: 5 },
        { text: "Mi avevano detto che non ci fosse soluzione. Invece hanno trovato un acquirente in tre settimane. Consiglio a tutti.", author: "Luca P., Reggio Emilia", stars: 5 },
    ],
    faqTitle: "Domande frequenti sulla vendita per difficoltà con il mutuo",
    faqs: [
        { q: "Posso vendere casa anche se ho ancora il mutuo?", a: "Sì. La vendita si può perfettamente realizzare. Al rogito il mutuo viene estinto con parte del ricavato della vendita, e il notaio cancella l'ipoteca. Se il valore della casa supera il debito, incassi la differenza." },
        { q: "Cosa succede se la casa vale meno del mutuo residuo?", a: "Si chiama 'situazione di sottoprezzo'. In questi casi lavoriamo con la banca per trovare un accordo (ristrutturazione del debito o saldo e stralcio). È una situazione risolvibile, ma richiede competenza specifica." },
        { q: "Quanto tempo ho prima che la banca avvii il pignoramento?", a: "In genere le banche attendono 3-6 rate non pagate prima di avviare la procedura, ma varia da istituto a istituto. Prima agisci, più opzioni hai a disposizione." },
        { q: "Dovete sapere quante rate ho saltato?", a: "Sì, ci aiuta a pianificare correttamente la gestione del rogito con la banca. Tutto ciò che ci comunichi rimane riservato." },
        { q: "Cosa sono le penali di estinzione anticipata?", a: "Per i mutui sulla prima casa stipulati dopo il 2007, per legge non esistono penali di estinzione anticipata. Se il tuo mutuo è più vecchio, verifichiamo noi le condizioni del tuo contratto." },
        { q: "Posso vendere con la formula 'Salto e Stralcio'?", a: "Sì, se il debito è superiore al valore di mercato, possiamo negoziare con la banca una chiusura a saldo e stralcio: l'istituto accetta una somma inferiore per chiudere la posizione ed evitare l'asta." },
        { q: "L'acquirente può accollarsi il mio mutuo?", a: "È tecnicamente possibile (accollo), ma l'acquirente deve avere i requisiti reddituali e la banca deve approvare il subentro. Spesso è più semplice estinguere il vecchio mutuo e farne uno nuovo." },
    ],
    ctaTitle: "Scopri subito quanto vale la tua casa",
    ctaSubtitle: "Ti diciamo in 24 ore se c'è margine per uscire dalla situazione.",
    footerDesc: "Supportiamo proprietari in difficoltà finanziaria a vendere casa in modo rapido e dignitoso a Reggio Emilia.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
