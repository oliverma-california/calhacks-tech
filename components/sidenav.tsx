"use client";

import Link from "next/link";

export default function SideNav() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-full max-w-5xl justify-end">
        <div className=" flex flex-col p-5 gap-5 bg-neutral-800 shadow-2xl rounded-xl">
          <Link className="text-neutral-400" href="/">
            Home
          </Link>
          <Link className="text-neutral-400" href="/effects">
            Effects
          </Link>
          <Link className="text-neutral-400" href="/deck-builder">
            Deck Builder
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}