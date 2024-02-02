import { Reveal } from "../Reveal";
import { contactSection } from "../Contact/Contact.data";
import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "../ContactButton/ContactButton";

export function Contact() {
  return (
    <div className="relative p-2 md:py-2" id="Contact">
      <div className="grid max-w-7xl gap-10 mx-auto my-0 md:grid-cols-2 place-items-center">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-5xl md:text-8xl mb-10 font-light">
              Chatea con nosotros
            </h2>
            <p className="text-primaryDark text-xl md:text-2xl">
              Todo lo que necesitas para lograr el posicionamiento de tu
              empresa, con desarrollo y diseño a tu medida.
            </p>
            <div className="my-8 flex flex-start">
              <ContactButton />
            </div>
          </div>
        </div>
        {contactSection.map(({ item }) => (
          <div key={item}>
            <div className="self-center phone mt-5 hidden md:block">
              <Image
                src="/assets/phone1.png"
                alt="phone"
                width={550}
                height={550}
                className="md:w-100 img-phone"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
