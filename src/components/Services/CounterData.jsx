"use client";

import { dataCounter } from "./CounterData.data";
import React from "react";
import { useState } from "react";

export function Services() {
  const [clickKey, setClickKey] = useState(0);

  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=3117261670";
    setClickKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="max-w-8xl card-container margin-container-global mx-auto">
      <div className="p-8 h-full">
        <div className="text-start text-services mb-24 mt-0">
          <h2 className="text-7xl degradedBlue bg-blueLight font-bold title-mobile">Servicios</h2>
        </div>
        <div className="cards max-w-scree-lg mx-auto grid gap-4 place-items-center">
          {dataCounter.map(({ id, text, description, caracteristicas, caracteristicas2, caracteristicas3, caracteristicas4, caracteristicas5 }) => (
            <div
              key={id}
              className="p-4 md:p-4 shadow-cards bg-white text-center text-black rounded-xl"
            >
              <span className="cursor-pointer header-card text-gradient flex flex-row font-light">
                {text}
              </span>
              <p className="w-full mb-4 mt-4 text-card text-start font-thin flex content-end">
                {description}
              </p>
                <ol className="list-disc text-sm  text-start pl-4">
                {caracteristicas && <li>{caracteristicas}</li>}
                {caracteristicas2 && <li>{caracteristicas2}</li>}
                {caracteristicas3 && <li>{caracteristicas3}</li>}
                {caracteristicas4 && <li>{caracteristicas4}</li>}
                {caracteristicas5 && <li>{caracteristicas5}</li>}
                </ol>
            </div>
          ))}
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
              Háblemos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
