"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";
import Carousel from "../Carousel";

export function BestBusiness() {
  return (
    <div className="relative px-6 py-20 md:py-64" id="features">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold leading-snug">
              <span>Tu lo imaginas, nosotros lo</span>
              <span className="block degradedBlue bg-blueLight">creamos</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Imagina un mundo donde tus ideas toman forma con solo un clic. En
              nuestra empresa de desarrollo, convertimos tus sueños en
              soluciones tangibles. ¿Quieres optimizar tus procesos
              empresariales? ¿Desarrollar una aplicación única? ¿Automatizar
              tareas tediosas? Estamos aquí para hacerlo realidad.
            </p>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={description}
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
