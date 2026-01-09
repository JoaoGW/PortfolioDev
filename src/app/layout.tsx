import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import '@/src/app/globals.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import StyledJsxRegistry from './registry';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio - João Pedro Ribeiro",
  description: "Este é o Portfólio do Desenvolvedor Full-Stack João Pedro do Carmo Ribeiro. Atualmente localizado em São Paulo - Brasil, possuo diversas habilidades técnicas de Front-End, Back-End, Mobile e Databases que serão de extrema utilidade para a sua empresa se desenvolver no campo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledJsxRegistry>
          <GluestackUIProvider mode="dark">
            {children}
          </GluestackUIProvider>
        </StyledJsxRegistry>
        </body>
    </html>
  );
}
