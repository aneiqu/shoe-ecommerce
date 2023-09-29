import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../../../Images/Logo/Logo.png";
import MenSmall from "./MenSmall";
import WomenSmall from "./WomenSmall";
import { useState } from "react";

export default function SmallMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='group'>
      <a className='m-2 active:bg-slate-300' onClick={toggleVisibility}>
        <MenuOutlinedIcon fontSize='large' />
      </a>
      <div
        className={`absolute left-0 top-0 w-0 h-screen bg-white duration-200 ${
          isVisible ? "visible w-[100%]" : "invisible"
        }`}
      >
        <div>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex w-11/12 justify-center'>
              <img src={Logo} className='m-1 w-12 h-12'></img>
            </div>
            <a
              className='m-4 active:bg-slate-300 w-1/12 flex align-middle'
              onClick={toggleVisibility}
            >
              <CloseOutlinedIcon fontSize='large' className='' />
            </a>
          </div>
          <hr />
          <MenSmall />
          <WomenSmall />
        </div>
      </div>
    </div>
  );
}
