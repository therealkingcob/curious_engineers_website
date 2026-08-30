import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Curious Engineers | Hands-on engineering for young minds',
  description: 'Student-led, hands-on engineering lessons for schools and youth programs in San Diego.',
  openGraph: {
    title: 'Curious Engineers',
    description: 'Big ideas. Small hands.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Curious Engineers — Big ideas. Small hands.' }],
  },
  twitter: { card: 'summary_large_image', title: 'Curious Engineers', description: 'Big ideas. Small hands.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
