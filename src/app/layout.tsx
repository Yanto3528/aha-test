import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], variable: '--font-ubuntu' });

export const metadata: Metadata = {
  title: 'Aha exam',
  description: 'A project built for Aha Front-End Engineer exam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ubuntu.variable} bg-greyscale-dark min-h-screen overflow-auto pb-40`}
      >
        {children}
      </body>
    </html>
  );
}
