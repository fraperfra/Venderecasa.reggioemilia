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

import { articles } from "./[slug]/data";

const posts = Object.entries(articles).map(([slug, article]) => ({
  slug,
  title: article.title,
  excerpt: article.metaDescription,
  date: article.date,
  category: article.category,
  readTime: article.readTime,
  coverImage: article.coverImage,
}));

export default function BlogPage() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="hero-label">Blog Immobiliare</div>
            <h1>Guide e consigli sul mercato di Reggio Emilia</h1>
            <p>Articoli pratici su vendita, acquisto, successioni e situazioni complesse. Scritti da chi conosce davvero il mercato locale.</p>
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
