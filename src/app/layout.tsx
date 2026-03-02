import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odois.com.br"),
  title: {
    default: "oDois | Desenvolvimento de Software & Soluções Digitais",
    template: "%s | oDois",
  },
  description:
    "A oDois é uma empresa especializada em desenvolvimento de software, aplicativos mobile, sistemas web e soluções digitais personalizadas. Transformamos ideias em produtos digitais de alta performance.",
  keywords: [
    "desenvolvimento de software",
    "desenvolvimento de aplicativos",
    "desenvolvimento mobile",
    "software house",
    "aplicativo mobile",
    "desenvolvimento web",
    "sistemas web",
    "software sob demanda",
    "transformação digital",
    "consultoria em tecnologia",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "desenvolvimento ágil",
    "MVP",
    "startup",
    "produto digital",
  ],
  authors: [{ name: "oDois", url: "https://odois.com.br" }],
  creator: "oDois",
  publisher: "oDois",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://odois.com.br",
    siteName: "oDois",
    title: "oDois | Desenvolvimento de Software & Soluções Digitais",
    description:
      "Transformamos ideias em produtos digitais de alta performance. Desenvolvimento de software, aplicativos mobile e sistemas web personalizados.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oDois - Desenvolvimento de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oDois | Desenvolvimento de Software & Soluções Digitais",
    description:
      "Transformamos ideias em produtos digitais de alta performance.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://odois.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "oDois",
              url: "https://odois.com.br",
              logo: "https://odois.com.br/odois-logo.svg",
              description:
                "Empresa especializada em desenvolvimento de software, aplicativos mobile e soluções digitais personalizadas.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: ["Portuguese"],
              },
              sameAs: [
                "https://www.linkedin.com/company/odois",
                "https://www.instagram.com/odois",
                "https://github.com/odois",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              areaServed: "BR",
              serviceType: [
                "Desenvolvimento de Software",
                "Desenvolvimento de Aplicativos Mobile",
                "Desenvolvimento Web",
                "Consultoria em Tecnologia",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "oDois",
              url: "https://odois.com.br",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://odois.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
