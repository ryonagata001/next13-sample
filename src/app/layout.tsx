import './globals.css';

import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Footer from './common/components/Footer';
import Header from './common/components/Header';
import Main from './common/components/Main';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className={inter.className}>
        <Header />
        <Main>
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        </Main>
        <Footer />
      </body>
    </html>
  )
}
