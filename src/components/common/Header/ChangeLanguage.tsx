'use client'

import { language } from '@/types/languages'
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
import { useTranslation } from "react-i18next";

type props = {
    languages: language[]
}

export const ChangeLanguage: React.FC<props> = ({languages}) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [curLang, setCurLang] = useState<language>(languages[0]);
  const {i18n} = useTranslation();
  
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLanguage = (code: string) => {
    localStorage.setItem('language', code)
    const newLang = languages.find((l) => {
      if (l.code === code) {
        return l;
      }
    });
    i18n.changeLanguage(code)
    setCurLang(newLang ?? languages[0]);
    handleDropdown();
    // router.reload()
  }

  useEffect(() => {
    setCurLang(
      languages.filter((l) => l.code === localStorage.getItem("language"))[0] ?? languages[0]
    );
  }, [curLang, languages])

  console.log(curLang)

  return (
    <div className="dropdown">
      <div
        className="dropdown-header cursor-pointer select-none"
        onClick={handleDropdown}
      >
        <img src={curLang.icon} alt="" />
      </div>
      <div
        className={`dropdown-body ${
          dropdown ? "" : "hidden"
        } absolute top-[50px] p-3 rounded-md bg-mainGreyer`}
      >
        <ul className="decoration-[none]">
          {languages.map((lang) => {
            return (
              <li
                key={lang.code}
                className="cursor-pointer"
                onClick={() => handleLanguage(lang.code)}
              >
                <img src={lang.icon} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
