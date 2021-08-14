import { Header } from "../components/Header";
import Menu from "../components/Menu";
import useToggle from "../hooks/useToggle";
import { toast, ToastContainer } from "react-toastify";
import "../styles/tailwind-globals.css";
import { CartProvider } from "../hooks/useCart";

toast.configure();
function MyApp({ Component, pageProps }) {
  const [toggleIsOn, setToggleIsOn] = useToggle(false);
  return (
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col h-screen">
        <Header onClick={setToggleIsOn} />
        {toggleIsOn && <Menu />}
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </CartProvider>
  );
}

export default MyApp;
