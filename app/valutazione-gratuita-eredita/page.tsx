"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import Footer from "@/components/Footer";
import { articles } from "@/app/blog/[slug]/data";

export default function EreditaLandingPage() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const formCtaRef = useRef<HTMLButtonElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) { document.body.style.overflow = "hidden"; }
        else { document.body.style.overflow = ""; }
        return () => { document.body.style.overflow = ""; };
    }, [isModalOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                        setIsStickyVisible(true);
                    } else {
                        setIsStickyVisible(false);
                    }
                });
            },
            { threshold: 0 }
        );
        if (formCtaRef.current) observer.observe(formCtaRef.current);
        return () => { if (formCtaRef.current) observer.unobserve(formCtaRef.current); };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);
        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams(window.location.search);

        const payload = {
            nome: formData.get("name") as string,
            telefono: formData.get("phone") as string,
            email: (formData.get("email") as string) || "",
            address: formData.get("address") as string,
            note: (formData.get("note") as string) || "",
            page_target: "eredita",
            utm_source: params.get("utm_source") || undefined,
            utm_campaign: params.get("utm_campaign") || undefined,
        };

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                const json = await res.json();
                setErrorMsg(json.error || "Errore nell'invio. Riprova.");
            } else {
                setIsSuccess(true);
            }
        } catch {
            setErrorMsg("Errore di rete. Controlla la connessione.");
        } finally {
            setIsLoading(false);
        }
    };

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const checkSvg = (
        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    const successCard = (
        <div className="success-card">
            <div className="success-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h3>Richiesta Ricevuta!</h3>
            <p className="success-desc">
                Abbiamo ricevuto la tua richiesta. I nostri esperti stanno già analizzando i dati del tuo immobile.
            </p>
            <div className="success-steps">
                <h4>Cosa aspettarti:</h4>
                <ul>
                    <li><span className="step-check">✓</span><span><strong>Entro 2 ore:</strong> Assegnazione consulente dedicato.</span></li>
                    <li><span className="step-check">✓</span><span><strong>Entro 24 ore:</strong> Chiamata per i dettagli tecnici.</span></li>
                </ul>
            </div>
            <Link href="/chi-siamo" className="btn-outline">Scopri chi siamo</Link>
        </div>
    );

    return (
        <div className="landing-root">
            {/* HEADER */}
            <header>
                <div className="container header-content">
                    <div className="logo">
                        <img src="/assets/logo-diba.png" alt="Diba Servizi Immobiliari" className="logo-img" width="147" height="48" />
                    </div>
                </div>
            </header>

            {/* 1 · HERO + FORM */}
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-text">
                        <div className="hero-label">Consulenza Immobiliare</div>
                        <h1 dangerouslySetInnerHTML={{ __html: "Hai <span class=\"h1-kw\">ereditato</span> una casa a Reggio Emilia e non sai cosa fare?" }} />
                        <p className="subtitle" dangerouslySetInnerHTML={{ __html: "Valutiamo <strong>gratuitamente</strong> il tuo immobile ereditato e ti aiutiamo a scegliere la <strong>soluzione migliore</strong>, anche se siete più eredi." }} />
                    </div>

                    <div className="form-column">
                        <div className="hero-form-card" id="contact-form-container">
                            <div className="form-title">Scopri subito quanto vale</div>
                            {!isSuccess ? (
                                <form id="leadForm" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nome e Cognome</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Mario Rossi" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefono</label>
                                        <input type="tel" id="phone" name="phone" className="form-control" placeholder="333 1234567" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email (opzionale)</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="mario@esempio.it" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Indirizzo immobile (opzionale)</label>
                                        <AddressAutocomplete idPrefix="hero" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="intention">Cosa vorresti fare?</label>
                                        <select id="intention" name="intention" className="form-control">
                                            <option value="vendere">Vorrei vendere</option>
                                            <option value="valutare">Vorrei solo una valutazione</option>
                                            <option value="affittare">Vorrei affittare</option>
                                            <option value="non_so">Non lo so ancora</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn-cta" ref={formCtaRef} disabled={isLoading}>
                                        {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                                    </button>
                                    {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
                                    <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
                                </form>
                            ) : successCard}
                        </div>
                        <div className="google-trust-badge">
                            <div className="stars">★★★★★</div>
                            <span>4.9/5 su Google · 127 recensioni</span>
                        </div>
                    </div>

                    <div className="hero-benefits">
                        <ul className="benefits-list">
                            <li>{checkSvg}<span>Valutazione gratuita entro 24 ore, anche in comproprietà tra eredi</span></li>
                            <li>{checkSvg}<span>Calcoliamo quanto ti costa tenere la casa ogni anno (IMU + spese)</span></li>
                            <li>{checkSvg}<span>Gestiamo tutta la burocrazia successoria senza stress</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2 · PROBLEMI */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>I pensieri che non ti aspettavi</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>
                            Ereditare una casa porta con sé responsabilità che non sempre si vedono subito. Ecco cosa succede davvero.
                        </p>
                    </div>
                    <div className="problem-grid">
                        <div className="problem-card">
                            <span className="card-icon">💸</span>
                            <h3>I costi che non vedi ma che pesano</h3>
                            <p dangerouslySetInnerHTML={{ __html: "IMU, condominio, piccole manutenzioni... una casa ereditata, se resta ferma, può arrivare a costare anche <strong>3.000€ l'anno</strong>. E intanto resta lì, senza rendita e con più pensieri che soluzioni." }} />
                        </div>
                        <div className="problem-card">
                            <span className="card-icon">⚖️</span>
                            <h3>Quando siete più eredi, tutto si complica</h3>
                            <p dangerouslySetInnerHTML={{ __html: "Trovare un accordo non è semplice. Ognuno ha la sua idea, il suo ricordo, la sua opinione sul valore della casa. Per questo una <strong>valutazione fatta da un professionista</strong> aiuta tutti a vedere le cose con più chiarezza." }} />
                        </div>
                        <div className="problem-card">
                            <span className="card-icon">📋</span>
                            <h3>La burocrazia non aiuta</h3>
                            <p dangerouslySetInnerHTML={{ __html: "Successione, volture, aggiornamenti catastali… carte su carte. Noi ci occupiamo di tutto, dalla gestione dei documenti alla vendita, così <strong>tu puoi concentrarti sulle scelte importanti</strong>." }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 · COME FUNZIONA */}
            <section className="py-section" id="come-funziona">
                <div className="container">
                    <div className="section-header">
                        <h2>Come funziona</h2>
                    </div>
                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </div>
                            <h3>1. Compila il form</h3>
                            <p>Raccontaci la situazione dell&apos;immobile ereditato. Ci vuole meno di 2 minuti, disponibili anche in videochiamata.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h3>2. Valutiamo l&apos;immobile</h3>
                            <p>Gratuitamente ti diciamo quanto vale oggi e quanto ti costa tenerlo fermo.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h3>3. Ti consigliamo la soluzione migliore</h3>
                            <p>Vendere, affittare o aspettare: ti diciamo esattamente cosa conviene fare. <strong>Nessuna pressione, nessun costo anticipato.</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 · PROVA SOCIALE */}
            <section className="py-section bg-light social-proof-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Immobili venduti. Risultati veri.</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>
                            Questi sono i risultati reali delle compravendite gestite da Diba a Reggio Emilia.
                        </p>
                    </div>
                    <div className="social-proof-grid">
                        {[
                            { src: "/assets/Diba_servizi_immobiliari_vendita.webp", alt: "Appartamento venduto in 2 giorni a prezzo pieno, Reggio Emilia", caption: "Appartamento · 2 giorni, prezzo pieno", tag: "APPARTAMENTO" },
                            { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_22.webp", alt: "Appartamento venduto in 21 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 21 giorni", tag: "APPARTAMENTO" },
                            { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni.webp", alt: "Appartamento venduto in 33 giorni, Reggio Emilia", caption: "Appartamento · Venduto in 33 giorni", tag: "APPARTAMENTO" },
                            { src: "/assets/Diba_servizi_immobiliari_vendita_pochi_giorni_2.webp", alt: "Villa con giardino, 12 visite e 8 proposte, Reggio Emilia", caption: "Villa con giardino · 12 visite, 8 proposte", tag: "VILLA" },
                        ].map((item, i) => (
                            <div key={i} className="social-proof-card">
                                <span className="social-proof-tag">{item.tag}</span>
                                <div className="social-proof-img-wrapper">
                                    <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                                </div>
                                <p className="social-proof-caption">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5 · FORM DETTAGLIATO */}
            <section className="py-section mid-form-section">
                <div className="container">
                    <div className="mid-form-grid">
                        <div className="mid-form-left">
                            <p className="mid-form-tag">Parlaci di te</p>
                            <h2 className="mid-form-title">Raccontaci la situazione dell&apos;immobile ereditato</h2>
                            <p className="mid-form-sub">
                                Più dettagli ci fornisci, più accurata e utile sarà la nostra consulenza gratuita. Siamo pronti ad aiutarti anche in situazioni complesse tra più eredi.
                            </p>
                            <ul className="mid-form-guarantees">
                                <li><span className="pillar-check">✓</span>Risposta garantita entro 24 ore</li>
                                <li><span className="pillar-check">✓</span>Consulenza gratuita, nessun vincolo</li>
                                <li><span className="pillar-check">✓</span>Esperti del mercato di Reggio Emilia</li>
                            </ul>
                        </div>
                        <div className="mid-form-right">
                            <div className="hero-form-card">
                                <div className="form-title">Richiedi la tua valutazione</div>
                                {!isSuccess ? (
                                    <form id="midForm" onSubmit={handleSubmit}>
                                        <div className="detailed-form-row">
                                            <div className="form-group">
                                                <label htmlFor="mid-name">Nome e Cognome</label>
                                                <input type="text" id="mid-name" name="name" className="form-control" placeholder="Mario Rossi" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="mid-phone">Telefono</label>
                                                <input type="tel" id="mid-phone" name="phone" className="form-control" placeholder="333 1234567" required />
                                            </div>
                                        </div>
                                        <div className="detailed-form-row">
                                            <div className="form-group">
                                                <label htmlFor="mid-email">Email (opzionale)</label>
                                                <input type="email" id="mid-email" name="email" className="form-control" placeholder="mario@esempio.it" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="mid-address">Indirizzo immobile</label>
                                                <AddressAutocomplete idPrefix="mid" />
                                            </div>
                                        </div>
                                        <div className="detailed-form-row">
                                            <div className="form-group">
                                                <label htmlFor="mid-intention">Cosa vorresti fare?</label>
                                                <select id="mid-intention" name="intention" className="form-control">
                                                    <option value="vendere">Vorrei vendere</option>
                                                    <option value="valutare">Vorrei solo una valutazione</option>
                                                    <option value="affittare">Vorrei affittare</option>
                                                    <option value="non_so">Non lo so ancora</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="mid-urgency">Quando vorresti procedere?</label>
                                                <select id="mid-urgency" name="urgency" className="form-control">
                                                    <option value="subito">Il prima possibile</option>
                                                    <option value="3mesi">Entro 3 mesi</option>
                                                    <option value="6mesi">Entro 6 mesi</option>
                                                    <option value="no_fretta">Non ho fretta</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mid-note">Descrivi la tua situazione (opzionale)</label>
                                            <textarea
                                                id="mid-note"
                                                name="note"
                                                className="form-control"
                                                placeholder="Es: siamo tre fratelli, la casa è di 110mq in centro, non sappiamo se vendere o affittare..."
                                                rows={3}
                                                style={{ height: "auto", paddingTop: "12px", paddingBottom: "12px", resize: "vertical" }}
                                            />
                                        </div>
                                        <button type="submit" className="btn-cta" disabled={isLoading}>
                                            {isLoading ? "Invio in corso..." : "Invia Richiesta Dettagliata"}
                                        </button>
                                        {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
                                        <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
                                    </form>
                                ) : successCard}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 · TESTIMONIANZE E RECENSIONI */}
            <section className="py-section bg-light" id="recensioni">
                <div className="container">
                    <div className="section-header">
                        <h2>Cosa dicono di noi</h2>
                    </div>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>&ldquo;Ho ereditato un appartamento a Reggio con mia sorella. Non riuscivamo ad accordarci. La loro valutazione oggettiva ha convinto anche lei. Venduto in 3 mesi.&rdquo;</p>
                            <div className="review-author">— Gianni S., Bologna</div>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>&ldquo;Casa di mia madre ereditata da tre fratelli. Pensavamo fosse complicatissimo. Hanno gestito tutto loro, dalla successione al rogito. Professionisti.&rdquo;</p>
                            <div className="review-author">— Carla M., Reggio Emilia</div>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>&ldquo;Non sapevo che la casa costasse così tanto da tenere. Me l&apos;hanno mostrato con i numeri. Ho deciso di vendere e non me ne sono pentito.&rdquo;</p>
                            <div className="review-author">— Roberto A., Correggio</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7 · FAQ */}
            <section className="py-section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <h2>Domande Frequenti</h2>
                    </div>
                    <div className="faq-container">
                        {[
                            { q: "La valutazione è davvero gratuita?", a: "Sì, completamente. Veniamo a vedere l'immobile, o facciamo una valutazione online, senza alcun costo. Paghiamo noi solo se vendiamo la casa." },
                            { q: "Cosa succede se gli altri eredi non vogliono vendere?", a: "Possiamo fornire la valutazione a ciascun erede separatamente. Spesso, avere un dato oggettivo del mercato aiuta a raggiungere l'accordo. In casi estremi, esistono procedure legali per sciogliere la comproprietà." },
                            { q: "Quanto costa tenere una casa ereditata ogni anno?", a: "Dipende dall'immobile, ma in media tra IMU, spese condominiali e manutenzione ordinaria si spendono 1.500-3.000€ l'anno senza ricevere nulla in cambio. Te lo calcoliamo gratuitamente." },
                            { q: "Si può vendere la casa prima della successione?", a: "No, la dichiarazione di successione deve essere presentata (entro 12 mesi dal decesso) prima di poter rogitare. Tuttavia, possiamo iniziare subito le attività di marketing e trovare l'acquirente mentre la pratica burocratica è in corso." },
                            { q: "Cos'è l'accettazione tacita dell'eredità?", a: "È un atto obbligatorio per chi vende un immobile ereditato. Viene trascritto dal notaio al momento del rogito e serve per confermare ufficialmente la qualità di erede-venditore." },
                            { q: "Gestite voi i rapporti con il notaio per la successione?", a: "Certamente. Collaboriamo con i migliori studi notarili di Reggio Emilia per velocizzare le pratiche, recuperare i titoli di provenienza e assicurarci che tutta la documentazione sia pronta per la vendita." },
                            { q: "Posso vendere solo la mia quota di eredità?", a: "È tecnicamente possibile (diritto di prelazione permettendo), ma molto difficile trovare un acquirente privato per una quota. La soluzione migliore è quasi sempre la vendita dell'intero immobile con divisione del ricavato." },
                            { q: "Cosa succede se un erede vuole tenere la casa e gli altri vendere?", a: "È necessario fare una stima professionale super partes. L'erede che tiene la casa dovrà liquidare gli altri in base al valore di mercato attuale, che noi certifichiamo per evitare liti." },
                            { q: "Chi paga le tasse di successione e la voltura?", a: "Sono a carico degli eredi in proporzione alle quote. Possiamo mettervi in contatto con specialisti che calcolano l'F24 esatto e si occupano della presentazione telematica." },
                            { q: "È obbligatorio presentare la successione prima di mettere in vendita?", a: "Potete iniziare a cercare l'acquirente anche subito. Tuttavia, per firmare l'atto finale davanti al notaio, la successione deve essere stata presentata e le relative tasse pagate." },
                            { q: "Cosa sono i 'diritti di abitazione' per il coniuge superstite?", a: "Il coniuge ha il diritto di abitare la casa coniugale per tutta la vita. Questo influisce sulla vendita: se il coniuge vuole restare, si può vendere solo la nuda proprietà." },
                            { q: "Mi aiutate se ho ereditato un immobile abusivo?", a: "Sì. Verifichiamo se l'abuso è sanabile (sanatoria in estrema) e gestiamo la pratica tecnica. Se non è sanabile, ti diciamo onestamente come procedere per non rischiare legalmente." },
                            { q: "Come gestite la vendita se un erede è all'estero?", a: "Tutto può essere gestito tramite una procura speciale firmata presso un consolato o un notaio locale. Abbiamo esperienza in vendite con eredi residenti in tutto il mondo." },
                            { q: "Cosa succede se nell'eredità ci sono anche debiti del defunto?", a: "È una situazione delicata. Valutiamo se conviene l'accettazione con beneficio d'inventario per proteggere il vostro patrimonio personale dai debiti ereditari." },
                        ].map((item, idx) => (
                            <div key={idx} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === idx ? "active" : ""}`}
                                    onClick={() => toggleFaq(idx)}
                                >
                                    {item.q}
                                </button>
                                <div className="faq-answer" style={{ maxHeight: activeFaq === idx ? "1000px" : "0" }}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7.5 · ARTICOLI CORRELATI */}
            <section className="py-section bg-light" id="blog-correlati">
                <div className="container">
                    <div className="section-header">
                        <h2>Approfondimenti dal nostro Blog</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>Guide pratiche e consigli esperti per la tua situazione specifica.</p>
                    </div>
                    <div className="blog-grid" style={{ marginTop: "40px" }}>
                        {Object.entries(articles)
                            .filter(([, a]) => a.category === "Successioni")
                            .slice(0, 3)
                            .map(([slug, article]) => (
                                <Link key={slug} href={`/blog/${slug}`} className="blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                                    <img
                                        src={article.coverImage}
                                        alt={article.title}
                                        className="blog-card-img"
                                        loading="lazy"
                                    />
                                    <div className="blog-card-body">
                                        <div className="blog-card-meta">
                                            <span className="blog-card-category">{article.category}</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", lineHeight: "1.4" }}>{article.title}</h3>
                                        <p style={{ fontSize: "0.95rem", color: "var(--text-light)", marginBottom: "16px" }}>{article.metaDescription}</p>
                                        <span className="blog-read-link">Leggi l&apos;articolo →</span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <Link href="/blog" className="btn-outline" style={{ display: "inline-block", maxWidth: "240px" }}>
                            Vai al Blog Completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* 8 · CTA FINALE */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-grid">
                        <div className="final-cta-left">
                            <div className="final-cta-badge">Consulenza Gratuita</div>
                            <h2 className="final-cta-headline">Hai ereditato una casa? Scopri subito le tue opzioni</h2>
                            <p className="final-cta-sub">Compila il form e ti contatteremo entro 24 ore per una valutazione gratuita e senza impegno.</p>
                            <ul className="final-cta-pillars">
                                <li><span className="pillar-check">✓</span>Gratuito, senza impegno e senza sorprese</li>
                                <li><span className="pillar-check">✓</span>Risposta garantita entro 24 ore</li>
                                <li><span className="pillar-check">✓</span>Oltre 127 famiglie aiutate a Reggio Emilia</li>
                            </ul>
                            <div className="final-cta-rating">
                                <span className="final-cta-stars">★★★★★</span>
                                <span>4.9/5 su Google · 127 recensioni verificate</span>
                            </div>
                        </div>
                        <div className="final-cta-right">
                            <div className="hero-form-card">
                                <div className="form-title">Richiedi la valutazione</div>
                                {!isSuccess ? (
                                    <form id="bottomLeadForm" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="bottom-name">Nome e Cognome</label>
                                            <input type="text" id="bottom-name" name="name" className="form-control" placeholder="Mario Rossi" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="bottom-phone">Telefono</label>
                                            <input type="tel" id="bottom-phone" name="phone" className="form-control" placeholder="333 1234567" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="bottom-email">Email (opzionale)</label>
                                            <input type="email" id="bottom-email" name="email" className="form-control" placeholder="mario@esempio.it" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="bottom-address">Indirizzo immobile (opzionale)</label>
                                            <AddressAutocomplete idPrefix="bottom" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="bottom-intention">Cosa vorresti fare?</label>
                                            <select id="bottom-intention" name="intention" className="form-control">
                                                <option value="vendere">Vorrei vendere</option>
                                                <option value="valutare">Vorrei solo una valutazione</option>
                                                <option value="affittare">Vorrei affittare</option>
                                                <option value="non_so">Non lo so ancora</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn-cta" disabled={isLoading}>
                                            {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                                        </button>
                                        {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
                                        <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
                                    </form>
                                ) : successCard}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer isHome={true} />

            {/* STICKY MOBILE */}
            {isStickyVisible && (
                <div className="sticky-cta visible">
                    <button className="btn-sticky" onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        Richiedi Valutazione
                    </button>
                </div>
            )}

            {/* MODAL */}
            {isModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Chiudi">×</button>
                        <p className="mid-form-tag">Consulenza Gratuita</p>
                        <h2 className="modal-title">Raccontaci la tua situazione</h2>
                        <p className="modal-sub">Compila il form e ti ricontattiamo entro 24 ore per una valutazione gratuita e senza impegno.</p>
                        <div className="hero-form-card" style={{ boxShadow: "none", padding: 0 }}>
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="detailed-form-row">
                                        <div className="form-group">
                                            <label htmlFor="modal-name">Nome e Cognome</label>
                                            <input type="text" id="modal-name" name="name" className="form-control" placeholder="Mario Rossi" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modal-phone">Telefono</label>
                                            <input type="tel" id="modal-phone" name="phone" className="form-control" placeholder="333 1234567" required />
                                        </div>
                                    </div>
                                    <div className="detailed-form-row">
                                        <div className="form-group">
                                            <label htmlFor="modal-email">Email (opzionale)</label>
                                            <input type="email" id="modal-email" name="email" className="form-control" placeholder="mario@esempio.it" />
                                        </div>
                                        <div className="form-group">
                                            <label>Indirizzo immobile</label>
                                            <AddressAutocomplete idPrefix="modal" />
                                        </div>
                                    </div>
                                    <div className="detailed-form-row">
                                        <div className="form-group">
                                            <label htmlFor="modal-intention">Cosa vorresti fare?</label>
                                            <select id="modal-intention" name="intention" className="form-control">
                                                <option value="vendere">Vorrei vendere</option>
                                                <option value="valutare">Vorrei solo una valutazione</option>
                                                <option value="affittare">Vorrei affittare</option>
                                                <option value="non_so">Non lo so ancora</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modal-urgency">Quando vorresti procedere?</label>
                                            <select id="modal-urgency" name="urgency" className="form-control">
                                                <option value="subito">Il prima possibile</option>
                                                <option value="3mesi">Entro 3 mesi</option>
                                                <option value="6mesi">Entro 6 mesi</option>
                                                <option value="no_fretta">Non ho fretta</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="modal-note">Descrivi la tua situazione (opzionale)</label>
                                        <textarea
                                            id="modal-note"
                                            name="note"
                                            className="form-control"
                                            placeholder="Es: siamo tre fratelli, la casa è di 110mq in centro..."
                                            rows={3}
                                            style={{ height: "auto", paddingTop: "12px", paddingBottom: "12px", resize: "vertical" }}
                                        />
                                    </div>
                                    <button type="submit" className="btn-cta" disabled={isLoading}>
                                        {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                                    </button>
                                    {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
                                    <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
                                </form>
                            ) : successCard}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
