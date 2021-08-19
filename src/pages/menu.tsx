import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "../../types";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../util/format";
import Link from "next/link";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const { cart, addProduct, removeProduct } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("/api/menu");
      const data = await response.json();
      setMenu(data);
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Head>
        <title>Menu | fast.food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto container px-4 lg:px-40 flex flex-col flex-grow overflow-hidden">
        <div className="bg-white flex flex-col md:flex-row h-full items-center p-4 md:px-16">
          <section className="h-full w-full flex flex-col overflow-y-auto scrollbar-hide gap-4">
            {menu.map((item: Product) => {
              return (
                <div
                  key={item.id}
                  className="h-64 md:h-24 w-full bg-gray-100 rounded-md p-4 flex flex-col md:flex-row items-center justify-between"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center w-full mb-4 md:mb-0">
                    <div className="md:w-20 h-20 md:h-full flex items-center justify-center md:border-r-2 border-b-2 border-gray-300 md:border-b-0 w-full mb-2 md:mb-0">
                      <h1 className="text-5xl">{item.icon}</h1>
                    </div>

                    <div className="md:pl-4 flex justify-between w-full md:items-center">
                      <div>
                        <h1 className="text-lg">{item.name}</h1>
                        <h3 className="text-gray-400 text-sm">
                          {item.ingredients}
                        </h3>
                      </div>

                      <h1 className="md:w-32 text-green-400 font-bold">
                        {formatPrice(item.price)}
                      </h1>
                    </div>
                  </div>

                  <div className="w-40  h-14 rounded-md flex justify-between items-center border-2 border-gray-300">
                    <button
                      className="h-full w-20 rounded-r-md text-5xl filter hover:brightness-90 text-red-500 disabled:text-gray-300 disabled:cursor-default"
                      disabled={
                        cart.filter((product) => product.id === item.id)
                          .length <= 0
                      }
                      onClick={() => removeProduct(item.id, item)}
                    >
                      -
                    </button>

                    <span className="w-10 h-full flex items-center justify-center font-bold">
                      {cart.filter((product) => product.id === item.id).length}
                    </span>

                    <button
                      className="h-full w-20 rounded-l-md text-3xl filter hover:brightness-90 text-red-500 disabled:text-gray-300 disabled:cursor-default"
                      onClick={() => addProduct(item)}
                      disabled={
                        cart.filter((product) => product.id === item.id)
                          .length >= 9
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            <Link href="/cart">
              <a className="ml-auto">
                <button className="bg-red-500 h-16 w-36 text-white rounded-lg text-lg font-semibold filter hover:brightness-90 transition">
                  Go to cart  
                </button>
              </a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
