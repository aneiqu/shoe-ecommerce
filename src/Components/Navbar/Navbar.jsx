import { useEffect, useState } from "react";
import DisplayLarge from "./NavbarLarge/DisplayLarge";
import DisplaySmall from "./NavbarSmall/DisplaySmall";

export default function Navbar() {
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

  // Changing what is displayed based on current screenwidth
  const Navbar = screenWidth >= 640 ? <DisplayLarge /> : <DisplaySmall />;

  return (
    <nav className='flex justify-between w-screen h-16 items-center shadow-md'>
      {Navbar}
    </nav>
  );
}
