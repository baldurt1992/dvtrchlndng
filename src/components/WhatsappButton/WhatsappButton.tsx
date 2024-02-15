"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

export function WathsappButton() {
  const [clickKey, setClickKey] = useState(0);
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=3117261670";
    setClickKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="block cursor-pointer whatsapp-button-desktop">
      <Image
        onClick={handleRedirect}
        src="/assets/whatsapp.png"
        width="100"
        height="40"
        alt="Logo Dev"
        style={{ objectFit: "cover", width: "80px", height: "auto" }}
      />
    </div>
  );
}
