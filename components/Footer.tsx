"use client";

import React from 'react';
import Link from 'next/link';

interface FooterProps {
    description?: string;
    isHome?: boolean;
}

export default function Footer({
    description = "Specialisti nella vendita di immobili residenziali a Reggio Emilia. Gestiamo situazioni complesse con professionalità e discrezione.",
    isHome = false
}: FooterProps) {

    const currentYear = new Date().getFullYear();

    // Base path for anchors: if we are on home, just #id. If on segment pages, /#id (or specific page if preferred)
    // For "valutazione-gratuita-eredita", it's the home page.
    const anchorPrefix = isHome ? "" : "/";

    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="logo" style={{ marginBottom: "20px" }}>
                            <img
                                src="/assets/Logo Diba Bianco.png"
                                alt="DIBA Immobiliare"
                                className="logo-img"
                                style={{ height: "40px", width: "auto" }}
                            />
                        </div>
                        <p>{description}</p>
                    </div>

                    <div className="footer-col">
                        <h4>Sitelinks</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/servizi">Servizi</Link></li>
                            <li><Link href="/consulenza-vendita">Consulenza Vendita</Link></li>
                            <li><Link href="/consulenza-acquisto">Consulenza Acquisto</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/chi-siamo">Chi Siamo</Link></li>
                            <li><Link href="/contatti">Contattaci Ora</Link></li>
                            <li><Link href={`${anchorPrefix}#faq`}>FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contatti</h4>
                        <ul>
                            <li><a href="tel:3274911031">📞 327 491 1031</a></li>
                            <li><a href="mailto:segreteria@immobiliarediba.it">✉️ segreteria@immobiliarediba.it</a></li>
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
                    <p>
                        © {currentYear} Diba Servizi Immobiliari · P.IVA 01234567890 · <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
