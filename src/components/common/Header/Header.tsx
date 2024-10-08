'use client'

import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Profile from "./Profile";

const Header: React.FC = () => {

  return (
    <header className="p-2 w-[100%] flex items-center justify-between left-[50%] transform translate-x-[-50%] z-10 shadow-sm shadow-[#0a1014] fixed bg-[#141F25]">
      <Link href={"/"}>
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.464C0 4.50133 0.768 2.944 2.304 1.792C3.84 0.597333 5.93067 0 8.576 0L16.0913 18.8955L10.4584 22.3194L6.912 13.056L6.208 13.312L8.32 19.2V23.6192L0 28.6765V6.464ZM0 38.3491V46.016C5.54667 46.016 8.32 43.9253 8.32 39.744V29.7151L0 38.3491ZM11.8768 26.0241L18.624 43.648C18.9227 44.3733 19.3707 44.9493 19.968 45.376C20.608 45.8027 21.312 46.016 22.08 46.016C22.848 46.016 23.5307 45.8027 24.128 45.376C24.768 44.9493 25.2373 44.3947 25.536 43.712L37.248 13.12L37.952 13.376L35.776 19.264V32.27L38.5 30L41.5 27.5L44.16 25.5655V6.528C44.16 4.56533 43.3707 3.008 41.792 1.856C40.256 0.661332 38.1867 0.0639992 35.584 0.0639992L21.184 38.08L20.544 37.824L22.016 33.792L16.8669 20.8457L11.8768 26.0241ZM40.5 33.5L44.16 27.8692V46.016C38.5707 46.016 35.776 43.9253 35.776 39.744V39.1688L40.5 33.5Z"
            fill="#F43F5E"
          />
        </svg>
      </Link>

      <Navbar />

      <Profile />
    </header>
  );
};

export default Header;
