"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: "🏠", title: "Vendita Immobile", desc: "Vendiamo casa al prezzo giusto, nei tempi giusti. Strategia di pricing e marketing su misura.", href: "/consulenza-vendita" },
  { icon: "🔑", title: "Acquisto Immobile", desc: "Ti aiutiamo a trovare la casa ideale e a trattare il prezzo migliore sul mercato.", href: "/consulenza-acquisto" },
  { icon: "⚖️", title: "Casa Ereditata", desc: "Gestiamo la complessità della successione: eredi multipli, ipoteche, comproprietà.", href: "/valutazione-gratuita-eredita" },
  { icon: "👥", title: "Separazione / Divorzio", desc: "Vendiamo l'immobile in comune con discrezione, tutelando entrambe le parti.", href: "/valutazione-gratuita-separazione" },
  { icon: "🏦", title: "Difficoltà Mutuo", desc: "Soluzioni rapide per vendere prima del pignoramento e salvaguardare il tuo credito.", href: "/vendere-casa-mutuo" },
  { icon: "🔄", title: "Cambio Casa", desc: "Coordiniamo vendita e acquisto in parallelo. Zero stress, massima sicurezza.", href: "/vendere-e-comprare-casa" },
];

const whyDiba = [
  { icon: "📊", title: "Prezzo di mercato reale", desc: "Utilizziamo dati reali delle compravendite recenti in zona per calcolare il valore preciso del tuo immobile, non stime al ribasso." },
  { icon: "⚡", title: "45 giorni in media", desc: "Il nostro processo ottimizzato ci permette di chiudere le trattative in media in 45 giorni, il 40% più veloce della media di mercato." },
  { icon: "🤝", title: "Zero conflitti di interesse", desc: "Non compriamo immobili per rivenderli. Lavoriamo esclusivamente per il tuo interesse, con compenso solo a vendita completata." },
];

const steps = [
  { icon: "📋", title: "Compila il form", desc: "Lascia i tuoi dati e descrivi brevemente la situazione. Il form richiede meno di 2 minuti." },
  { icon: "📞", title: "Consulenza gratuita", desc: "Entro 24 ore ti chiamiamo per capire le tue esigenze e fissare un sopralluogo senza impegno." },
  { icon: "✅", title: "Vendiamo o troviamo", desc: "Costruiamo insieme la strategia migliore e ti affianchiamo fino al rogito notarile." },
];

const soldPhotos = [
  { src: "/assets/properties/property1.jpg", caption: "Appartamento · Centro Storico", tag: "VENDUTO" },
  { src: "/assets/properties/property2.jpg", caption: "Villa · Coviolo", tag: "VENDUTO" },
  { src: "/assets/properties/property3.jpg", caption: "Appartamento · Zona Sud", tag: "VENDUTO" },
  { src: "/assets/properties/property4.jpg", caption: "Casa · Mancasale", tag: "VENDUTO" },
];

const reviews = [
  { text: "Diba ha gestito la vendita della casa di mia madre in modo impeccabile. Hanno trovato acquirente in 38 giorni al prezzo che volevamo. Professionisti veri.", author: "Giulia M. — Venditrice", stars: 5 },
  { text: "Cercavo un bilocale da anni e non trovavo niente. Con Diba ho trovato la casa perfetta in 3 settimane. Conoscono ogni angolo della città.", author: "Luca B. — Acquirente", stars: 5 },
  { text: "Situazione ereditaria complicata con tre fratelli. Diba ha mediato tutto con professionalità e discrezione. Non speravo si risolvesse così bene.", author: "Roberto F. — Successione", stars: 5 },
];

const faqs = [
  { q: "Quanto costa la valutazione?", a: "La valutazione iniziale è completamente gratuita e senza impegno. Un nostro consulente esamina i dati dell'immobile e le compravendite recenti in zona per darti un range di prezzo realistico entro 24 ore." },
  { q: "In quanto tempo vendete solitamente?", a: "La nostra media è 45 giorni dalla messa in vendita al rogito. Naturalmente i tempi variano in base alla tipologia dell'immobile, alla zona e al prezzo, ma ci impegniamo sempre a ottimizzare i tempi senza svendere." },
  { q: "Lavorate anche per chi vuole comprare?", a: "Assolutamente sì. Aiutiamo acquirenti a identificare le proprietà più adatte alle loro esigenze, a valutarle correttamente e a trattare il prezzo migliore. Contattaci per una consulenza acquisto gratuita." },
  { q: "Come funziona la vostra commissione?", a: "La nostra provvigione è corrisposta solo a rogito concluso. Se non vendiamo, non pagate nulla. Le condizioni precise vengono definite nel mandato di vendita, che ti illustriamo in piena trasparenza prima di firmare." },
  { q: "Operate anche fuori Reggio Emilia?", a: "La nostra area di specializzazione principale è Reggio Emilia e provincia. Per zone limitrofe valutiamo caso per caso. Contattaci per sapere se possiamo aiutarti nella tua area specifica." },
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);

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
    if (heroCtaRef.current) observer.observe(heroCtaRef.current);
    return () => {
      if (heroCtaRef.current) observer.unobserve(heroCtaRef.current);
    };
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
      address: (formData.get("address") as string) || "",
      note: (formData.get("note") as string) || "",
      page_target: "homepage",
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

  const contactForm = (idPrefix: string) => (
    isSuccess ? (
      <div className="success-message">
        <h3>Richiesta ricevuta!</h3>
        <p>Ti contatteremo entro 24 ore per la tua consulenza gratuita.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
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
          <label htmlFor={`${idPrefix}-service`}>Cosa ti serve?</label>
          <select id={`${idPrefix}-service`} name="note" className="form-control">
            <option value="">Seleziona...</option>
            <option value="Voglio vendere casa">Voglio vendere casa</option>
            <option value="Voglio comprare casa">Voglio comprare casa</option>
            <option value="Ho ereditato un immobile">Ho ereditato un immobile</option>
            <option value="Altro">Altro</option>
          </select>
        </div>
        <button type="submit" className="btn-cta" disabled={isLoading}>
          {isLoading ? "Invio in corso..." : "Richiedi Consulenza Gratuita"}
        </button>
        {errorMsg && <p style={{ color: "#dc2626", fontSize: "0.875rem", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>}
        <p className="privacy-text">I tuoi dati sono al sicuro. Non li condividiamo con terzi.</p>
      </form>
    )
  );

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero-homepage">
        <div className="container">
          <div className="hero-homepage-inner">
            <div className="hero-label">Agenzia Immobiliare · Reggio Emilia</div>
            <h1>
              Vendi o compra casa a Reggio Emilia con chi conosce davvero il mercato
            </h1>
            <p className="subtitle">
              Oltre 200 immobili gestiti, 4.9/5 su Google, 45 giorni medi di vendita.<br />
              Consulenza gratuita e senza impegno entro 24 ore.
            </p>
            <div className="hero-cta-row">
              <Link href="/consulenza-vendita" className="btn-hero-primary" ref={heroCtaRef}>
                Voglio Vendere →
              </Link>
              <Link href="/consulenza-acquisto" className="btn-hero-secondary">
                Voglio Comprare →
              </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="google-trust-badge">
                <span className="stars">★★★★★</span>
                <span>4.9/5 su Google</span>
                <span style={{ color: "#6b7280", fontWeight: 400 }}>· 60+ recensioni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar-inner">
            {[
              { number: "200+", label: "Immobili venduti" },
              { number: "45gg", label: "Tempo medio vendita" },
              { number: "4.9/5", label: "Valutazione Google" },
              { number: "15 anni", label: "Esperienza locale" },
            ].map((s) => (
              <div key={s.number} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-section">
        <div className="container">
          <div className="section-header">
            <h2>I nostri servizi immobiliari</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>
              Gestiamo ogni tipo di situazione immobiliare a Reggio Emilia, dal semplice cambio casa alle situazioni più complesse.
            </p>
          </div>
          <div className="services-overview-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-overview-card" style={{ textDecoration: "none" }}>
                <div className="service-overview-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-overview-link">Scopri di più →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIBA */}
      <section className="py-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Perché scegliere Diba</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>
              Non siamo un&apos;agenzia generica. Siamo specialisti del mercato di Reggio Emilia con un approccio orientato ai risultati.
            </p>
          </div>
          <div className="why-diba-grid">
            {whyDiba.map((w) => (
              <div key={w.title} className="why-diba-card">
                <div className="icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
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
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>
              Tre semplici passi per iniziare il tuo percorso con Diba.
            </p>
          </div>
          <div className="steps-container">
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-icon-circle">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF PHOTOS */}
      <section className="py-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Immobili recentemente venduti</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>
              Alcuni dei risultati ottenuti per i nostri clienti a Reggio Emilia.
            </p>
          </div>
          <div className="social-proof-grid">
            {soldPhotos.map((photo, i) => (
              <div key={i} className="social-proof-card">
                <span className="social-proof-tag">{photo.tag}</span>
                <div className="social-proof-img-wrapper">
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                </div>
                <div className="social-proof-caption">{photo.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-section" id="recensioni">
        <div className="container">
          <div className="section-header">
            <h2>Cosa dicono i nostri clienti</h2>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "-12px" }}>
              <div className="google-trust-badge">
                <span className="stars">★★★★★</span>
                <span>4.9/5 · Google Reviews</span>
              </div>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
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
      <section className="py-section bg-light" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Domande frequenti</h2>
          </div>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question${activeFaq === i ? " active" : ""}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: activeFaq === i ? "400px" : "0" }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="final-cta-section" id="contact-form-container">
        <div className="container">
          <div className="final-cta-grid">
            <div className="final-cta-left">
              <span className="final-cta-badge">Consulenza Gratuita</span>
              <h2 className="final-cta-headline">
                Pronto a fare il primo passo?
              </h2>
              <p className="final-cta-sub">
                Che tu voglia vendere, comprare o semplicemente capire quanto vale il tuo immobile, il nostro team è disponibile entro 24 ore.
              </p>
              <ul className="final-cta-pillars">
                <li><span className="pillar-check">✓</span> Valutazione gratuita entro 24h</li>
                <li><span className="pillar-check">✓</span> Nessun impegno</li>
                <li><span className="pillar-check">✓</span> Consulente dedicato</li>
              </ul>
              <div className="final-cta-rating">
                <span className="final-cta-stars">★★★★★</span>
                <span>4.9/5 su Google · 60+ recensioni verificate</span>
              </div>
            </div>
            <div className="final-cta-right">
              <div className="hero-form-card">
                <div className="form-title">Richiedi la tua consulenza gratuita</div>
                {contactForm("cta")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer isHome={true} />

      {/* STICKY MOBILE CTA */}
      <div className={`sticky-cta${isStickyVisible ? " visible" : ""}`}>
        <button className="btn-sticky" onClick={() => setIsModalOpen(true)}>
          📞 Consulenza Gratuita
        </button>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Chiudi">×</button>
            <div className="modal-title">Richiedi Consulenza Gratuita</div>
            <div className="modal-sub">Ti risponderemo entro 24 ore, senza impegno.</div>
            {contactForm("modal")}
          </div>
        </div>
      )}
    </div>
  );
}
