import Image from "next/image";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="max-w-5xl p-6 mx-auto footer">
      <div className="justify-between md:flex">
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              width={200}
              height={40}
              alt="Logo dev"
            />
          </Link>
          <div>
            <p className="mt-5 text-primaryDark max-w-[250px]">
              Construyendo tu Futuro Digital, Línea a Línea
            </p>
          </div>
        </div>
      </div>

      <div className="border-[#3F3E45] border-[1px] my-7" />

      <div className="items-center justify-between md:flex">
        <div className="my-3">
          <div>2023 DevTorch. Todos los derechos reservados.</div>
        </div>
        <div className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-2xl">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
