import React from "react";
import Nav from "./Header/Nav";
import SignInButton from "./Header/SignInButton";

export default function Menu() {
  return (
    <div className="absolute w-screen h-screen bg-red-500 flex flex-col md:flex-row justify-center items-center text-white z-40 overflow-hidden">
      <div className="w-full mb-8 flex items-center justify-center">
        <SignInButton />
      </div>

      <Nav />
    </div>
  );
}
