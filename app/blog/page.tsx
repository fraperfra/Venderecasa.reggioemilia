import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Immobiliare Reggio Emilia | Diba Servizi Immobiliari",
  description: "Guide, consigli e approfondimenti sul mercato immobiliare di Reggio Emilia. Vendita, acquisto, successioni, mutui: tutto quello che devi sapere.",
  alternates: {
    canonical: "https://venderecasa.reggioemilia.it/blog",
  },
};

const posts = [
  {
    slug: "come-vendere-casa-ereditata-reggio-emilia",
    title: "Come vendere una casa ereditata a Reggio Emilia: guida completa",
    excerpt: "Hai ereditato un immobile? Scopri tutti gli step dalla dichiarazione di successione alla vendita, come gestire eredi multipli e ottenere il prezzo giusto.",
    date: "15 gennaio 2025",
    category: "Successioni",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "vendere-casa-velocemente-reggio-emilia",
    title: "Come vendere casa velocemente a Reggio Emilia senza svendere",
    excerpt: "Le strategie professionali per vendere in 30-45 giorni al prezzo di mercato: pricing corretto, home staging, distribuzione dell'annuncio e gestione delle trattative.",
    date: "8 febbraio 2025",
    category: "Vendita",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "difficolta-mutuo-come-vendere-prima-pignoramento",
    title: "Difficoltà con il mutuo: come vendere casa prima del pignoramento",
    excerpt: "Sei in ritardo con le rate? Agisci prima che la banca avvii la procedura esecutiva. Ecco come vendere al prezzo di mercato e uscire dalla situazione senza danni.",
    date: "20 marzo 2025",
    category: "Situazioni Difficili",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="hero-label">Blog Immobiliare</div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
              Guide e consigli sul mercato di Reggio Emilia
            </h1>
            <p style={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.6 }}>
              Articoli pratici su vendita, acquisto, successioni e situazioni complesse. Scritti da chi conosce davvero il mercato locale.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span>{post.date}</span>
                    <span>· {post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-read-link">Leggi l&apos;articolo →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-light">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "16px" }}>Hai una domanda specifica?</h2>
          <p style={{ color: "var(--text-light)", maxWidth: "560px", margin: "0 auto 28px", fontSize: "1.05rem" }}>
            I nostri consulenti sono disponibili per una conversazione gratuita sulla tua situazione specifica.
          </p>
          <Link href="/contatti" className="btn-cta" style={{ display: "inline-block", maxWidth: "280px" }}>
            Parla con un consulente
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
