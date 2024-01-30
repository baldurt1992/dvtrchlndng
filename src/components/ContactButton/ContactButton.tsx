import Link from "next/link"
import Image from "next/image"
import React from "react"

export function ContactButton ({withIcon}:{withIcon?: boolean}) {
    return (
        <div className="">
        <Link href="https://api.whatsapp.com/send/?phone=3117261670" className="flex flex-auto">
            <div className="flex flex-row items-center justify-center px-20 py-2 rounded-md bg-blueRadial button-contact">
                <span className="text-sl mr-2 button-text md:text-lg">Contáctanos</span>
                <Image src="/assets/whatsapp.png" alt="whatsapp button" width={20} height={20} />
               {withIcon && (<Image src="/assets/whatsapp.png" alt="whatsapp button" width={20} height={20} />)}
            </div>

        </Link>
    </div>
    )
    
}