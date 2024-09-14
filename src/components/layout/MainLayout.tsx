import React, {useEffect} from 'react'
import Head from 'next/head'
import Footer from "../common/Footer/Footer";
import Header from '../common/Header/Header';
import { useTranslation } from 'react-i18next';

interface MainLayoutProps {
    children: React.ReactNode,
    title: String,
    position: 'start' | 'center' | 'end';
    header?: Boolean,
    footer?: Boolean
} 

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, position = 'center', header = true, footer = true }) => {
  
  const { i18n } = useTranslation();

  useEffect(() => {
    let lang = localStorage.getItem("language") || "ru";
    console.log(lang)
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen text-white`}>
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