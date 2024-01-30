"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
  return (
    <MotionTransition className="max-w-5xl py-0 mx-auto md:py-0 mt-0 tracking-wider mx-auto max-w-5xl">
      <div className="justify-between md:flex">
        {dataCounter.map(({ id, text }) => (
          <div
            key={id}
            className="py-5 text-2xl text-center md:text-left text-3xl"
          >
            <span className="degradedBlue bg-blueLight">{text}</span>
          </div>
        ))}
      </div>
    </MotionTransition>
  );
}
