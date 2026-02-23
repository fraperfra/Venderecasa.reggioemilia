"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🏠",
    title: "Vendita Immobile",
    desc: "Strategia di pricing, marketing professionale e gestione dell'intera trattativa per vendere al prezzo giusto nei tempi giusti.",
    href: "/consulenza-vendita",
  },
  {
    icon: "🔑",
    title: "Acquisto Immobile",
    desc: "Selezioniamo le migliori opportunità per te, accediamo a immobili off-market e ti assistiamo dalla proposta al rogito.",
    href: "/consulenza-acquisto",
  },
  {
    icon: "⚖️",
    title: "Casa Ereditata",
    desc: "Gestiamo la vendita di immobili da successione: più eredi, comproprietà, ipoteche, pratiche catastali.",
    href: "/valutazione-gratuita-eredita",
  },
  {
    icon: "👥",
    title: "Separazione / Divorzio",
    desc: "Vendita dell'immobile coniugale con massima discrezione, tutelando gli interessi di entrambe le parti.",
    href: "/valutazione-gratuita-separazione",
  },
  {
    icon: "🏦",
    title: "Difficoltà Mutuo",
    desc: "Soluzioni veloci per vendere prima del pignoramento e uscire dalla situazione di morosità salvaguardando il tuo credito.",
    href: "/vendere-casa-mutuo",
  },
  {
    icon: "🔄",
    title: "Cambio Casa",
    desc: "Coordiniamo vendita del tuo attuale immobile e acquisto del nuovo in parallelo. Zero stress, nessun rischio di restare scoperto.",
    href: "/vendere-e-comprare-casa",
  },
  {
    icon: "🚛",
    title: "Trasferimento",
    desc: "Ti aiutiamo a vendere rapidamente quando ti trasferisci per lavoro o famiglia, gestendo tutto anche a distanza.",
    href: "/vendere-casa-trasferimento",
  },
  {
    icon: "📊",
    title: "Analisi Portafoglio",
    desc: "Analisi professionale del tuo patrimonio immobiliare: valorizzazione, gestione, opportunità di dismissione o ristrutturazione.",
    href: "/analisi-portafoglio-immobiliare",
  },
];

const pillars = [
  {
    icon: "📍",
    title: "Specialisti locali",
    desc: "Conosciamo ogni quartiere di Reggio Emilia. I nostri dati di mercato sono aggiornati in tempo reale, non presi da statistiche nazionali.",
  },
  {
    icon: "🤝",
    title: "Solo a risultato",
    desc: "Non paghiamo commissioni in anticipo. Il nostro compenso scatta solo a rogito concluso: il nostro interesse coincide con il tuo.",
  },
  {
    icon: "⚡",
    title: "Processo ottimizzato",
    desc: "In 15 anni abbiamo affinato ogni fase: dalla valutazione alla chiusura. I nostri clienti vendono in media in 45 giorni.",
  },
];

export default function ServiziPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
      note: (formData.get("service") as string) || "",
      page_target: "servizi",
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
        setIsModalOpen(false);
      }
    } catch {
      setErrorMsg("Errore di rete. Controlla la connessione.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section
        className="about-hero"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="hero-label">Diba Servizi Immobiliari</div>
          <h1 style={{ color: "white", marginBottom: "20px" }}>
            Tutti i nostri servizi immobiliari a Reggio Emilia
          </h1>
          <p
            className="subtitle"
            style={{ color: "rgba(255,255,255,0.9)", maxWidth: "700px", margin: "0 auto" }}
          >
            Dalla vendita all&apos;acquisto, dalle situazioni complesse al semplice cambio casa. Gestiamo ogni aspetto del mercato immobiliare locale.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-section">
        <div className="container">
          <div className="servizi-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="servizio-card" style={{ textDecoration: "none" }}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="servizio-card-link">Scopri di più →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHÉ DIBA */}
      <section className="py-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Perché affidarsi a Diba</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>
              In 15 anni abbiamo costruito un metodo che funziona, basato sulla conoscenza del territorio e sull&apos;onestà.
            </p>
          </div>
          <div className="why-diba-grid">
            {pillars.map((p) => (
              <div key={p.title} className="why-diba-card">
                <div className="icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="final-cta-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "white", marginBottom: "20px" }}>
            Hai bisogno di un consulente immobiliare?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "35px",
              maxWidth: "600px",
              margin: "0 auto 35px",
            }}
          >
            Contattaci per una consulenza gratuita. Ti risponderemo entro 24 ore.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="btn-cta"
              style={{ maxWidth: "260px" }}
              onClick={() => setIsModalOpen(true)}
            >
              Richiedi Consulenza Gratuita
            </button>
            <Link
              href="/contatti"
              className="btn-outline"
              style={{
                maxWidth: "260px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.6)",
              }}
            >
              Vai ai Contatti
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Chiudi">
              ×
            </button>
            <div className="modal-title">Richiedi Consulenza Gratuita</div>
            <div className="modal-sub">Ti risponderemo entro 24 ore, senza impegno.</div>
            {isSuccess ? (
              <div className="success-message">
                <h3>Richiesta ricevuta!</h3>
                <p>Ti contatteremo entro 24 ore.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="modal-name">Nome e Cognome</label>
                  <input type="text" id="modal-name" name="name" className="form-control" placeholder="Mario Rossi" required />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-phone">Telefono</label>
                  <input type="tel" id="modal-phone" name="phone" className="form-control" placeholder="333 1234567" required />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-email">Email (opzionale)</label>
                  <input type="email" id="modal-email" name="email" className="form-control" placeholder="mario@esempio.it" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-service">Di cosa hai bisogno?</label>
                  <select id="modal-service" name="service" className="form-control">
                    <option value="">Seleziona servizio...</option>
                    {services.map((s) => (
                      <option key={s.href} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-cta" disabled={isLoading}>
                  {isLoading ? "Invio in corso..." : "Invia Richiesta"}
                </button>
                {errorMsg && (
                  <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>
                    {errorMsg}
                  </p>
                )}
                <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
