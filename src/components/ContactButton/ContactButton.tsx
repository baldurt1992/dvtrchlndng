import Link from "next/link";
import Image from "next/image";
import React from "react";

export function ContactButton() {
  return (
    <div className="">
      <Link
        href="https://api.whatsapp.com/send/?phone=3117261670"
        className="flex flex-auto"
      >
        <div className="btn-bg bg-2 flex jusfify-center items-center block md:hidden">
          <div className="flex flex-row items-center justify-center px-0 py-2 button-contact btn btn-2 md:px-12">
            <button className="text-sl md:text-lg">Contáctanos</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
