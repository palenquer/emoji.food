import { Header } from "../components/Header";
import Menu from "../components/Menu";
import useToggle from "../hooks/useToggle";
import { Flip, toast, ToastContainer } from "react-toastify";
import "../styles/tailwind-globals.css";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../hooks/useCart";
import Nav from "../components/Header/Nav";

const contextClass = {
  success: "bg-green-400",
  error: "bg-red-400",
  info: "bg-blue-400",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

toast.configure();
function MyApp({ Component, pageProps }) {
  const [toggleIsOn, setToggleIsOn] = useToggle(false);

  return (
    <>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-2 min-h-20 rounded-md justify-between overflow-hidden cursor-pointer mb-4 md:w-full w-80"
        }
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        transition={Flip}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <CartProvider>
        <div className="flex flex-col h-screen">
          <Header onClick={setToggleIsOn}>
            <Nav onClick={setToggleIsOn} />
          </Header>
          {toggleIsOn && (
            <Menu onClick={setToggleIsOn}>
              <Nav onClick={setToggleIsOn} />
            </Menu>
          )}
          <Component {...pageProps} />
        </div>
      </CartProvider>
    </>
  );
}

export default MyApp;
