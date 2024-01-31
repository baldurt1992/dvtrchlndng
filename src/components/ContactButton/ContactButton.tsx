import Link from "next/link";
import Image from "next/image";
import React from "react";

export function ContactButton({ withIcon }: { withIcon?: boolean }) {
  return (
    <div className="">
      <Link
        href="https://api.whatsapp.com/send/?phone=3117261670"
        className="flex flex-auto button-width"
      >
        <div className="btn-bg bg-2 flex jusfify-center items-center">
          <div className="flex flex-row items-center justify-center px-12 py-2 button-contact btn btn-2">
            <button className="text-sl md:text-lg">Contáctanos</button>
            {withIcon && (
              <Image
                src="/assets/whatsapp.png"
                alt="whatsapp button"
                width={20}
                height={20}
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
