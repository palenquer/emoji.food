import React from "react";
import { Product } from "../../types";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../util/format";

export default function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, currentValue) => {
    return sum + currentValue.price;
  }, 0);

  return (
    <main className="mx-auto container px-4 lg:px-40 flex flex-col flex-grow overflow-hidden">
      <div className="bg-white flex flex-col h-full items-center p-4 md:px-16">
        <section className="h-auto w-full flex flex-col overflow-y-auto scrollbar-hide gap-4 border-b-2 border-gray-300 pb-2">
          {cart.map((item: Product) => {
            {
              cart.filter((product) => product.id === item.id).length > 1;
            }
            return (
              <div
                key={item.id}
                className="h-20 w-full bg-gray-100 rounded-md pl-4 py-4 flex flex-row items-center justify-between"
              >
                <div>
                  <h1>{item.name}</h1>
                  <h2 className="text-green-400 font-bold ">
                    {formatPrice(item.price)}
                  </h2>
                </div>

                <div className="w-20 h-full flex items-center justify-center border-l-2 border-gray-300">
                  <h1 className="text-5xl">{item.icon}</h1>
                </div>
              </div>
            );
          })}

          <div className="ml-auto mt-8">
            <span className="text-grey-800 text-xl">Total</span>

            <h1 className="ml-auto text-green-400 font-bold">
              {formatPrice(totalPrice)}
            </h1>
          </div>
        </section>

        <button className="bg-red-500 h-16 w-36 text-white rounded-lg text-lg font-semibold filter hover:brightness-90 transition ml-auto mt-8">
          Finish
        </button>
      </div>
    </main>
  );
}
