import { useEffect, useState } from "react";
import DisplayLarge from "./NavbarLarge/DisplayLarge";
import DisplaySmall from "./NavbarSmall/DisplaySmall";

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
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
