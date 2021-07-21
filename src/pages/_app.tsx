import { Header } from "../components/Header";
import Menu from "../components/Menu";
import useToggle from "../hooks/useToggle";
import "../styles/tailwind-globals.css";

function MyApp({ Component, pageProps }) {

  const [toggleIsOn, setToggleIsOn] = useToggle(false);
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header onClick={setToggleIsOn}/>
        {toggleIsOn && <Menu />}
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
