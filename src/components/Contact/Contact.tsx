import { contactSection } from "../Contact/Contact.data";
import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "../ContactButton/ContactButton";

export function Contact() {
  return (
    <div
      className="background-contact margin-container-global -z-20 p-2 md:py-2"
      id="Contact"
    >
      <div className="p-4 grid max-w-7xl md:gap-10 mx-auto my-0 md:grid-cols-2 place-items-center">
        <div>
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-7xl mb-10 font-semibold">
              <span className="text-white title-mobile text-7xl chat-with-us block degradedBlue bg-blueLight focus:shadow-outline">
                Chatea{" "}
              </span>
              <span className="text-black block title-mobile">con </span>
              <span className="text-black block title-mobile">nosotros</span>
            </h2>
            <p className="text-xl text-black text-p">
              Todo lo que necesitas para lograr el posicionamiento de tu
              empresa, con desarrollo y diseño a tu medida.
            </p>
            <div className="my-8 flex flex-start button-contact-component">
              <ContactButton />
            </div>
          </div>
        </div>
        {contactSection.map(({ item }) => (
          <div key={item}>
            <div className="phone z-1 mt-5 hidden md:block">
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
