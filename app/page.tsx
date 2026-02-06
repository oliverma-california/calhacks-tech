"use client";

import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";

import { useState } from "react";

export default function Home() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  
  return (
    <div className="w-full">
      <div className="fixed top-0 w-full">
        <Navbar
          setSideNavIsOpen={setSideNavIsOpen}
          sideNavIsOpen={sideNavIsOpen}
        />
        {sideNavIsOpen && <SideNav />}
      </div>
      <div className="pb-12 text-sm font-light text-neutral-500 w-full text-center">Made w/ ❤️ by Oliver Ma<br /></div>
    </div>
  );
}
