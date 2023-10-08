import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function NavMyAccountLarge() {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  function handleLogOut() {
    localStorage.setItem("logged", false);
    setLoggedIn(false);
  }

  return (
    <div className='group'>
      <div className='h-16 flex items-center  '>
        <Link to='/myaccount' className='px-2 '>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='scale-90 group-hover:scale-125  group-hover:border-b-2 border-black transition-all duration-150'
          />
        </Link>
      </div>
      <div className='absolute flex flex-col invisible group-hover:visible w-44 right-12 bg-white border-2 delay-75'>
        <Link
          to='/myaccount'
          className='p-2 w-full hover:bg-gray-300 cursor-pointer text-lg'
        >
          <span>My account</span>
        </Link>
        <Link to='/myaccount/orders' className='p-2 w-full hover:bg-gray-300 cursor-pointer text-lg'>
          <span>Orders</span>
        </Link>
        <Link to='/myaccount/returns' className='p-2 w-full hover:bg-gray-300 cursor-pointer text-lg' >
          <span>Return product</span>
        </Link>
        <div className='p-2 w-full hover:bg-gray-300 cursor-pointer text-lg'>
          <Link>FAQ</Link>
        </div>
        {JSON.parse(localStorage.getItem("logged")) && (
          <>
            <hr className='w-full' />
            <div className='p-2 w-full'>
              <Link to={"/"}>
                <span
                  className='text-lg text-blue-700 cursor-pointer border-b-2 border-transparent hover:border-b-blue-700 transition-all duration-100'
                  onClick={handleLogOut}
                >
                  Log out
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
