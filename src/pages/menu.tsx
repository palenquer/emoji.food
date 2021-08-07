import Head from "next/head";
import { FaPizzaSlice } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

interface ItemsMenu {
  id: number;
  icon: string;
  name: string;
  ingredients?: string;
  price: number;
}

export default function Menu() {
  const [menu, setMenu] = useState([]);

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
            {menu.map((item: ItemsMenu) => {
              return (
                <div
                  key={item.id}
                  className="h-60 md:h-24 w-full bg-red-500 rounded-md text-white p-4 flex flex-col md:flex-row items-center justify-between"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center w-auto mb-4 md:mb-0">
                    <div className="w-20 h-20 md:h-full flex items-center justify-center">
                      <h1 className="text-5xl">{item.icon}</h1>
                    </div>

                    <div>
                      <h1 className="text-lg">{item.name}</h1>
                      <h3 className="text-red-300 text-sm">
                        {item.ingredients}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <h1 className="text-3xl w-20">${item.price}</h1>

                    <div className="w-40 bg-red-400 h-14 rounded-md flex justify-between items-center border-2 border-red-300">
                      <button className="h-full w-20 bg-red-500 rounded-l-md text-3xl hover:bg-red-400 border-r-2 border-red-300">
                        +
                      </button>

                      <button className="h-full w-20 bg-red-500 rounded-r-md text-3xl hover:bg-red-400">
                        -
                      </button>
                    </div>
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
