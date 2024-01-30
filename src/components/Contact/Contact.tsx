import { Reveal } from "../Reveal"
import { contactSection } from '../Contact/Contact.data'
import Image from "next/image"
import Link from "next/link"

export function Contact() {
    return (
        <div className="relative p-2 md:py-2" id="Contact">
            <div className="grid max-w-7xl gap-10 mx-auto my-0 md:grid-cols-2 place-items-center">
                <Reveal>
                    <div className="max-w-lg md:max-w-none">
                        <h2 className="text-5xl md:text-8xl mb-10 font-light">
                            Chatea con nosotros
                        </h2>
                        <p className="text-primaryDark text-xl md:text-2xl">Todo lo que necesitas para lograr el posicionamiento de tu empresa, con desarrollo y diseño a tu medida.</p>
                        <div className="my-8">
                            <Link href="https://api.whatsapp.com/send/?phone=3117261670" className="flex justify-start mr-4 md:py2">
                                <div className="flex flex-row items-center justify-center px-10 py-4 rounded-md bg-blueRadial button-contact">
                                    <span className="text-sl mr-2 button-text md:text-lg">Contáctanos</span>
                                    <Image src="/assets/whatsapp.png" alt="whatsapp button" width={20} height={20} />
                                </div>

                            </Link>
                        </div>
                    </div>
                </Reveal>
                {contactSection.map(({item})=>
                    <Reveal key={item}>
                        <div className="self-center phone mt-5 hidden md:block">
                            <Image src="/assets/phone1.png" alt="phone" width={550} height={550} className="md:w-100 img-phone"/>
                        </div>
                    </Reveal>
                )}
            </div>
        </div>
    )
}
