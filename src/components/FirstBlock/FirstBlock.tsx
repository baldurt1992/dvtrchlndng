import Link from "next/link";
import { Reveal } from "../Reveal";
import Animation from "../Video/Animation";

export function FirstBlock() {
  return (
    <div className="relative p-4 mt-0 md:py-0 mb-0 overflow-x-visible h-screen mt-0 color-first md:mt-32 ml-5">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-8">
        {" "}
        {/* Agrega gap-8 para añadir espacio entre columnas */}
        <div>
          <div className="mb-8">
            {" "}
            {/* Contenedor adicional para controlar las márgenes */}
            <Reveal>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Desarrollo y diseño
                <span className="block degradedBlue bg-blueLight text-5xl md:text-7xl mb-4">
                  a medida
                </span>
                para todos
              </h1>
            </Reveal>
            <Reveal>
              <p className="max-w-md mb-4 mt-4">
                Somos una empresa especializada en desarrollar soluciones
                digitales a medida, tanto en diseño web como en desarrollo de
                software. Nuestro enfoque personalizado nos permite adaptar cada
                proyecto a las necesidades específicas de nuestros clientes,
                asegurando resultados que destacan en un mundo digital en
                constante evolución.
              </p>
            </Reveal>
            <Reveal>
              <div className="my-8 button-contact mt-4">
                <Link
                  href="#Contact"
                  className="px-4 py-3 rounded-md bg-blueRadial"
                >
                  Contáctanos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-4 hidden md:block mr-8">
          <Animation />
        </div>
      </div>
    </div>
  );
}
