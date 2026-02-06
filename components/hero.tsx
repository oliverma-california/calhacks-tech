import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight, ChevronsDown } from "lucide-react";
import { text } from "stream/consumers";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex-col">
        <div className="my-12 lg:my-0 h-[95vh] flex flex-col lg:flex-row gap-12 lg:gap-5 items-center justify-center lg:justify-between max-w-6xl w-full p-5">
          <div className="text-neutral-300 pt-12 lg:pt-0 flex flex-col gap-6 lg:gap-10 w-full items-center lg:items-start">
            <h1 className="text-4xl font-semibold">
              <span className="text-blue-400">BlueKing</span><span className="text-red-400">RedKing</span>
            </h1>
            <h2 className="text-xl text-center lg:text-left text-neutral-400 font-normal">
              Made by Clash addicts, for Clash addicts.
            </h2>
            <div className="flex">
              <a
                className="flex gap-3 bg-blue-400/90 hover:bg-blue-400/80 px-8 py-5 rounded-xl text-white"
                href="/effects"
              >
                Start Learning
                <ArrowBigRight size={24} />
              </a>
            </div>
          </div>
          <Image width={418} height={850} src="/phone.png" alt="Phone displaying BlueKingRedKing app" className="w-2/3 lg:w-lg bg-background" />
        </div>
      </div>
    </div>
  );
}
