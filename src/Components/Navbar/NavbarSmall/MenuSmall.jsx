import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenSmall from "./MenSmall";
import WomenSmall from "./WomenSmall";
import React, { useState } from "react";
import Logo from "../../Re-usable/Logo";
export default function SmallMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='group z-10'>
      <div className='m-2 active:bg-slate-300' onClick={toggleVisibility}>
        <MenuOutlinedIcon fontSize='large' />
      </div>
      <div
        className={`absolute left-0 top-0 w-0 h-screen bg-white duration-200 ${
          isVisible ? "visible w-[100%]" : "invisible"
        }`}
      >
        <div>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex w-11/12 justify-center'>
              <Logo />
            </div>
            <a className='m-4 active:bg-slate-300' onClick={toggleVisibility}>
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
