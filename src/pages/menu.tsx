import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "../../types";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../hooks/useCart";

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
        <div className="bg-white flex flex-col md:flex-row h-full items-center p-4 md:px-16 justify-around">
          <section className="h-full w-full flex flex-col overflow-y-auto scrollbar-hide gap-4">
            {menu.map((item: Product) => {
              return (
                <div
                  key={item.id}
                  className="h-60 md:h-24 w-full bg-red-500 rounded-md text-white p-4 flex flex-col md:flex-row items-center justify-between"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center w-full mb-4 md:mb-0">
                    <div className="md:w-20 h-20 md:h-full flex items-center justify-center md:border-r-2 border-b-2 border-red-300 md:border-b-0 w-full mb-2 md:mb-0">
                      <h1 className="text-5xl">{item.icon}</h1>
                    </div>

                    <div className="md:pl-4 flex justify-between w-full md:items-center">
                      <div>
                        <h1 className="text-lg">{item.name}</h1>
                        <h3 className="text-red-300 text-sm">
                          {item.ingredients}
                        </h3>
                      </div>

                      <h1 className="md:w-24">${item.price}</h1>
                    </div>
                  </div>

                  <div className="w-40 bg-red-400 h-14 rounded-md flex justify-between items-center border-2 border-red-300">
                    <button
                      className="h-full w-20 bg-red-500 rounded-l-md text-3xl hover:bg-red-600 "
                      onClick={() => addProduct(item)}
                    >
                      +
                    </button>

                    <span className="w-10 bg-red-500 h-full flex items-center justify-center border-r-2 border-l-2 border-red-300">
                      0
                    </span>

                    <button
                      className="h-full w-20 bg-red-500 rounded-r-md text-3xl hover:bg-red-600"
                      onClick={() => removeProduct(item.id, item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
