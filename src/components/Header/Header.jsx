"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const [clickKey, setClickKey] = useState(0);
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=3105041153";
    setClickKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="nav-wrapper fixed top-0 left-0 w-full z-40">
      <nav className="flex items-center justify-between p-4 mx-auto navbar md:pb-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center logo pointer">
            <Image
              src="/assets/logo.png"
              width="150"
              height="40"
              alt="Logo Dev"
              style={{ objectFit: "cover", width: "150px", height: "auto" }}
            />
          </Link>
        </div>
        {/* Botón de WhatsApp */}
        <div className="block cursor-pointer whatsapp-button">
          <Image
            onClick={handleRedirect}
            src="/assets/whatsapp.png"
            width="100"
            height="40"
            alt="Logo Dev"
            style={{ objectFit: "cover", width: "50px", height: "auto" }}
          />
        </div>
        {/* <RiMenu3Line
      className="block text-3xl md:hidden cursor-pointer"
      onClick={() => setOpenMobileMenu(!openMobileMenu)}
    /> */}
        <div
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto flex items-center`}
        >
          <div className="flex flex-col  p-4 mt-4 md:p-0 md:flex-row flex-auto justify-center md:space-x-12 md:mt-0 md:border-0 items-center justify-center">
            {dataHeader.map(({ id, /* name, idLink, */ component }) => {
              if (component) {
                return (
                  <div className="button-header" key={id}>
                    {component()}
                  </div>
                );
              } else {
                return (
                  <div key={id} className="px-5 links-nav">
                    {/* <Link href={idLink} className="links-nav">
                  {name}
                </Link> */}
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
