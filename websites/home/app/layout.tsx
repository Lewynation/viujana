import 'tailwind-config/globals.css';
import {
  Darker_Grotesque,
  Hanken_Grotesk,
  Barlow,
  Arimo,
} from 'next/font/google';

export const metadata = {
  title: 'ViuJana',
  description:
    'Whether you need more balance, flexibility, or just a diffnerent gig, we make it easier to chart a new path. You dont have to start a business. You just gott take what you know and sell it.',
};

const darkerGrotesque = Darker_Grotesque({
  variable: '--darker-grotesque',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: '--hanken-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const barlow = Barlow({
  variable: '--barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const arimo = Arimo({
  variable: '--arimo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${hankenGrotesk.variable} ${barlow.variable} ${arimo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
