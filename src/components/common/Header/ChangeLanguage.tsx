import { language } from '@/types/languages'
import React, {useEffect, useState} from 'react'
import { useTranslation } from "react-i18next";

type props = {
    languages: language[]
}

export const ChangeLanguage: React.FC<props> = ({languages}) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const {i18n} = useTranslation();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLanguage = (code: string) => {
    localStorage.setItem('language', code)
    i18n.changeLanguage(code)
    handleDropdown();
  }

  let curLang = languages[0];

  useEffect(() => {
    curLang = languages.filter(
      (l) => l.code === localStorage.getItem("language")
    )[0];
  }, [])

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
