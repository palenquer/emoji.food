import Link from "next/link";
import SignInButton from "./SignInButton";
import { FaPizzaSlice } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

interface HeaderProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Header({ onClick, children }: HeaderProps) {
  const { cart } = useCart();

  return (
    <header className="h-20 w-screen bg-red-500 text-white z-50">
      <div className="mx-auto container flex items-center justify-between h-20 pl-4 lg:px-40">
        <Link href="/">
          <a className="text-3xl h-20 flex justify-center items-center">
            fast
            <span className="text-6xl text-yellow-300 mb-5 transition">.</span>
            food
            <FaPizzaSlice className="ml-2 text-yellow-300 transition" />
          </a>
        </Link>

        <button
          className="md:hidden h-20 w-20 flex justify-center items-center ml-auto relative"
          onClick={onClick}
        >
          <HiMenuAlt3 className="w-12 h-12" />
          {cart.length > 0 && (
            <span className="absolute top-1 left-0 bg-red-400 rounded-full p-2 h-8 w-8 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>

        <div className="hidden md:flex justify-center items-center gap-2">
          <SignInButton />

          {children}
        </div>

        <Link href="/cart">
          <a>
            <button type="button" className="hidden md:flex gap-2 items-center">
              <FaShoppingCart className="w-6 h-6" />

              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <h3 className="text-red-500 font-bold">{cart.length}</h3>
              </div>
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
}
