"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AddressAutocomplete from "./AddressAutocomplete";
import Footer from "./Footer";
import { articles } from "@/app/blog/[slug]/data";

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
    // Social proof (photos coming soon — add src when ready)
    socialProofTitle?: string;
    socialProofSubtitle?: string;
    socialProofItems?: { src?: string; alt?: string; caption: string; tag?: string }[];
    // Mid-page detailed form
    midFormTitle?: string;
    midFormSubtitle?: string;
    reviewsTitle: string;
    reviews: { text: string; author: string; stars: number }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
    footerDesc: string;
    utmCampaign: string;
    blogCategory?: string;
}

export default function LandingPageTemplate({ config }: { config: PageConfig }) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formCtaRef = useRef<HTMLButtonElement>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
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
            page_target: config.utmCampaign,
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

    const successCard = (
        <div className="success-card">
            <div className="success-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h3>Richiesta Ricevuta!</h3>
            <p className="success-desc">
                Ottimo, abbiamo iniziato a lavorare sulla tua pratica per <strong>{config.heroLabel}</strong>.
            </p>
            <div className="success-steps">
                <h4>Cosa aspettarti:</h4>
                <ul>
                    <li>
                        <span className="step-check">✓</span>
                        <span>Analisi dei prezzi di vendita recenti in zona.</span>
                    </li>
                    <li>
                        <span className="step-check">✓</span>
                        <span>Consulenza telefonica gratuita entro 24 ore.</span>
                    </li>
                </ul>
            </div>
            <Link href="/" className="btn-outline">Sito Principale</Link>
        </div>
    );

    // Hero form — essential fields only
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
                    <label htmlFor={`${idPrefix}-address`}>Indirizzo immobile (opzionale)</label>
                    <AddressAutocomplete idPrefix={idPrefix} />
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
        ) : successCard
    );

    // Mid-page detailed form — adds urgency + free-text note
    const renderDetailedForm = (idPrefix: string) => (
        !isSuccess ? (
            <form id={`${idPrefix}Form`} onSubmit={handleSubmit}>
                <div className="detailed-form-row">
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-name`}>Nome e Cognome</label>
                        <input type="text" id={`${idPrefix}-name`} name="name" className="form-control" placeholder="Mario Rossi" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-phone`}>Telefono</label>
                        <input type="tel" id={`${idPrefix}-phone`} name="phone" className="form-control" placeholder="333 1234567" required />
                    </div>
                </div>
                <div className="detailed-form-row">
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-email`}>Email (opzionale)</label>
                        <input type="email" id={`${idPrefix}-email`} name="email" className="form-control" placeholder="mario@esempio.it" />
                    </div>
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-address`}>Indirizzo immobile</label>
                        <AddressAutocomplete idPrefix={idPrefix} />
                    </div>
                </div>
                <div className="detailed-form-row">
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-intention`}>{config.selectLabel}</label>
                        <select id={`${idPrefix}-intention`} name="intention" className="form-control">
                            {config.selectOptions.map((o) => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor={`${idPrefix}-urgency`}>Quando vorresti procedere?</label>
                        <select id={`${idPrefix}-urgency`} name="urgency" className="form-control">
                            <option value="subito">Il prima possibile</option>
                            <option value="3mesi">Entro 3 mesi</option>
                            <option value="6mesi">Entro 6 mesi</option>
                            <option value="no_fretta">Non ho fretta</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor={`${idPrefix}-note`}>Descrivi la tua situazione (opzionale)</label>
                    <textarea
                        id={`${idPrefix}-note`}
                        name="note"
                        className="form-control"
                        placeholder="Es: ho un appartamento di 90mq, voglio capire quanto vale e se è il momento giusto per vendere..."
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
        ) : successCard
    );

    const checkSvg = (
        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["LocalBusiness", "RealEstateAgent"],
                "name": "Diba Servizi Immobiliari",
                "description": config.subtitle,
                "url": "https://venderecasa.reggioemilia.it",
                "telephone": "+39 327 491 1031",
                "email": "segreteria@immobiliarediba.it",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Vittorio Veneto, 3/D",
                    "addressLocality": "Reggio Emilia",
                    "postalCode": "42121",
                    "addressCountry": "IT",
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 44.6989, "longitude": 10.6297 },
                "openingHours": ["Mo-Fr 09:00-19:00"],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
                "areaServed": { "@type": "City", "name": "Reggio Emilia" },
                "priceRange": "€€",
            },
            {
                "@type": "FAQPage",
                "mainEntity": config.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    // Social proof placeholder items (used when images not yet available)
    const spItems: { src?: string; alt?: string; caption: string; tag?: string }[] =
        config.socialProofItems && config.socialProofItems.length > 0
            ? config.socialProofItems
            : Array(4).fill(null).map(() => ({ caption: "Reggio Emilia", tag: "IN ARRIVO" }));

    return (
        <div className="landing-root">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HEADER */}
            <header>
                <div className="container header-content">
                    <div className="logo">
                        <img src="/assets/logo.png" alt="Diba Servizi Immobiliari" className="logo-img" width="200" height="65" />
                    </div>
                </div>
            </header>

            {/* 1 · HERO + FORM */}
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-text">
                        <div className="hero-label">{config.heroLabel}</div>
                        <h1 dangerouslySetInnerHTML={{ __html: config.h1 }} />
                        <p className="subtitle" dangerouslySetInnerHTML={{ __html: config.subtitle }} />
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

            {/* 2 · PROBLEMI */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.problemTitle}</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: config.problemSubtitle }} />
                    </div>
                    <div className="problem-grid">
                        {config.problems.map((p, i) => (
                            <div key={i} className="problem-card">
                                <span className="card-icon">{p.icon}</span>
                                <h3>{p.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: p.desc }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 · COME FUNZIONA */}
            <section className="py-section" id="come-funziona">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.stepsTitle}</h2>
                    </div>
                    <div className="steps-container">
                        {config.steps.map((s, i) => (
                            <div key={i} className="step-item">
                                <div className="step-icon-circle">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 · PROVA SOCIALE */}
            <section className="py-section bg-light social-proof-section">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.socialProofTitle ?? "I nostri risultati a Reggio Emilia"}</h2>
                        {config.socialProofSubtitle && (
                            <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>{config.socialProofSubtitle}</p>
                        )}
                    </div>
                    <div className="social-proof-grid">
                        {spItems.map((item, i) => (
                            <div key={i} className="social-proof-card">
                                {item.tag && <span className="social-proof-tag">{item.tag}</span>}
                                <div className="social-proof-img-wrapper">
                                    {item.src
                                        ? <img src={item.src} alt={item.alt ?? item.caption} width="400" height="300" loading="lazy" />
                                        : <div className="social-proof-placeholder">📷</div>
                                    }
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
                            <h2 className="mid-form-title">
                                {config.midFormTitle ?? config.ctaTitle}
                            </h2>
                            <p className="mid-form-sub">
                                {config.midFormSubtitle ?? config.ctaSubtitle}
                            </p>
                            <ul className="mid-form-guarantees">
                                <li><span className="pillar-check">✓</span>Risposta garantita entro 24 ore</li>
                                <li><span className="pillar-check">✓</span>Consulenza gratuita, nessun vincolo</li>
                                <li><span className="pillar-check">✓</span>Esperti del mercato di Reggio Emilia</li>
                            </ul>
                        </div>
                        <div className="mid-form-right">
                            <div className="hero-form-card">
                                <div className="form-title">{config.formTitle}</div>
                                {renderDetailedForm("mid")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 · TESTIMONIANZE E RECENSIONI */}
            <section className="py-section bg-light" id="recensioni">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.reviewsTitle}</h2>
                    </div>
                    <div className="reviews-grid">
                        {config.reviews.map((r, i) => (
                            <div key={i} className="review-card">
                                <div className="stars">{"★".repeat(r.stars)}</div>
                                <p dangerouslySetInnerHTML={{ __html: `&ldquo;${r.text}&rdquo;` }} />
                                <p className="review-author">— {r.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7 · FAQ */}
            <section className="py-section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <h2>{config.faqTitle}</h2>
                    </div>
                    <div className="faq-container">
                        {config.faqs.map((faq, i) => (
                            <div key={i} className={`faq-item${activeFaq === i ? " active" : ""}`}>
                                <button
                                    className={`faq-question${activeFaq === i ? " active" : ""}`}
                                    onClick={() => toggleFaq(i)}
                                    aria-expanded={activeFaq === i}
                                >
                                    {faq.q}
                                </button>
                                <div
                                    className="faq-answer"
                                    style={{ maxHeight: activeFaq === i ? "800px" : "0" }}
                                >
                                    <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7.5 · ARTICOLI CORRELATI */}
            {config.blogCategory && (
                <section className="py-section bg-light" id="blog-correlati">
                    <div className="container">
                        <div className="section-header">
                            <h2>Approfondimenti dal nostro Blog</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>Guide pratiche e consigli esperti per la tua situazione specifica.</p>
                        </div>
                        <div className="blog-grid" style={{ marginTop: "40px" }}>
                            {Object.entries(articles)
                                .filter(([, a]) => a.category === config.blogCategory)
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
            )}

            {/* 8 · CTA FINALE */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-grid">
                        <div className="final-cta-left">
                            <div className="final-cta-badge">Consulenza Gratuita</div>
                            <h2 className="final-cta-headline">{config.ctaTitle}</h2>
                            <p className="final-cta-sub">{config.ctaSubtitle}</p>
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
                                <div className="form-title">{config.formTitle}</div>
                                {renderForm("bottom")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer description={config.footerDesc} />

            {/* STICKY MOBILE CTA */}
            {isStickyVisible && (
                <div className="sticky-cta visible">
                    <button className="btn-sticky" onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Richiedi Valutazione
                    </button>
                </div>
            )}

            {/* MODAL FORM */}
            {isModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Chiudi">×</button>
                        <p className="mid-form-tag" style={{ marginBottom: 4 }}>Consulenza Gratuita</p>
                        <h2 className="modal-title">Raccontaci la tua situazione</h2>
                        <p className="modal-sub">Compila il form e ti ricontattiamo entro 24 ore con una valutazione personalizzata.</p>
                        <div className="hero-form-card" style={{ boxShadow: "none", padding: 0 }}>
                            {renderDetailedForm("modal")}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
