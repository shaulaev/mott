import React from 'react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const {t} = useTranslation()

  return (
    <nav>
      <ul className="flex gap-4">
        <li className="hover:text-rose-500 duration-200">
          <Link href={"/lessons"}>{t("lessons")}</Link>
        </li>
        <li className="hover:text-rose-500 duration-200">
          <Link href={"/tasks"}>{t("tasks")}</Link>
        </li>
        <li className="hover:text-rose-500 duration-200">
          <Link href={"/raiting"}>{t("raiting")}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar