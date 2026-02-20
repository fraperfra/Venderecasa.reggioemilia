import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Non Riesci a Pagare il Mutuo? Vendi Casa a Reggio Emilia | Diba",
    description: "Rate del mutuo insostenibili? Ti aiutiamo a vendere casa velocemente prima che diventi un problema legale o finanziario. Valutazione gratuita entro 24 ore.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/vendere-casa-mutuo" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/vendere-casa-mutuo",
        title: "Non Riesci a Pagare il Mutuo? Vendi Casa a Reggio Emilia | Diba",
        description: "Vendita rapida per uscire dalla difficoltà del mutuo. Valutazione gratuita in 24h.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
