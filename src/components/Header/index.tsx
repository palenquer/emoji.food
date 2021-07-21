import Link from "next/link";
import SignInButton from "./SignInButton";
import { FaPizzaSlice } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Nav from "./Nav";

interface HeaderProps {
  onClick: () => void;
}

export function Header({onClick}: HeaderProps) {
  return (
    <header className="h-20 w-screen bg-red-500 text-white z-50">
      <div className="mx-auto container flex items-center justify-between h-20 px-4 lg:px-40 relative">
        <Link href="/">
          <a className="text-3xl h-20 flex justify-center items-center">
            fast
            <span className="text-6xl text-yellow-300 mb-5 transition">
              .
            </span>
            food
            <FaPizzaSlice className="ml-2 text-yellow-300 transition" />
          </a>
        </Link>

        <button className="md:hidden h-20 w-20 flex justify-center items-center absolute right-0" onClick={onClick}>
          <HiMenuAlt3 className="w-12 h-12" />
        </button>

        <div className="hidden md:flex justify-center items-center gap-2">
          <SignInButton />

          <Nav />
        </div>
      </div>
    </header>
  );
}
