import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre | João Pedro Ribeiro",
    description:
      "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
    url: "/sobre",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | João Pedro Ribeiro",
    description:
      "Perfil profissional, formação acadêmica, stack técnica e experiências de João Pedro Ribeiro.",
    images: ["/profile.jpg"],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
