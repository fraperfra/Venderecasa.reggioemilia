"use client";

import { useState, useEffect, useRef } from "react";

export interface PageConfig {
    heroLabel: string;
    h1: string;
    subtitle: string;
    benefits: string[];
    formTitle: string;
    selectLabel: string;
    selectOptions: { value: string; label: string }[];
    problemTitle: string;
    problemSubtitle: string;
    problems: { icon: string; title: string; desc: string }[];
    stepsTitle: string;
    steps: { icon: string; title: string; desc: string }[];
    reviewsTitle: string;
    reviews: { text: string; author: string; stars: number }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
    footerDesc: string;
    utmCampaign: string;
}

export default function LandingPageTemplate({ config }: { config: PageConfig }) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const formCtaRef = useRef<HTMLButtonElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
            utm_source: params.get("utm_source") || undefined,
            utm_campaign: params.get("utm_campaign") || config.utmCampaign,
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

    const renderForm = (idPrefix: string, ref?: React.RefObject<HTMLButtonElement | null>) => (
        !isSuccess ? (
            <form id={`${idPrefix}Form`} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor={`${idPrefix}-name`}>Nome e Cognome</label>
                    <input type="text" id={`${idPrefix}-name`} name="name" className="form-control" placeholder="Mario Rossi" required />
                </div>
                <div className="form-group">
                    <label htmlFor={`${idPrefix}-phone`}>Telefono</label>
                    <input type="tel" id={`${idPrefix}-phone`} name="phone" className="form-control" placeholder="333 1234567" required />
                </div>
                <div className="form-group">
                    <label htmlFor={`${idPrefix}-email`}>Email (opzionale)</label>
                    <input type="email" id={`${idPrefix}-email`} name="email" className="form-control" placeholder="mario@esempio.it" />
                </div>
                <div className="form-group">
                    <label htmlFor={`${idPrefix}-intention`}>{config.selectLabel}</label>
                    <select id={`${idPrefix}-intention`} name="intention" className="form-control">
                        {config.selectOptions.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn-cta" ref={ref || undefined} disabled={isLoading}>
                    {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                </button>
                {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
                <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
            </form>
        ) : (
            <div className="success-message">
                <h3>Grazie!</h3>
                <p>Abbiamo ricevuto la tua richiesta. Ti contatteremo entro 24 ore.</p>
            </div>
        )
    );

    const checkSvg = (
        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

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
                        <div className="hero-label">{config.heroLabel}</div>
                        <h1>{config.h1}</h1>
                        <p className="subtitle">{config.subtitle}</p>
                    </div>

                    <div className="form-column">
                        <div className="hero-form-card" id="contact-form-container">
                            <div className="form-title">{config.formTitle}</div>
                            {renderForm("hero", formCtaRef)}
                        </div>
                        <div className="google-trust-badge">
                            <div className="stars">★★★★★</div>
                            <span>4.9/5 su Google · 127 recensioni</span>
                        </div>
                    </div>

                    <div className="hero-benefits">
                        <ul className="benefits-list">
                            {config.benefits.map((b, i) => (
                                <li key={i}>{checkSvg}<span>{b}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.problemTitle}</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>{config.problemSubtitle}</p>
                    </div>
                    <div className="problem-grid">
                        {config.problems.map((p, i) => (
                            <div key={i} className="problem-card">
                                <span className="card-icon">{p.icon}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-section">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.stepsTitle}</h2>
                    </div>
                    <div className="steps-container">
                        {config.steps.map((s, i) => (
                            <div key={i} className="step-item">
                                <div className="step-icon-circle">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REVIEWS */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.reviewsTitle}</h2>
                    </div>
                    <div className="reviews-grid">
                        {config.reviews.map((r, i) => (
                            <div key={i} className="review-card">
                                <div className="stars">{"★".repeat(r.stars)}</div>
                                <p>&ldquo;{r.text}&rdquo;</p>
                                <p className="review-author">— {r.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-section">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.faqTitle}</h2>
                    </div>
                    <div className="faq-container">
                        {config.faqs.map((faq, i) => (
                            <div key={i} className={`faq-item${activeFaq === i ? " active" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFaq(i)} aria-expanded={activeFaq === i}>
                                    {faq.q}
                                </button>
                                {activeFaq === i && <div className="faq-answer"><p>{faq.a}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA FORM */}
            <section className="py-section cta-bottom-section">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.ctaTitle}</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>{config.ctaSubtitle}</p>
                    </div>
                    <div className="cta-bottom-wrapper">
                        <div className="hero-form-card">
                            <div className="form-title">{config.formTitle}</div>
                            {renderForm("bottom")}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="logo" style={{ marginBottom: "20px" }}>
                                <img src="/assets/logo.png" alt="Diba Servizi Immobiliari" className="logo-img" style={{ height: "40px" }} width="130" height="40" />
                            </div>
                            <p>{config.footerDesc}</p>
                        </div>
                        <div className="footer-col">
                            <h4>Contatti</h4>
                            <ul>
                                <li><a href="tel:3274911031">📞 327 491 1031</a></li>
                                <li><a href="mailto:info@dibaimmobiliare.it">✉️ info@dibaimmobiliare.it</a></li>
                                <li>📍 Via Vittorio Veneto, 3/D – Reggio Emilia</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Orari</h4>
                            <ul>
                                <li>Lun – Ven: 9:00 – 19:00</li>
                                <li>Sab: su appuntamento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Diba Servizi Immobiliari · P.IVA 00000000000 · <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </footer>

            {/* STICKY MOBILE CTA */}
            {isStickyVisible && (
                <div className="sticky-cta">
                    <a href="#contact-form-container" className="btn-cta" style={{ textDecoration: "none", display: "block", textAlign: "center" }}>
                        Valutazione Gratuita →
                    </a>
                </div>
            )}
        </div>
    );
}
