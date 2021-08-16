import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { useRouter } from "next/router";

interface NavProps {
  onClick: () => void;
}

export default function Nav({ onClick }: NavProps) {
  const router = useRouter();

  return (
    <nav className="flex flex-col md:flex-row w-full md:w-auto justify-center items-center">
      <Link href="/">
        <a
          className={`${
            router.pathname == "/" && "border-b-4 border-yellow-300 font-bold"
          } h-20 w-64 md:w-20 text-xl md:text-base text-gray-100 flex flex-col justify-center items-center hover:font-bold hover:text-white"`}
          onClick={onClick}
        >
          <FaHome className="w-6 h-6 text-gray-100 hover:text-white " />
          Home
        </a>
      </Link>

      <Link href="/menu">
        <a
          className={`${
            router.pathname == "/menu" &&
            "border-b-4 border-yellow-300 font-bold"
          } h-20 w-64 md:w-20 text-xl md:text-base text-gray-100 flex flex-col justify-center items-center hover:font-bold hover:text-white"`}
          onClick={onClick}
        >
          <BiFoodMenu className="w-6 h-6 text-gray-100 hover:text-white" />
          Menu
        </a>
      </Link>
    </nav>
  );
}
