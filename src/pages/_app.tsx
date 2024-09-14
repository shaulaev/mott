import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "react-i18next";

import '../i18n.js'
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {

  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const lang = localStorage.getItem("language");

    i18n.changeLanguage(lang ? lang : 'en');
  };

  useEffect(() => {
    handleChangeLanguage();
  }, [])

  return (
      <Component {...pageProps} />
  );
}

export default appWithTranslation(App)
