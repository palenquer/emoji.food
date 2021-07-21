import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row w-full md:w-auto justify-center items-center">
      <Link href="/">
        <a className="h-20 w-64 md:w-20 text-xl md:text-base flex justify-center items-center hover:border-b-2 border-yellow-300 hover:font-bold">
          Home
        </a>
      </Link>

      <Link href="/">
        <a className="h-20 w-64 md:w-20 text-xl md:text-base flex justify-center items-center hover:border-b-2 border-yellow-300 hover:font-bold">
          Menu
        </a>
      </Link>

      <Link href="/">
        <a className="h-20 w-64 md:w-20 text-xl md:text-base flex justify-center items-center hover:border-b-2 border-yellow-300 hover:font-bold">
          About
        </a>
      </Link>
    </nav>
  );
}
