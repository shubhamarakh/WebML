"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu  setActive={setActive} >
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active}
        item="Home">

        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active}
        item="Form Data">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Data_form">Form Page</HoveredLink>
            </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active}
        item="About">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/About">About Page</HoveredLink>
            </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active}
        item="History">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/History">History Page</HoveredLink>
            </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active}
        item="LogIn">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/LogIn">LogIn page</HoveredLink>
            </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
