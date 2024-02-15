import Animation from "../Video/Animation";
import { ContactButton } from "../ContactButton/ContactButton";

export function FirstBlock() {
  return (
    <div className=" p-4 first-block mobile-view margin-container-global color-first md:mt-52">
      <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-8">
        {" "}
        <div>
          <div className="mb-8">
            {" "}
            <div>
              <h1 className="font-semibold title-mobile">
                <span className="title-mobile block md:mb-4">
                  Desarrollo
                  <span className="title-mobile block md:mt-2">y diseño</span>
                  <span className="title-mobile block degradedBlue bg-blueLight text-5xl ">
                    a medida
                  </span>
                  para todos
                </span>
              </h1>
            </div>
            <div>
              <p className="max-w-full mb-8 mt-8 text-p md:mt-8">
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
        <div className=" relative animation grid hidden md:block static">
          <Animation />
        </div>
      </div>
    </div>
  );
}
