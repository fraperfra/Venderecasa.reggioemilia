import LandingPageTemplate, { PageConfig } from "@/components/LandingPageTemplate";

const config: PageConfig = {
    utmCampaign: "mutuo",
    heroLabel: "Difficoltà con il Mutuo",
    h1: "Non riesci a pagare il mutuo? Vendi casa prima che diventi un problema serio",
    subtitle: "Ti aiutiamo a vendere rapidamente al miglior prezzo, saldare il mutuo e ritrovare serenità finanziaria. Senza brutte sorprese.",
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
    problemTitle: "Le insidie di una difficoltà con il mutuo",
    problemSubtitle: "Aspettare peggiora sempre le cose. Ecco perché agire adesso, con la guida giusta, ti tutela davvero.",
    problems: [
        { icon: "📉", title: "Interessi di mora crescenti", desc: "Ogni rata non pagata accumula interessi aggiuntivi. Più aspetti, più il debito cresce e il margine di vendita si riduce." },
        { icon: "🔨", title: "Rischio pignoramento", desc: "Dopo un certo numero di insoluti la banca può avviare la procedura esecutiva. Una vendita volontaria evita tutto questo." },
        { icon: "😓", title: "Stress quotidiano", desc: "L'ansia finanziaria pesa su tutta la famiglia. Risolvere la situazione immobiliare spesso è il primo passo per ritrovare equilibrio." },
    ],
    stepsTitle: "Come ti aiutiamo",
    steps: [
        { icon: "🔍", title: "Analisi della situazione", desc: "Valutiamo l'immobile e il debito residuo per capire qual è il margine reale che otterresti dalla vendita." },
        { icon: "🏦", title: "Coordinamento con la banca", desc: "Ci occupiamo noi di comunicare con l'istituto di credito e gestire le tempistiche di svincolo dell'ipoteca." },
        { icon: "✅", title: "Vendita veloce", desc: "Grazie alla nostra rete di acquirenti qualificati, chiudiamo in media in 30-60 giorni al miglior prezzo." },
    ],
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
    ],
    ctaTitle: "Scopri subito quanto vale la tua casa",
    ctaSubtitle: "Ti diciamo in 24 ore se c'è margine per uscire dalla situazione.",
    footerDesc: "Supportiamo proprietari in difficoltà finanziaria a vendere casa in modo rapido e dignitoso a Reggio Emilia.",
};

export default function Page() {
    return <LandingPageTemplate config={config} />;
}
