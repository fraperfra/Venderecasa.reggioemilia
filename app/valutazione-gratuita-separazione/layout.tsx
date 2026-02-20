import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Separazione? Vendi Casa a Reggio Emilia Senza Stress | Diba",
    description: "Stai affrontando una separazione o divorzio? Ti aiutiamo a vendere la casa coniugale in tempi certi, gestendo anche le situazioni di disaccordo tra coniugi.",
    alternates: { canonical: "https://venderecasa.reggioemilia.it/valutazione-gratuita-separazione" },
    openGraph: {
        type: "website",
        url: "https://venderecasa.reggioemilia.it/valutazione-gratuita-separazione",
        title: "Separazione? Vendi Casa a Reggio Emilia Senza Stress | Diba",
        description: "Gestiamo la vendita della casa coniugale durante la separazione, anche in caso di disaccordo.",
        images: [{ url: "https://venderecasa.reggioemilia.it/assets/og-image.png", width: 1200, height: 630, alt: "Diba Servizi Immobiliari" }],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
