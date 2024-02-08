import { dataCounter } from "./CounterData.data";
import React from "react";

export function Services() {
  return (
    <div className="max-w-8xl card-container tracking-wider mx-auto">
      <div className="flex justify-center p-8">
        <div className="cards max-w-scree-lg mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dataCounter.map(({ id, text, image, description }) => (
            <div
              key={id}
              className="p-4 md:p-4 shadow-cards bg-white text-center text-black rounded-xl"
            >
              <span className="cursor-pointer header-card text-gradient text-3xl flex flex-row font-medium">
                {text}
                {image}
              </span>
              <p className="max-w-md mb-4 mt-4 text-card text-start font-thin flex content-end leading-normal tracking-wider">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
