"use client";

import { useState } from "react";

export function ContactButton() {
  const [clickKey, setClickKey] = useState(0);

  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=3105041153";
    setClickKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="">
      <div className="btn-bg bg-2 flex md:justify-center items-center">
        <div
          key={clickKey}
          className="flex flex-row items-center justify-center px-0 py-2 button-contact btn btn-2"
        >
          <button
            onClick={handleRedirect}
            className="text-sl md:text-lg shadow-button"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
}
