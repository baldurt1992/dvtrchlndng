"use client";
import { dataCounter } from "./CounterData.data";

export function Services() {
  return (
    <div className="max-w-5xl py-0 tracking-wider mx-auto services">
      <div className="flex flex-col gap-4 mr-0 md:flex-row justify-between mr-16">
        {dataCounter.map(({ id, text, svg, description }) => (
          <div key={id} className="py-0 text-2xl text-center md: text-3xl">
            <span className="degradable cursor-pointer">{text}</span>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
