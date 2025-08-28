import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Adewumi Josephine - Portfolio',
  description: 'Portfolio of Adewumi Josephine Adedoyinsola',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}