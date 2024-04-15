"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

export function Services() {
  const [clickKey, setClickKey] = useState(0);

  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=573013290214";
    setClickKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="max-w-8xl card-container margin-container-global mx-auto">
      <div className="p-8 h-full">
        <div className="text-start text-services mb-24 mt-0">
          <h2 className="text-7xl degradedBlue bg-blueLight font-bold title-mobile justify-start">
            Servicios
          </h2>
        </div>
        <div className="rounded-lg cards max-w-scree-lg mx-auto grid gap-4 place-items-center">
          <div className="cursor-pointer group relative block bg-black rounded-xl ">
            <Image
              width={1920}
              height={1920}
              loading="lazy"
              priority={false}
              alt=""
              src="/assets/landing.webp"
              className="rounded-xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="degradable text-gradient">
                <p className="text-sm font-medium uppercase  tracking-widest text-white-500">
                  Desarrollo de
                </p>

                <p className="text-xl font-bold text-white sm:text-4xl degradable text-gradient py-2">
                  Landing page
                </p>
              </div>

              <div className="mt-8 sm:mt-8 lg:mt-8 ">
                <div className="translate-y-8 transform opacity-0 transition-all -z-10 group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="text-sm text-white leading-6">
                    <li>
                      Recopila información valiosa de clientes potenciales,
                      impulsando estrategias de marketing.
                    </li>
                    <li>
                      Ideal para campañas de lanzamiento, campañas publicitarias
                      y todo lo relacionado al posicionamiento de un producto o
                      servicio.
                    </li>
                    <li>
                      Diseñada específicamente para convertir visitantes en
                      leads o clientes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer group relative block bg-black rounded-xl">
            <Image
              width={1920}
              height={1920}
              loading="lazy"
              priority={false}
              alt=""
              src="/assets/sitio.webp"
              className="rounded-xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="degradable text-gradient">
                <p className="text-sm font-medium uppercase  tracking-widest text-white-500">
                  Desarrollo de
                </p>

                <p className="text-xl font-bold text-white sm:text-4xl margin-title degradable text-gradient py-2">
                  Sitios web
                </p>
              </div>

              <div className="mt-4 sm:mt- lg:mt-4">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="text-sm text-white leading-6">
                    <li>Accesibilidad universal y aplicaciones híbridas.</li>
                    <li>
                      Visualización de datos importantes y administración
                      empresarial.
                    </li>
                    <li>Diseño adaptable a todas las necesidades.</li>
                    <li>Integraciones éxitosas.</li>
                    <li>Eficiencia operativa. </li>
                    <li>Despliegue a tiendas. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer group relative block bg-black rounded-xl">
            <Image
              width={1920}
              height={1920}
              loading="lazy"
              priority={false}
              alt=""
              src="/assets/ecommerce.webp"
              className="rounded-xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="degradable text-gradient">
                <p className="text-sm font-medium uppercase  tracking-widest text-white-500">
                  Desarrollo de
                </p>

                <p className="text-xl font-bold text-white sm:text-4xl margin-title degradable text-gradient py-2">
                  Ecommerce
                </p>
              </div>

              <div className="mt-8 sm:mt-8 lg:mt-8">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="text-sm text-white leading-6">
                    <li>Expansión global</li>
                    <li>Ventas 24/7</li>
                    <li>Eficiencia operativa y reducción de costos.</li>
                    <li>Crecimiento rápido.</li>
                    <li>Acceso desde cualquier dispositivo. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer group relative block bg-black rounded-xl">
            <Image
              width={1920}
              height={1920}
              loading="lazy"
              priority={false}
              alt=""
              src="/assets/app.webp"
              className="rounded-xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-20"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="degradable text-gradient">
                <p className="text-sm font-medium uppercase  tracking-widest text-white-500">
                  Desarrollo de
                </p>

                <p className="text-xl font-bold text-white sm:text-4xl margin-title degradable text-gradient py-2">
                  Apps
                </p>
              </div>

              <div className="mt-8 sm:mt-8 lg:mt-8">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="text-sm text-white leading-6">
                    <li>Accesibilidad universal y aplicaciones híbridas.</li>
                    <li>
                      Visualización de datos importantes y administración
                      empresarial.
                    </li>
                    <li>Diseño adaptable a todas las necesidades.</li>
                    <li>Integraciones éxitosas.</li>
                    <li>Eficiencia operativa. </li>
                    <li>Despliegue a tiendas. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-bg bg-2 flex md:justify-center whatsapp-cards items-center">
          <div
            key={clickKey}
            className="flex flex-row items-center justify-center px-0 py-2 btn btn-2"
          >
            <button
              onClick={handleRedirect}
              className="text-sl md:text-lg shadow-button"
            >
              Hablemos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
