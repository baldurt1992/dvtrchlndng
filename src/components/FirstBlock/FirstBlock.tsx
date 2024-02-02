import Link from "next/link";
import Animation from "../Video/Animation";
import { ContactButton } from "../ContactButton/ContactButton";

export function FirstBlock() {
  return (
    <div className=" p-4 first-block mobile-view color-first md:mt-24 overflow-hidden">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-8">
        {" "}
        <div>
          <div className="mb-8">
            {" "}
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                <span className="block md:mb-4">
                  Desarrollo
                  <span className="block md:mt-2">y diseño</span>
                  <span className="block degradedBlue bg-blueLight text-5xl md:text-6xl">
                    a medida
                  </span>
                  para todos
                </span>
              </h1>
            </div>
            <div>
              <p className="max-w-md mb-4 mt-4 md:mt-8">
                Somos una empresa especializada en desarrollar soluciones
                digitales a medida, tanto en diseño web como en desarrollo de
                software. Nuestro enfoque personalizado nos permite adaptar cada
                proyecto a las necesidades específicas de nuestros clientes,
                asegurando resultados que destacan en un mundo digital en
                constante evolución.
              </p>
              <div className="button-visible">
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
        <div className=" relative grid mt-4 hidden md:block static">
          <Animation />
        </div>
      </div>
    </div>
  );
}
