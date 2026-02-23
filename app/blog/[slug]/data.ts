export interface ArticleSection {
  h2: string;
  content: string;
}

export interface Article {
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  intro: string;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

export const articles: Record<string, Article> = {
  "come-vendere-casa-ereditata-reggio-emilia": {
    title: "Come vendere una casa ereditata a Reggio Emilia: guida completa",
    metaTitle: "Come Vendere Casa Ereditata a Reggio Emilia | Guida 2025 | Diba",
    metaDescription: "Hai ereditato un immobile a Reggio Emilia? Scopri la guida completa: successione, pratiche burocratiche, tempistiche e come ottenere il prezzo migliore.",
    date: "15 gennaio 2025",
    category: "Successioni",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    intro: "Ereditare una casa comporta una serie di adempimenti burocratici e decisioni importanti. Se sei nella situazione di dover vendere un immobile ricevuto per successione a Reggio Emilia, questa guida ti spiega tutto quello che devi sapere: dalla dichiarazione di successione alla vendita, passando per la gestione di eredi multipli e ipoteche.",
    sections: [
      {
        h2: "Primo passo: la dichiarazione di successione",
        content: "Entro 12 mesi dalla data del decesso, gli eredi devono presentare la dichiarazione di successione all'Agenzia delle Entrate. Questo documento è fondamentale per poter poi procedere alla vendita dell'immobile. Senza la dichiarazione di successione (e la successiva trascrizione nei registri immobiliari), l'immobile non può essere venduto.\n\nI documenti necessari includono: certificato di morte, atti di stato civile degli eredi, documenti dell'immobile (visure catastali, planimetrie), eventuale testamento. Un professionista può aiutarti a raccogliere tutto il necessario e presentare la pratica nei termini di legge.",
      },
      {
        h2: "Comproprietà tra eredi: come funziona la vendita",
        content: "Quando l'immobile viene ereditato da più eredi, ogni decisione richiede l'accordo di tutti. Per vendere è necessario il consenso unanime dei comproprietari. Se uno degli eredi non vuole vendere, la situazione si complica: è possibile ricorrere alla divisione giudiziale, ma è un procedimento lungo e costoso.\n\nIn questi casi, il ruolo di un mediatore esperto è fondamentale. Spesso riusciamo a trovare accordi che soddisfano tutte le parti, evitando contenziosi legali e ritardi nella vendita.",
      },
      {
        h2: "Valutare correttamente l'immobile ereditato",
        content: "Un errore comune è affidarsi a valutazioni di rendita catastale o a stime non aggiornate. Il mercato immobiliare di Reggio Emilia ha dinamiche proprie per ogni quartiere e tipologia di immobile. Una valutazione professionale basata sulle compravendite recenti nella stessa zona è fondamentale per stabilire il prezzo corretto.\n\nUn prezzo troppo alto allontana gli acquirenti seri. Un prezzo troppo basso significa lasciare soldi sul tavolo. La valutazione Diba analizza le transazioni reali degli ultimi 6-12 mesi nella stessa area.",
      },
      {
        h2: "Tempistiche e imposte sulla vendita",
        content: "La plusvalenza sulla vendita di un immobile ereditato è normalmente esente da IRPEF, purché la vendita avvenga dopo 5 anni dall'acquisto originario da parte del de cuius oppure se l'immobile era abitazione principale. È sempre consigliabile verificare la situazione specifica con un commercialista.\n\nLe imposte di successione invece dipendono dal grado di parentela e dal valore dell'asse ereditario. Per figli e coniuge sono esenti fino a 1 milione di euro per erede.",
      },
      {
        h2: "Come Diba gestisce la vendita di case ereditate",
        content: "In 15 anni abbiamo gestito centinaia di successioni immobiliari a Reggio Emilia. Il nostro approccio include: coordinamento con notai e commercialisti di fiducia, gestione delle pratiche catastali e ipotecarie, mediazione tra eredi in caso di disaccordo, marketing professionale dell'immobile, gestione di tutta la fase trattativa.\n\nLa nostra esperienza nelle situazioni complesse ci permette di trovare soluzioni che altri non vedono.",
      },
    ],
    faqs: [
      { q: "Posso vendere prima di completare la successione?", a: "No. La trascrizione della successione nei registri immobiliari è un prerequisito indispensabile per la vendita. Il processo richiede in media 3-6 mesi dalla presentazione della dichiarazione." },
      { q: "Cosa succede se uno degli eredi non è rintracciabile?", a: "La situazione richiede un intervento legale. Si può ricorrere alla nomina di un curatore dell'assente o intraprendere un procedimento di divisione giudiziale. Un avvocato specializzato può guidarvi nel percorso più efficiente." },
      { q: "Devo fare lavori prima di vendere?", a: "Dipende dallo stato dell'immobile e dal mercato. Spesso piccoli interventi di pulizia e piccola manutenzione aumentano il valore percepito più del loro costo. Lo valutiamo insieme durante il sopralluogo gratuito." },
    ],
    ctaTitle: "Hai ereditato una casa a Reggio Emilia?",
    ctaDesc: "Contattaci per una consulenza gratuita. Ti aiutiamo a gestire la successione e a vendere al prezzo migliore.",
  },

  "vendere-casa-velocemente-reggio-emilia": {
    title: "Come vendere casa velocemente a Reggio Emilia senza svendere",
    metaTitle: "Vendere Casa Velocemente a Reggio Emilia | Guida Pratica | Diba",
    metaDescription: "Vuoi vendere casa in fretta a Reggio Emilia senza abbassare il prezzo? Scopri le strategie che usano i professionisti per chiudere in 30-45 giorni.",
    date: "8 febbraio 2025",
    category: "Vendita",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    intro: "Vendere casa velocemente e al prezzo giusto non è una contraddizione: è il risultato di una strategia ben costruita. In questo articolo ti spieghiamo le tecniche che usiamo ogni giorno per vendere immobili a Reggio Emilia in media in 45 giorni, senza svendere.",
    sections: [
      {
        h2: "Il prezzo: la variabile più importante",
        content: "L'errore più comune è partire con un prezzo di listino troppo alto con l'intenzione di abbassarlo. Questa strategia è controproducente: gli acquirenti seri monitorano il mercato e quando vedono un immobile fermo da mesi iniziano a fare offerte molto basse.\n\nIl prezzo corretto è quello che massimizza le offerte nella prima settimana di pubblicazione. Devi analizzare le compravendite reali degli ultimi 6 mesi nella stessa zona, non il prezzo degli annunci attivi (che spesso sono sopravvalutati).",
      },
      {
        h2: "Home staging: come presentare l'immobile",
        content: "Le foto di un immobile in vendita vengono viste in media da 200-300 potenziali acquirenti online prima che qualcuno decida di visitarlo. Se le foto sono brutte o l'appartamento è disordinato, stai perdendo opportunità preziose.\n\nNon serve una ristrutturazione completa: spesso bastano pulizia profonda, rimozione di oggetti personali, piccole riparazioni (rubinetti che perdono, pareti da ritinteggiare) e una sessione fotografica professionale. Il ritorno sull'investimento è quasi sempre positivo.",
      },
      {
        h2: "La distribuzione dell'annuncio",
        content: "Un annuncio ben scritto con foto professionali, pianta dell'appartamento e virtual tour 3D raggiunge il doppio delle visualizzazioni rispetto a un annuncio standard. Distribuirlo su tutti i principali portali (Idealista, Immobiliare.it, Casa.it) contemporaneamente al lancio massimizza l'esposizione nella fase più importante.\n\nTroppoi privati pubblicano solo su uno o due portali, o lo fanno in modo disomogeneo. La distribuzione multcanale sincronizzata è uno dei vantaggi principali di lavorare con un'agenzia strutturata.",
      },
      {
        h2: "La gestione delle visite",
        content: "Ogni visita è un'opportunità che può trasformarsi in offerta, ma anche in un'occasione persa se gestita male. L'immobile deve essere sempre pulito e in ordine. Il clima deve essere accogliente. Le domande degli acquirenti devono ricevere risposte oneste e convincenti.\n\nNoi gestiamo mediamente 8-12 visite qualificate per immobile prima di ricevere un'offerta seria. Qualificate significa: acquirenti che hanno già la pre-approvazione del mutuo o la disponibilità finanziaria, e che cercano esattamente quella tipologia in quella zona.",
      },
      {
        h2: "Negoziazione: come non cedere più del necessario",
        content: "Ogni acquirente proverà a negoziare. La chiave è arrivare alla trattativa con dati di mercato concreti che giustifichino il tuo prezzo. Se sai esattamente quanto hanno pagato le ultime 5 case simili nella stessa strada, sei in una posizione di forza.\n\nUna concessione ragionevole di 3-5% rispetto al prezzo di listino è normale e sana. Più di questo significa che qualcosa non ha funzionato nelle fasi precedenti: prezzo, presentazione o targeting degli acquirenti.",
      },
    ],
    faqs: [
      { q: "È meglio vendere con un'agenzia o da privato?", a: "I dati mostrano che le case vendute tramite agenzia ottengono in media prezzi più alti (5-10%) e si vendono più velocemente. Il costo della provvigione viene quasi sempre più che compensato dal prezzo finale." },
      { q: "Qual è il momento migliore dell'anno per vendere?", a: "Primavera (marzo-giugno) e autunno (settembre-novembre) sono i periodi più attivi. Ma un immobile ben presentato e prezzato correttamente si vende bene in qualsiasi stagione." },
      { q: "Devo obbligatoriamente fare il virtual tour?", a: "Non è obbligatorio, ma aumenta significativamente le visualizzazioni e filtra meglio i visitatori: chi prenota dopo aver visto il virtual tour è già convinto dell'immobile e ha meno probabilità di rinunciare dopo la visita." },
    ],
    ctaTitle: "Vuoi vendere casa a Reggio Emilia rapidamente?",
    ctaDesc: "Contattaci per una valutazione gratuita. Ti diciamo esattamente quanto vale la tua casa e come venderla nel minor tempo possibile.",
  },

  "difficolta-mutuo-come-vendere-prima-pignoramento": {
    title: "Difficoltà con il mutuo: come vendere casa prima del pignoramento",
    metaTitle: "Vendere Casa con Mutuo in Difficoltà a Reggio Emilia | Diba",
    metaDescription: "Sei in ritardo con le rate del mutuo? Ecco come vendere casa prima del pignoramento a Reggio Emilia, proteggendo il tuo credit score e recuperando liquidità.",
    date: "20 marzo 2025",
    category: "Situazioni Difficili",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    intro: "Trovarsi in difficoltà con le rate del mutuo è una situazione delicata, ma non senza via d'uscita. Se agisci prima che la banca avvii la procedura esecutiva, hai ancora margine per vendere l'immobile a prezzo di mercato, estinguere il mutuo e recuperare la differenza. Questa guida spiega come funziona il processo e quali sono i tempi.",
    sections: [
      {
        h2: "Le fasi della procedura di pignoramento",
        content: "Molti proprietari aspettano troppo prima di agire, pensando che la situazione si risolva da sola. In realtà il processo bancario segue tempi precisi:\n\nDopo 3 rate non pagate: la banca invia un sollecito formale.\nDopo 6-9 rate non pagate: la banca può dichiarare il mutuo decaduto e avviare il recupero.\nDopo la dichiarazione di decadenza: inizia l'iter legale per il pignoramento, che può richiedere 12-18 mesi.\n\nHai molto più tempo di quanto pensi, ma ogni mese che passa riduce le tue opzioni.",
      },
      {
        h2: "Perché vendere prima è sempre meglio",
        content: "Un immobile all'asta esecutiva si vende mediamente al 30-40% sotto il valore di mercato. Se l'immobile vale 200.000€, all'asta potrebbe aggiudicarsi per 120.000-140.000€. Se il mutuo residuo è 160.000€, il ricavato non basta a estinguerlo e resti comunque con un debito.\n\nVendendo prima sul mercato libero, ottieni il prezzo pieno, estingui il mutuo, e puoi anche recuperare la differenza come liquidità.",
      },
      {
        h2: "Cosa fare se il mutuo supera il valore dell'immobile",
        content: "In alcuni casi, soprattutto se il mutuo è stato acceso molti anni fa a prezzi alti, l'importo residuo del mutuo può essere superiore al valore attuale dell'immobile. In questo caso si parla di 'underwater mortgage' o 'negative equity'.\n\nEsistono soluzioni anche in questi casi: la dazione in pagamento (consegnare l'immobile alla banca in estinzione del debito), la ristrutturazione del debito, o in casi estremi la procedura di sovraindebitamento. È fondamentale agire in anticipo e con la consulenza di un professionista.",
      },
      {
        h2: "Come Diba gestisce queste situazioni",
        content: "Lavoriamo con discrezione totale. Il mercato non deve sapere del tuo stato di difficoltà perché abbasserebbe il potere contrattuale. L'annuncio è normale, la presentazione è professionale, e la vendita avviene nei tempi di mercato.\n\nCollegati con la banca per sospendere temporaneamente le rate (moratoria) durante la vendita è spesso possibile. Conosciamo i referenti di diversi istituti di credito locali e possiamo facilitare questa comunicazione.",
      },
      {
        h2: "Tempi e procedure: cosa aspettarsi",
        content: "Una volta deciso di vendere, il processo richiede:\n\nSettimana 1-2: valutazione, documentazione, servizio fotografico.\nSettimana 3-4: pubblicazione e prime visite.\nSettimana 5-8: offerta accettata, contratto preliminare.\nSettimana 9-12: rogito notarile e estinzione del mutuo.\n\nIn totale, da 2 a 3 mesi. Abbondantemente prima che una procedura esecutiva arrivi al pignoramento.",
      },
    ],
    faqs: [
      { q: "La banca può bloccare la vendita?", a: "No. L'immobile è tuo finché non c'è il pignoramento formale. Puoi venderlo liberamente. Al rogito, il notaio provvede all'estinzione del mutuo e alla cancellazione dell'ipoteca direttamente con il ricavato della vendita." },
      { q: "Devo comunicare alla banca che voglio vendere?", a: "Non è obbligatorio, ma può essere utile per concordare una sospensione temporanea delle rate durante la vendita. In alcuni casi la banca è disposta a collaborare perché preferisce un rimborso voluntario all'asta esecutiva." },
      { q: "Cosa succede se il rogito avviene dopo che la banca ha già avviato la procedura?", a: "È ancora possibile vendere fino al momento del pignoramento formale (che richiede anni). Anche dopo un precetto, hai ancora margine. L'importante è agire il prima possibile e farsi assistere da professionisti." },
    ],
    ctaTitle: "Sei in difficoltà con il mutuo?",
    ctaDesc: "Contattaci in modo riservato. Ti aiutiamo a valutare la situazione e a trovare la soluzione migliore prima che sia troppo tardi.",
  },
};
