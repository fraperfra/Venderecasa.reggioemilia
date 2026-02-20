"use client";

import React from 'react';

export default function ContattiPage() {
    return (
        <div className="container py-section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1>Contattaci Ora</h1>
            <p className="subtitle">Siamo pronti ad ascoltare le tue esigenze immobiliari a Reggio Emilia.</p>

            <div className="contact-details" style={{ marginTop: '40px', fontSize: '1.2rem', lineHeight: '2' }}>
                <p>📞 <a href="tel:3274911031">327 491 1031</a></p>
                <p>✉️ <a href="mailto:info@dibaimmobiliare.it">info@dibaimmobiliare.it</a></p>
                <p>📍 Via Vittorio Veneto, 3/D – 42121 Reggio Emilia (RE)</p>
            </div>

            <a href="/" className="btn-cta" style={{ marginTop: '40px', textDecoration: 'none' }}>
                Torna alla Homepage
            </a>
        </div>
    );
}
