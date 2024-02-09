"use client";
import Link from "next/link";
import { useState } from "react";

export function ContactButton() {
  const [clic, setclic] = useState(false);

  const handleClick = () => {
    setclic(true);
  };

  return (
    <div className="">
      <Link
        href="https://api.whatsapp.com/send/?phone=3117261670"
        className="flex flex-auto"
      >
        <div className="btn-bg bg-2 flex jusfify-center items-center justify-center items-center">
          <div className="flex flex-row items-center justify-center px-0 py-2 button-contact btn btn-2 md:px-0">
            <button
              onClick={handleClick}
              className="text-sl md:text-lg shadow-button"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
