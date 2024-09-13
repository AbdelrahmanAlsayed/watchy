"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <header className=" bg-bgFirst text-textFirst border-b border-b-bgSixth">
      <nav className="container flex justify-between items-center relative py-6">
        <Link
          href="/"
          className="font-bold text-xl md:text-2xl lg:text-3xl tracking-wide"
        >
          Watchy
        </Link>

        <input type="checkbox" id="check" className="hidden peer" />

        <ul
          className="
              fixed top-0 right-0 bottom-0 w-full bg-bgFirst text-textFirst flex flex-col items-center justify-center space-y-8 z-50 
              transition-opacity duration-500 transform translate-x-full peer-checked:translate-x-0
              opacity-0 peer-checked:opacity-100
              lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent  lg:relative
              lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto lg:w-auto lg:h-auto lg:inset-auto
            "
        >
          <Link
            href="/"
            className="md:text-lg text-textFifth hover:text-textSecond"
          >
            item 1
          </Link>
          <Link
            href="/"
            className="md:text-lg text-textFifth hover:text-textSecond"
          >
            item 2
          </Link>
          <Link
            href="/"
            className="md:text-lg text-textFifth hover:text-textSecond"
          >
            item 3
          </Link>
          <Link
            href="/"
            className="md:text-lg text-textFifth hover:text-textSecond"
          >
            item 4
          </Link>
          <Link
            href="/"
            className="md:text-lg text-textFifth hover:text-textSecond"
          >
            item 5
          </Link>

          <label
            htmlFor="check"
            className="lg:hidden close-icon  absolute top-5 right-10 cursor-pointer"
          >
            <X size={30} strokeWidth={2} />
          </label>
        </ul>

        <label
          htmlFor="check"
          className="lg:hidden absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
        >
          <Menu size={30} strokeWidth={2} />
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
