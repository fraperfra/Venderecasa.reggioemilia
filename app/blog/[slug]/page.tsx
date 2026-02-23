import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "./data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://venderecasa.reggioemilia.it/blog/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Diba Servizi Immobiliari",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Diba Servizi Immobiliari",
      "url": "https://venderecasa.reggioemilia.it",
    },
    "image": article.coverImage,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="article-layout">
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/blog">Blog</Link>
          <span>›</span>
          <span style={{ color: "var(--text-main)" }}>{article.title}</span>
        </nav>

        {/* HEADER */}
        <header className="article-header">
          <span className="article-category-tag">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>📅 {article.date}</span>
            <span>⏱️ {article.readTime} di lettura</span>
            <span>✍️ Diba Servizi Immobiliari</span>
          </div>
        </header>

        {/* COVER IMAGE */}
        <img
          src={article.coverImage}
          alt={article.title}
          className="article-cover"
        />

        {/* INTRO */}
        <div className="article-intro">
          <p>{article.intro}</p>
        </div>

        {/* BODY */}
        <article className="article-body">
          {article.sections.map((section, i) => (
            <div key={i}>
              <h2>{section.h2}</h2>
              {section.content.split("\n\n").map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          ))}

          {/* INLINE CTA */}
          <div className="article-cta-box">
            <h3>{article.ctaTitle}</h3>
            <p>{article.ctaDesc}</p>
            <Link href="/contatti" className="btn-cta" style={{ display: "inline-block", width: "100%", maxWidth: "300px" }}>
              Consulenza Gratuita →
            </Link>
          </div>

          {/* FAQ */}
          {article.faqs.length > 0 && (
            <div>
              <h2>Domande frequenti</h2>
              {article.faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: "var(--text-light)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>

      {/* BOTTOM CTA */}
      <section className="final-cta-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "white", marginBottom: "16px" }}>{article.ctaTitle}</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "560px", margin: "0 auto 28px" }}>
            {article.ctaDesc}
          </p>
          <Link href="/contatti" className="btn-cta" style={{ display: "inline-block", background: "white", color: "var(--primary)", width: "100%", maxWidth: "300px" }}>
            Parla con un consulente →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
