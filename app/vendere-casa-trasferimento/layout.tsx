import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trasferimento Lavorativo? Vendi Casa a Reggio Emilia in 45 Giorni | Diba",
    description: "Ti stai trasferendo per lavoro? Vendiamo la tua casa a Reggio Emilia rapidamente così puoi partire senza pensieri. Valutazione gratuita entro 24 ore.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/vendere-casa-trasferimento" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/vendere-casa-trasferimento",
        title: "Trasferimento Lavorativo? Vendi Casa a Reggio Emilia in 45 Giorni | Diba",
        description: "Vendita rapida garantita per chi si trasferisce per lavoro. Gestiamo tutto noi.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
