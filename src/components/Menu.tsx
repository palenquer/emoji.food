import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import Nav from "./Header/Nav";
import SignInButton from "./Header/SignInButton";

interface MenuProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Menu({onClick, children}: MenuProps) {
  const { cart } = useCart();

  return (
    <div className="absolute w-screen h-screen bg-red-500 flex flex-col md:flex-row justify-center items-center text-white z-40 overflow-hidden">
      <Link href="/cart">
        <a className="w-full h-16 border-b-2 border-red-400 mb-8" onClick={onClick}>
          <button
            type="button"
            className="flex gap-2 items-center md:hidden w-full justify-center"
          >
            <FaShoppingCart className="w-8 h-8" />

            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <h3 className="text-red-500 font-bold">{cart.length}</h3>
            </div>
          </button>
        </a>
      </Link>

      <div className="w-full mb-8 flex items-center justify-center">
        <SignInButton />
      </div>

      {children}
    </div>
  );
}
