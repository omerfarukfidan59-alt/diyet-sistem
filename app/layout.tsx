import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriLife - Profesyonel Diyetisyen & Beslenme Danışmanlığı",
  description: "Uzman diyetisyenlerimizle sağlıklı yaşam yolculuğunuza başlayın. Kişiselleştirilmiş beslenme planları, online danışmanlık ve spor beslenmesi hizmetleri.",
  keywords: "diyetisyen, beslenme uzmanı, diyet planı, sağlıklı yaşam, kilo verme, spor beslenmesi",
  openGraph: {
    title: "NutriLife - Profesyonel Diyetisyen & Beslenme Danışmanlığı",
    description: "Uzman diyetisyenlerimizle sağlıklı yaşam hedeflerinize ulaşın.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
