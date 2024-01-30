"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { ContactButton } from "../ContactButton/ContactButton";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto navbar md:pb-0">
        <Link href="/" className="flex items-center">
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
          } w-full md:block md:w-auto flex items-center`} // Se agregó 'flex items-center' aquí
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row flex-auto md:space-x-8 md:mt-0 md:border-0 items-center">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out hover:scale-110"
              >
                <Link href={idLink} className="text-lg hover:text-secondary">
                  {name}
                </Link>
              </div>
            ))}
            <ContactButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
