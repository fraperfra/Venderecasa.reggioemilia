"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContattiPage() {
    return (
        <div className="landing-root">
            <Navbar />

            {/* HERO SECTION */}
            <section className="about-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '20px' }}>Contattaci</h1>
                    <p className="subtitle" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
                        Siamo a tua completa disposizione per una consulenza personalizzata sulla tua casa a Reggio Emilia. Scegli la modalità che preferisci.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="py-section">
                <div className="container">
                    <div className="problem-grid">
                        {/* PHONE CARD */}
                        <div className="problem-card" style={{ padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>📞</div>
                            <h3 style={{ marginBottom: '15px' }}>Chiamaci Subito</h3>
                            <p style={{ marginBottom: '25px', color: 'var(--text-light)' }}>Disponibili per urgenze e consulenze telefoniche immediate.</p>
                            <a href="tel:3274911031" className="btn-cta" style={{ width: '100%', textDecoration: 'none' }}>
                                327 491 1031
                            </a>
                        </div>

                        {/* EMAIL CARD */}
                        <div className="problem-card" style={{ padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>✉️</div>
                            <h3 style={{ marginBottom: '15px' }}>Inviaci un'Email</h3>
                            <p style={{ marginBottom: '25px', color: 'var(--text-light)' }}>Per richieste dettagliate o invio di documentazione tecnica.</p>
                            <a href="mailto:info@dibaimmobiliare.it" className="btn-outline" style={{ width: '100%', textDecoration: 'none', border: '2px solid var(--primary)', color: 'var(--primary)', padding: '12px', borderRadius: '8px', fontWeight: 'bold' }}>
                                info@dibaimmobiliare.it
                            </a>
                        </div>

                        {/* OFFICE CARD */}
                        <div className="problem-card" style={{ padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>📍</div>
                            <h3 style={{ marginBottom: '15px' }}>Vieni in Ufficio</h3>
                            <p style={{ marginBottom: '25px', color: 'var(--text-light)' }}>Riceviamo su appuntamento nella nostra sede centrale.</p>
                            <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Via Vittorio Veneto, 3/D, Reggio Emilia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFICE SECTION WITH MAP */}
            <section className="py-section bg-light">
                <div className="container responsive-grid-2">
                    <div className="office-text">
                        <div className="hero-label" style={{ marginBottom: '20px' }}>La Nostra Sede</div>
                        <h2 style={{ marginBottom: '24px' }}>Un punto di incontro nel cuore della città</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
                            Il nostro ufficio è progettato per offrirti la massima discrezione e professionalità durante i nostri incontri. Siamo nel centro di Reggio Emilia, facilmente raggiungibili e con ampie possibilità di parcheggio nelle vicinanze.
                        </p>

                        <div className="hours-box" style={{ background: 'white', padding: '24px 20px', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                            <h4 style={{ marginBottom: '15px' }}>Orari di Apertura</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                                    <span>Lunedì – Venerdì</span>
                                    <strong>09:00 – 19:00</strong>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                    <span>Sabato</span>
                                    <strong>Su appuntamento</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="map-wrapper-responsive">
                        <img
                            src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Ufficio Reggio Emilia"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <h5 style={{ margin: '0 0 5px 0' }}>DIBA Servizi Immobiliari</h5>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-light)' }}>Via Vittorio Veneto, 3/D, 42121 Reggio Emilia (RE)</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Via+Vittorio+Veneto+3D+Reggio+Emilia" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>Apri in Google Maps →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="final-cta-section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Vuoi una valutazione gratuita?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px auto' }}>
                        Non aspettare che i costi della tua casa ereditata si accumulino. Ottieni oggi stesso un report professionale sul valore del tuo immobile.
                    </p>
                    <Link href="/valutazione-gratuita-eredita#contact-form-container" className="btn-cta" style={{ display: 'inline-block', background: 'white', color: 'var(--primary)' }}>
                        Inizia la Valutazione
                    </Link>
                </div>
            </section>

            <Footer isHome={false} />
        </div>
    );
}
