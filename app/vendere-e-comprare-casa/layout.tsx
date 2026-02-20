import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vuoi Vendere e Comprare Casa a Reggio Emilia? | Diba",
    description: "Vuoi fare upgrade della tua abitazione? Ti aiutiamo a vendere la casa attuale e comprare la nuova con un piano coordinato su misura. Valutazione gratuita.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/vendere-e-comprare-casa" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/vendere-e-comprare-casa",
        title: "Vuoi Vendere e Comprare Casa a Reggio Emilia? | Diba",
        description: "Vendiamo la tua casa e ti aiutiamo ad acquistarne una nuova con un piano coordinato.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
