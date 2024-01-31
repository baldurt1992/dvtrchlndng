import { dataCounter } from "./CounterData.data";1

export function Services() {
  return (
    <div className="max-w-8xl tracking-wider mx-auto ">
      <div className="flex flex-wrap height-container flex-col gap-9 bg-white md:flex md:flex-row justify-center gap-8">
        {dataCounter.map(({ id, text, svg, description }) => (
          <div key={id} className="p-8 shadow-cards flex-shrink-1 text-2xl h-72 mt-24 bg-white text-center text-black w-56 rounded-xl">
            <span className=" cursor-pointer degradable">{text}</span>
            <p className="max-w-md mb-4 mt-4 md:mt-8 text-sm flex text-start font-thin">{description} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
