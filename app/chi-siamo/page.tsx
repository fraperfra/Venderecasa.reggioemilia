"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ChiSiamoPage() {
    return (
        <div className="landing-root">
            <Navbar />

            {/* HERO SECTION */}
            <section className="about-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '20px' }}>Eccellenza Immobiliare a Reggio Emilia</h1>
                    <p className="subtitle" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
                        Da oltre 15 anni, DIBA Servizi Immobiliari è il punto di riferimento per chi cerca professionalità, trasparenza e risultati concreti nel cuore dell'Emilia.
                    </p>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="py-section">
                <div className="container responsive-grid-2">
                    <div className="about-text">
                        <div className="hero-label" style={{ marginBottom: '20px' }}>La Nostra Storia</div>
                        <h2 style={{ marginBottom: '24px' }}>Radici Locali, Visione Professionale</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
                            DIBA nasce dal desiderio di portare un nuovo standard di servizio nel mercato immobiliare di Reggio Emilia. Non siamo solo agenti, ma consulenti strategici che accompagnano ogni cliente in una delle decisioni più importanti della vita.
                        </p>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Specializzati in compravendite complesse, successioni ereditarie e analisi di mercato, mettiamo a disposizione un team multidisciplinare per garantire che ogni operazione sia sicura, veloce e vantaggiosa.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team Diba"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }}
                        />
                    </div>
                </div>
            </section>

            {/* PILLARS SECTION */}
            <section className="py-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>I Nostri Valori Fondamentali</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Ciò che ci distingue e guida ogni nostra azione quotidiana.</p>
                    </div>
                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🤝</div>
                            <h3>Trasparenza Totale</h3>
                            <p>Ogni fase della trattativa è chiara e documentata. Niente sorprese, solo onestà intellettuale.</p>
                        </div>
                        <div className="problem-card">
                            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>⚡</div>
                            <h3>Efficienza Operativa</h3>
                            <p>Utilizziamo le migliori tecnologie e strategie di marketing per vendere il tuo immobile in tempi record.</p>
                        </div>
                        <div className="problem-card">
                            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📍</div>
                            <h3>Conoscenza del Territorio</h3>
                            <p>Siamo nati e cresciuti a Reggio Emilia. Conosciamo ogni quartiere e ogni dinamica di mercato locale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="py-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Il Nostro Team</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Professionisti esperti al tuo servizio.</p>
                    </div>
                    <div className="team-grid">
                        {[
                            {
                                name: "Daniele Barani",
                                role: "Fondatore & Senior Consultant",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                name: "Sara Valentini",
                                role: "Responsabile Successioni",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                name: "Marco Rossi",
                                role: "Analista di Mercato",
                                image: "https://images.unsplash.com/photo-1540565993045-303545f8221c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="sold-card" style={{ padding: '0', overflow: 'hidden' }}>
                                <img src={member.image} alt={member.name} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                                <div className="sold-info" style={{ padding: '20px', textAlign: 'center' }}>
                                    <h4 style={{ margin: '0' }}>{member.name}</h4>
                                    <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginTop: '5px' }}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT & OFFICE */}
            <section className="py-section bg-light" id="contatti-uﬃcio">
                <div className="container responsive-grid-2">
                    <div className="office-info">
                        <h2>Vieni a trovarci in sede</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '30px' }}>
                            Il nostro ufficio si trova nel cuore di Reggio Emilia, uno spazio accogliente dove discutere dei tuoi progetti immobiliari.
                        </p>
                        <div className="contact-details">
                            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <span style={{ fontSize: '1.5rem' }}>📍</span>
                                <div>
                                    <strong>Indirizzo</strong>
                                    <p>Via Vittorio Veneto, 3/D, 42121 Reggio Emilia (RE)</p>
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <span style={{ fontSize: '1.5rem' }}>📞</span>
                                <div>
                                    <strong>Telefono</strong>
                                    <p><a href="tel:3274911031" style={{ color: 'inherit', textDecoration: 'none' }}>327 491 1031</a></p>
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p><a href="mailto:info@dibaimmobiliare.it" style={{ color: 'inherit', textDecoration: 'none' }}>info@dibaimmobiliare.it</a></p>
                                </div>
                            </div>
                        </div>
                        <Link href="/#contact-form-container" className="btn-cta" style={{ marginTop: '20px', display: 'inline-block' }}>Contattaci Ora</Link>
                    </div>
                    <div className="map-placeholder" style={{ width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                        {/* Placeholder for a map or office photo */}
                        <img
                            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Ufficio Diba"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                            <span style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Sede di Reggio Emilia</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
