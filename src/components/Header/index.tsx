import Link from "next/link";
import SignInButton from "./SignInButton";
import { FaPizzaSlice } from "react-icons/fa";

export function Header() {
  return (
    <header className="h-20 w-screen bg-red-500 text-white">
      <div className="mx-auto container flex items-center justify-between h-20 px-4 md:px-40">
        <Link href="/">
          <a className="text-3xl h-20 group flex justify-center items-center">
            fast
            <span className="text-6xl text-white group-hover:text-yellow-300 mb-4">
              .
            </span>
            food
            <FaPizzaSlice className="ml-2 text-white group-hover:text-yellow-300"/>
          </a>
        </Link>

        <div className="flex justify-center items-center gap-2">
          <SignInButton />

          <nav className="flex">
            <Link href="/">
              <a className="h-20 w-20 flex justify-center items-center hover:border-b-4 border-yellow-300 hover:font-bold">
                Home
              </a>
            </Link>

            <Link href="/">
              <a className="h-20 w-20 flex justify-center items-center hover:border-b-4 border-yellow-300 hover:font-bold">
                Menu
              </a>
            </Link>

            <Link href="/">
              <a className="h-20 w-20 flex justify-center items-center hover:border-b-4 border-yellow-300 hover:font-bold">
                About
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
