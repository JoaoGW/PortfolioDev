import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com João Pedro Ribeiro para oportunidades, parcerias e projetos de software.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | João Pedro Ribeiro",
    description:
      "Canal de contato para oportunidades, parcerias e projetos de software com João Pedro Ribeiro.",
    url: "/contato",
    images: ["/profile.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | João Pedro Ribeiro",
    description:
      "Canal de contato para oportunidades, parcerias e projetos de software com João Pedro Ribeiro.",
    images: ["/profile.webp"],
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
