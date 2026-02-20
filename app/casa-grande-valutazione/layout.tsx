import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Casa Troppo Grande? Valutazione Gratuita per Pensionati | Diba",
    description: "Vuoi fare downsizing? Ti aiutiamo a vendere la casa grande e trovare la soluzione più adatta alla tua pensione. Valutazione gratuita a Reggio Emilia.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/casa-grande-valutazione" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/casa-grande-valutazione",
        title: "Casa Troppo Grande? Valutazione Gratuita per Pensionati | Diba",
        description: "Downsizing e vendita per pensionati a Reggio Emilia. Consulenza gratuita.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
