import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | João Pedro do Carmo Ribeiro",
  description:
    "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Portfólio | João Pedro Ribeiro",
    description:
      "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
    url: "/sobre",
    images: ["/profile.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | João Pedro Ribeiro",
    description:
      "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
    images: ["/profile.webp"],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
