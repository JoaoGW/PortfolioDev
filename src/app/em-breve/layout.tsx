import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Em breve",
  description:
    "Novos conteúdos de tecnologia estarão disponíveis em breve no portfólio de João Pedro Ribeiro.",
  alternates: {
    canonical: "/em-breve",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
