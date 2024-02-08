import { Reveal } from "../Reveal";
import { contactSection } from "../Contact/Contact.data";
import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "../ContactButton/ContactButton";

export function Contact() {
  return (
    <div className="background-contact p-2 md:py-2" id="Contact">
      <div className="p-4 grid max-w-7xl gap-10 mx-auto my-0 md:grid-cols-2 place-items-center">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-4xl md:text-7xl mb-10 font-semibold">
              <span className="text-white text-7xl chat-with-us block">
                Chatea{" "}
              </span>
              <span className="text-black block">con </span>
              <span className="text-black block">nosotros</span>
            </h2>
            <p className="text-xl text-black md:text-2xl">
              Todo lo que necesitas para lograr el posicionamiento de tu
              empresa, con desarrollo y diseño a tu medida.
            </p>
            <div className="my-8 flex flex-start ">
              <ContactButton />
            </div>
          </div>
        </div>
        {contactSection.map(({ item }) => (
          <div key={item}>
            <div className="phone mt-5 hidden md:block">
              <Image
                src="/assets/phone1.png"
                alt="phone"
                width={650}
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
