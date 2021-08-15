import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PizzaSharing from "../assets/PizzaSharing.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | fast.food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto container px-4 lg:px-40 flex flex-col flex-grow">
        <div className="bg-white flex flex-col md:flex-row h-full items-center p-4 md:px-16 justify-around">
          <section className="w-full text-center md:text-left">
            <h1 className="text-4xl mb-2">👋 Hey, welcome!</h1>

            <h2 className="text-2xl mb-4">
              Are you hungry? So take a piece! 🍕
            </h2>

            <Link href="/menu">
              <a>
                <button className="bg-red-500 h-12 w-64 rounded-full text-white font-bold filter hover:brightness-90 transition">Click here to see our menu</button>
              </a>
            </Link>
          </section>

          <Image src={PizzaSharing} alt="Pizza Sharing" quality={100} />
        </div>
      </main>
    </>
  );
}
