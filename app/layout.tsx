import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eyal Vanam - Premium Organic Farm | Fresh Vegetables & Sustainable Farming',
  description: 'Experience the finest organic vegetables from Eyal Vanam farm. 25+ years of sustainable farming, certified organic produce, and farm-to-table freshness delivered to your door.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
