import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Analisi Gratuita Portafoglio Immobiliare Reggio Emilia | Diba",
    description: "Sei un investitore con più immobili? Analizziamo il tuo portafoglio gratuitamente e ti aiutiamo a ottimizzare rendite, fiscalità e strategie di uscita.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/analisi-portafoglio-immobiliare" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/analisi-portafoglio-immobiliare",
        title: "Analisi Gratuita Portafoglio Immobiliare Reggio Emilia | Diba",
        description: "Analisi e ottimizzazione del portafoglio per investitori immobiliari a Reggio Emilia.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
