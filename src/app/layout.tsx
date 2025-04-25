import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import AuthContextProvider from '@/provider/AuthContextProvider';
import { options } from './api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: {
    default: 'SPHAROS 6TH Rebuilding APP',
    template: '%s | SPHAROS 6TH Rebuilding APP',
  },
  description: '1차프로젝트 SPHAROS 6TH Rebuilding',
  icons: { icon: '/avatarUrl.webp' },
  metadataBase: new URL('https://www.starbucks-renewal.shop/'),
  openGraph: {
    url: 'https://www.starbucks-renewal.shop/',
    title: 'SPHAROS 6TH Rebuilding APP',
    description: '1차프로젝트 SPHAROS 6TH Rebuilding APP',
    images: [{ url: 'https://i.ibb.co/jvTKNjmH/main.png' }],
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  const isAuth = !!session?.user as boolean;
  return (
    <html lang="ko-KR">
      <body className={`${inter.variable} antialiased`}>
        <AuthContextProvider isAuth={isAuth}>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
