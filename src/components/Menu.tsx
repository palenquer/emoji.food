import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Nav from "./Header/Nav";
import SignInButton from "./Header/SignInButton";

export default function Menu() {
  return (
    <div className="absolute w-screen h-screen bg-red-500 flex flex-col md:flex-row justify-center items-center text-white z-40 overflow-hidden">
      <button type="button" className="flex gap-2 items-center md:hidden mb-8 w-full justify-center h-20 border-b-2 border-red-400">
        <FaShoppingCart className="w-8 h-8" />

        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
          <h3 className="text-red-500 font-bold">0</h3>
        </div>
      </button>

      <div className="w-full mb-8 flex items-center justify-center">
        <SignInButton />
      </div>

      <Nav />
    </div>
  );
}
