"use client";

import React from 'react';

export default function ChiSiamoPage() {
    return (
        <div className="container py-section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1>Chi Siamo</h1>
            <p className="subtitle">Diba Servizi Immobiliari: Professionalità e Trasparenza a Reggio Emilia.</p>

            <div style={{ maxWidth: '800px', marginTop: '40px', textAlign: 'left', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                <p>
                    Siamo una realtà consolidata nel panorama immobiliare di Reggio Emilia, specializzata nella gestione di compravendite complesse, successioni ereditarie e consulenza strategica.
                </p>
                <p style={{ marginTop: '20px' }}>
                    Il nostro obiettivo è fornire un servizio d'eccellenza, mettendo al primo posto l'ascolto del cliente e la valorizzazione del suo patrimonio.
                </p>
            </div>

            <a href="/" className="btn-cta" style={{ marginTop: '40px', textDecoration: 'none' }}>
                Torna alla Homepage
            </a>
        </div>
    );
}
