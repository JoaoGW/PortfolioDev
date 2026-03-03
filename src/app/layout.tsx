import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "@/src/app/globals.css";
import StyledJsxRegistry from "./registry";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfólio | João Pedro Ribeiro",
    template: "%s | João Pedro Ribeiro",
  },
  description:
    "Portfólio de João Pedro Ribeiro, desenvolvedor Full-Stack e Mobile em São Paulo, com experiência em Next.js, React, Node.js, TypeScript, cloud e arquitetura de software.",
  applicationName: "Portfólio João Pedro Ribeiro",
  authors: [{ name: "João Pedro Ribeiro" }],
  creator: "João Pedro Ribeiro",
  publisher: "João Pedro Ribeiro",
  keywords: [
    "João Pedro Ribeiro",
    "Portfólio",
    "Desenvolvedor Full-Stack",
    "Desenvolvedor Mobile",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "São Paulo",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Portfólio | João Pedro Ribeiro",
    description:
      "Conheça projetos, experiência e trajetória de João Pedro Ribeiro em desenvolvimento Full-Stack e Mobile.",
    siteName: "Portfólio João Pedro Ribeiro",
    images: [
      {
        url: "/profile.jpg",
        width: 768,
        height: 1024,
        alt: "Foto de perfil de João Pedro Ribeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | João Pedro Ribeiro",
    description:
      "Conheça projetos, experiência e trajetória de João Pedro Ribeiro em desenvolvimento Full-Stack e Mobile.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/icon.jpg?v=2",
    shortcut: "/icon.jpg?v=2",
    apple: "/icon.jpg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Pular para o conteúdo principal
        </a>
        <StyledJsxRegistry>
          <LanguageProvider>
            <GluestackUIProvider mode="dark">
              <div id="main-content">{children}</div>
            </GluestackUIProvider>
          </LanguageProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
