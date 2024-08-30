import React from 'react'
import Head from 'next/head'
import Footer from "../common/Footer";
import Header from '../common/Header/Header';

interface MainLayoutProps {
    children: React.ReactNode,
    title: String,
    position: 'start' | 'center' | 'end';
    header?: Boolean,
    footer?: Boolean
} 

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, position = 'center', header = true, footer = true }) => {
  return (
    <div className={`p-2 flex flex-col min-h-screen text-white`}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A language learning app built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {header && <Header />}

      <main className={`flex flex-col flex-grow items-center justify-${position}`}>{children}</main>

      {footer && <Footer />}
    </div>
  );
}

export default MainLayout