"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import Footer from "@/components/Footer";

export default function LandingPage() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const formCtaRef = useRef<HTMLButtonElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

        if (formCtaRef.current) {
            observer.observe(formCtaRef.current);
        }

        return () => {
            if (formCtaRef.current) {
                observer.unobserve(formCtaRef.current);
            }
        };
    }, []);

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);
        const formData = new FormData(e.currentTarget);

        // Capture UTM parameters from URL
        const params = new URLSearchParams(window.location.search);

        const payload = {
            nome: formData.get("name") as string,
            telefono: formData.get("phone") as string,
            email: (formData.get("email") as string) || "",
            address: formData.get("address") as string,
            page_target: "eredita",                              // fixed page identifier
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

    return (
        <div className="landing-root">
            {/* HEADER */}
            <header>
                <div className="container header-content">
                    <div className="logo">
                        <img src="/assets/logo.png" alt="Diba Servizi Immobiliari" className="logo-img" width="200" height="65" />
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-text">
                        <div className="hero-label">Consulenza Immobiliare</div>
                        <h1>Hai ereditato una casa a Reggio Emilia e non sai cosa fare?</h1>
                        <p className="subtitle">
                            Valutiamo gratuitamente il tuo immobile ereditato e ti aiutiamo a
                            scegliere la soluzione migliore, anche se siete più eredi.
                        </p>
                    </div>

                    <div className="form-column">
                        <div className="hero-form-card" id="contact-form-container">
                            <div className="form-title">Scopri subito quanto vale</div>
                            {!isSuccess ? (
                                <form id="leadForm" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nome e Cognome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Mario Rossi"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefono</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="333 1234567"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email (opzionale)</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="mario@esempio.it"
                                        />
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
                                    <button
                                        type="submit"
                                        className="btn-cta"
                                        ref={formCtaRef}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                                    </button>
                                    {errorMsg && (
                                        <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>
                                            {errorMsg}
                                        </p>
                                    )}
                                    <p className="privacy-text">
                                        I tuoi dati sono al sicuro. Non li condividiamo con terzi.
                                    </p>
                                </form>
                            ) : (
                                <div id="successMessage" className="success-card">
                                    <div className="success-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3>Richiesta Inviata!</h3>
                                    <p className="success-desc">
                                        Grazie per la fiducia. I nostri esperti stanno già analizzando i dati della tua zona a Reggio Emilia.
                                    </p>
                                    <div className="success-steps">
                                        <h4>Cosa succederà ora:</h4>
                                        <ul>
                                            <li>
                                                <span className="step-check">✓</span>
                                                <span><strong>Entro 2 ore:</strong> Assegnazione consulente dedicato.</span>
                                            </li>
                                            <li>
                                                <span className="step-check">✓</span>
                                                <span><strong>Entro 24 ore:</strong> Chiamata per i dettagli tecnici.</span>
                                            </li>
                                            <li>
                                                <span className="step-check">✓</span>
                                                <span><strong>Report finale:</strong> Consegna della valutazione documentata.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/chi-siamo" className="btn-outline">Scopri chi siamo</Link>
                                </div>
                            )}
                        </div>

                        <div className="google-trust-badge">
                            <div className="stars">★★★★★</div>
                            <span>4.9/5 su Google - 127 recensioni</span>
                        </div>
                    </div>

                    <div className="hero-benefits">
                        <ul className="benefits-list">
                            <li>
                                <svg
                                    className="check-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>
                                    Valutazione gratuita entro 24 ore, anche in comproprietà tra
                                    eredi
                                </span>
                            </li>
                            <li>
                                <svg
                                    className="check-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>
                                    Calcoliamo quanto ti costa tenere la casa ogni anno (IMU +
                                    spese)
                                </span>
                            </li>
                            <li>
                                <svg
                                    className="check-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Gestiamo tutta la burocrazia successoria senza stress</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>I pensieri che non ti aspettavi</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                            Ereditare una casa porta con sé responsabilità che non sempre si vedono subito. Ecco cosa succede davvero.
                        </p>
                    </div>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <span className="card-icon">💸</span>
                            <h3>I costi che non vedi ma che pesano</h3>
                            <p>
                                IMU, condominio, piccole manutenzioni... una casa ereditata, se resta ferma, può arrivare a costare anche 3.000€ l&apos;anno. E intanto resta lì, senza rendita e con più pensieri che soluzioni.
                            </p>
                        </div>
                        <div className="problem-card">
                            <span className="card-icon">⚖️</span>
                            <h3>Quando siete più eredi, tutto si complica</h3>
                            <p>
                                Trovare un accordo non è semplice. Ognuno ha la sua idea, il suo ricordo, la sua opinione sul valore della casa. Una valutazione fatta da un professionista aiuta tutti a vedere le cose con più chiarezza.
                            </p>
                        </div>
                        <div className="problem-card">
                            <span className="card-icon">📋</span>
                            <h3>La burocrazia non aiuta</h3>
                            <p>
                                Successione, volture, aggiornamenti catastali… carte su carte. Noi ci occupiamo di tutto, dalla gestione dei documenti alla vendita, così tu puoi concentrarti sulle scelte importanti.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLD PROPERTIES SECTION */}
            <section className="py-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Successi Recenti a Reggio Emilia</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                            Alcuni degli immobili ereditati che abbiamo aiutato a vendere in tempi record.
                        </p>
                    </div>

                    <div className="sold-grid">
                        {[
                            {
                                title: "Appartamento Centro Storico",
                                type: "Appartamento",
                                soldIn: "12 giorni",
                                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Villa Indipendente",
                                type: "Villa",
                                soldIn: "45 giorni",
                                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Rustico da Ristrutturare",
                                type: "Rustico",
                                soldIn: "28 giorni",
                                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Attico Vista Parco",
                                type: "Attico",
                                soldIn: "7 giorni",
                                image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="sold-card">
                                <div className="sold-badge">VENDUTO IN {item.soldIn.toUpperCase()}</div>
                                <div className="sold-image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width="800"
                                        height="600"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="sold-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.type} • Reggio Emilia</p>
                                    <span className="status-badge">Affare concluso</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-section" id="come-funziona">
                <div className="container">
                    <div className="section-header">
                        <h2>Come funziona</h2>
                    </div>

                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <h3>1. Ci contatti</h3>
                            <p>
                                Compila il modulo o chiamaci. Disponibili anche in videochiamata
                                se sei lontano.
                            </p>
                        </div>
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h3>2. Valutiamo l&apos;immobile</h3>
                            <p>
                                Gratuitamente ti diciamo quanto vale oggi e quanto ti costa
                                tenerlo fermo.
                            </p>
                        </div>
                        <div className="step-item">
                            <div className="step-icon-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h3>3. Scegli tu</h3>
                            <p>
                                Vendere, affittare o aspettare. Nessuna pressione, nessun costo
                                anticipato.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVIEWS */}
            <section className="py-section bg-light" id="recensioni">
                <div className="container">
                    <div className="section-header">
                        <h2>Cosa dicono di noi</h2>
                    </div>

                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                &quot;Ho ereditato un appartamento a Reggio con mia sorella. Non
                                riuscivamo ad accordarci. La loro valutazione oggettiva ha
                                convinto anche lei. Venduto in 3 mesi.&quot;
                            </p>
                            <div className="review-author">— Gianni S., Bologna</div>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                &quot;Casa di mia madre ereditata da tre fratelli. Pensavamo
                                fosse complicatissimo. Hanno gestito tutto loro, dalla
                                successione al rogito. Professionisti.&quot;
                            </p>
                            <div className="review-author">— Carla M., Reggio Emilia</div>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>
                                &quot;Non sapevo che la casa costasse così tanto da tenere. Me
                                l&apos;hanno mostrato con i numeri. Ho deciso di vendere e non
                                me ne sono pentito.&quot;
                            </p>
                            <div className="review-author">— Roberto A., Correggio</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <h2>Domande Frequenti</h2>
                    </div>

                    <div className="faq-container">
                        {[
                            {
                                q: "La valutazione è davvero gratuita?",
                                a: "Sì, completamente. Veniamo a vedere l'immobile, o facciamo una valutazione online, senza alcun costo. Paghiamo noi solo se vendiamo la casa.",
                            },
                            {
                                q: "Cosa succede se gli altri eredi non vogliono vendere?",
                                a: "Possiamo fornire la valutazione a ciascun erede separatamente. Spesso, avere un dato oggettivo del mercato aiuta a raggiungere l'accordo. In casi estremi, esistono procedure legali per sciogliere la comproprietà.",
                            },
                            {
                                q: "Quanto costa tenere una casa ereditata ogni anno?",
                                a: "Dipende dall'immobile, ma in media tra IMU, spese condominiali e manutenzione ordinaria si spendono 1.500-3.000€ l'anno senza ricevere nulla in cambio. Te lo calcoliamo gratuitamente.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === idx ? "active" : ""}`}
                                    onClick={() => toggleFaq(idx)}
                                >
                                    {item.q}
                                </button>
                                <div
                                    className="faq-answer"
                                    style={{
                                        maxHeight: activeFaq === idx ? "1000px" : "0",
                                    }}
                                >
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA FORM */}
            <section className="py-section bg-cta-section" id="bottom-form">
                <div className="container">
                    <div className="section-header">
                        <h2>Siamo pronti ad aiutarti</h2>
                        <p style={{ opacity: 0.9, fontSize: "1.1rem" }}>
                            Lascia i tuoi dati per una consulenza senza impegno sulla tua casa ereditata.
                        </p>
                    </div>

                    <div className="bottom-form-wrapper">
                        <div className="hero-form-card">
                            <div className="form-title">Richiedi la tua valutazione</div>
                            {!isSuccess ? (
                                <form id="bottomLeadForm" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="bottom-name">Nome e Cognome</label>
                                        <input
                                            type="text"
                                            id="bottom-name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Mario Rossi"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bottom-phone">Telefono</label>
                                        <input
                                            type="tel"
                                            id="bottom-phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="333 1234567"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bottom-email">Email (opzionale)</label>
                                        <input
                                            type="email"
                                            id="bottom-email"
                                            name="email"
                                            className="form-control"
                                            placeholder="mario@esempio.it"
                                        />
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
                                    <button
                                        type="submit"
                                        className="btn-cta"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                                    </button>
                                    {errorMsg && (
                                        <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>
                                            {errorMsg}
                                        </p>
                                    )}
                                    <p className="privacy-text">
                                        I tuoi dati sono al sicuro. Non li condividiamo con terzi.
                                    </p>
                                </form>
                            ) : (
                                <div className="success-card">
                                    <div className="success-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3>Quasi Fatto!</h3>
                                    <p className="success-desc">
                                        Abbiamo preso in carico la tua richiesta. Sei a un passo dalla tua valutazione professionale.
                                    </p>
                                    <div className="success-steps" style={{ background: 'white' }}>
                                        <h4>I tuoi prossimi passi:</h4>
                                        <ul>
                                            <li>
                                                <span className="step-check">✓</span>
                                                <span>Riceverai una chiamata dal numero 327 491 1031.</span>
                                            </li>
                                            <li>
                                                <span className="step-check">✓</span>
                                                <span>Prepareremo un'analisi comparativa di mercato.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="privacy-text">DIBA Immobiliare · Reggio Emilia</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer isHome={true} />

            {/* STICKY MOBILE */}
            <div className={`sticky-mobile ${isStickyVisible ? "visible" : ""}`}>
                <a href="tel:3274911031" className="btn-sticky">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Chiamaci
                </a>
            </div>
        </div>
    );
}
