import Link from "next/link";

interface NavProps {
  onClick: () => void;
}

export default function Nav({onClick}: NavProps) {
  return (
    <nav className="flex flex-col md:flex-row w-full md:w-auto justify-center items-center">
      <Link href="/">
        <a className="h-20 w-64 md:w-20 text-xl md:text-base text-gray-100 flex justify-center items-center hover:border-b-2 border-yellow-300 hover:font-bold hover:text-white" onClick={onClick}>
          Home
        </a>
      </Link>

      <Link href="/menu">
        <a className="h-20 w-64 md:w-20 text-xl md:text-base text-gray-100 flex justify-center items-center hover:border-b-2 border-yellow-300 hover:font-bold hover:text-white" onClick={onClick}>
          Menu
        </a>
      </Link>
    </nav>
  );
}
