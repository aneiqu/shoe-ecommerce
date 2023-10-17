import { useEffect, useState } from "react";
import DisplayLarge from "./NavbarLarge/NavDisplayLarge";
import DisplaySmall from "./NavbarSmall/NavDisplaySmall";

export default function Navbar({ isLogged, setLogged }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Navbar = screenWidth >= 640 ? <DisplayLarge /> : <DisplaySmall />;

  return (
    <nav className='flex justify-between w-screen h-16 items-center border-b-[1px]'>
      {Navbar}
    </nav>
  );
}
