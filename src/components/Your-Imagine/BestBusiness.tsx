"use client";

import Link from "next/link";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <div className="relative px-6 py-20 md:py-64" id="features">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-semibold leading-snug">
            <span>Tu lo imaginas, nosotros lo</span>
            <span className="block degradedBlue bg-blueLight">creamos</span>
          </h2>
          <p className="max-w-md mt-10">
            Imagina un mundo donde tus ideas toman forma con solo un clic. En
            nuestra empresa de desarrollo, convertimos tus sueños en soluciones
            tangibles. ¿Quieres optimizar tus procesos empresariales?
            ¿Desarrollar una aplicación única? ¿Automatizar tareas tediosas?
            Estamos aquí para hacerlo realidad.
          </p>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, description }) => (
            <div key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  className="mt-2"
                  src="/assets/rewards.ico"
                  alt={description}
                  width={30}
                  height={30}
                />
                <div>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
