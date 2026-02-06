"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlignRight, Menu } from "lucide-react";

export default function Navbar({ setSideNavIsOpen, sideNavIsOpen }: any) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="w-full flex justify-center bg-background">
      <div className="flex px-10 py-5 gap-10 justify-between items-center w-full">
        <Link href="/">
          <Image
            alt="Milpitas Hacks 2.0 Logo"
            src={"/cricon.jpg"}
            width={900}
            height={900}
            className="rounded h-10 w-auto"
          ></Image>
        </Link>{" "}
        <div className="flex justify-between gap-10">
          {width > 650 ? (
            <>
              {" "}
              <Link className="text-neutral-400" href="/effects">
                Effects
              </Link>
              <Link className="text-neutral-400" href="/deck-builder">
                Deck Builder
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  setSideNavIsOpen((sideNavIsOpen: any) => !sideNavIsOpen)
                }
              >
                <Menu color="rgb(163 163 163)" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
