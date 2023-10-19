import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Re-usable/Logo";
import MenSmall from "./MenSmall";
import WomenSmall from "./WomenSmall";
export default function SmallMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const logged = localStorage.getItem("logged");

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const [loggedIn, setLoggedIn] = useState(JSON.parse(logged));

  function handleLogOut() {
    localStorage.setItem("logged", false);
    setLoggedIn(false);
  }

  useEffect(() => {
    setLoggedIn(JSON.parse(logged));
  }, [logged]);

  useEffect(() => {
    isVisible ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [isVisible]);

  return (
    <div className='group '>
      <div className='m-2 active:bg-slate-300' onClick={toggleVisibility}>
        <MenuOutlinedIcon
          sx={{ stroke: "#ffffff", strokeWidth: 1 }}
          fontSize='large'
        />
      </div>
      <div
        className={`fixed z-10 overflow-hidden left-0 top-0 w-0 h-screen bg-white duration-300 ${
          isVisible ? "visible w-[100%]" : "invisible"
        }`}
      >
        <div
          className={`flex flex-col h-full justify-between ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          <div>
            <div className='flex justify-between h-16 items-center'>
              <div className='flex w-11/12 justify-center'>
                <Logo />
              </div>
              <CloseOutlinedIcon
                sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                fontSize='large'
                className='m-4 active:bg-slate-300'
                onClick={toggleVisibility}
              />
            </div>
            <hr />
            <MenSmall />
            <WomenSmall />
          </div>

          <div className='flex flex-col m-2'>
            <div className='flex flex-row items-center justify-between'>
              <span className='text-lg font-normal cursor-pointer my-2'>
                Help
              </span>
              <ArrowForwardIosOutlinedIcon
                sx={{ stroke: "#ffffff", strokeWidth: 1 }}
              />
            </div>
            <hr />
            {loggedIn && (
              <Link className='my-2' to={"/"}>
                <span
                  className='text-lg font-normal cursor-pointer'
                  onClick={handleLogOut}
                >
                  Log out
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
