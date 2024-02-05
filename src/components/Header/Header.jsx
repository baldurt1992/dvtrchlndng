"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className="flex flex-wrap items-center justify-between  p-4 mx-auto navbar md:pb-0 md:">
        <Link href="/" className="flex items-center logo md:">
          <Image
            src="/assets/logo.png"
            width="150"
            height="40"
            alt="Logo Dev"
          />
        </Link>
        <RiMenu3Line
          className="block text-3xl md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto flex items-center`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row flex-auto justify-center md:space-x-12 md:mt-0 md:border-0 items-center justify-center">
            {dataHeader.map(({ id, name, idLink, component }) => {
              if (component) {
                return <div className="button-header"
                  key={id}>
                  {component()}
                  </div>;
              } else {
                return (
                  <div key={id} className="px-5 links-nav">
                    <Link href={idLink} className="links-nav">
                      {name}
                    </Link>
                  </div>
                );
              }
            })}
            
          </div>
        </div>
      </nav>
    </div>
  );
}
