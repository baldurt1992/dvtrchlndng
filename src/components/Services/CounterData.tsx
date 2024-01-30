  "use client";
  import { dataCounter } from "./CounterData.data";
  export function Services() {
    return (
      <div className="max-w-5xl py-0 tracking-wider mx-auto services md:mt-0 overflow-hidden">
        <div className="justify-between md:flex">
          {dataCounter.map(({ id, text, svg, description }) => (
            <div
              key={id}
              className="py-0 text-2xl text-center md: text-3xl"
            >
              <span className="degradedBlue bg-blueLight hover:text-white hover:degradedBluebg-blueLight 
              transition-colors 
              duration-300 ease-in-out cursor-pointer">{text}</span>
            <div>
  </div> 
            </div>
          ))}
        </div>
      </div>
    );
  }
