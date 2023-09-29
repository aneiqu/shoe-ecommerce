import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import WomenLarge from "./WomenLarge";
import MenLarge from "./MenLarge";
import Logo from "../../../Images/Logo/Logo.png";
import { Link } from "react-router-dom";

export default function LargeDisplay() {
  return (
    <div className='flex flex-row items-center w-full justify-between'>
      <div className='w-1/7'>
        <Link to='/'>
          <img src={Logo} className='m-2 h-14 w-14' />
        </Link>
      </div>
      <div className='flex flex-row items-center justify-around w-1/4 h-16'>
        <MenLarge />
        <WomenLarge />
      </div>
      <div className='w-2/4 flex flex-row justify-end items-center'>
        <form className='relative px-2'>
          <SearchIcon fontSize='medium' className='absolute my-1.5 ml-0.5' />
          <input
            className='border-0 py-1.5 pl-7 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-black focus:pr-20 duration-150'
            placeholder='Search'
          ></input>
        </form>
        <Link to='/cart' className='px-2 '>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='scale-90 hover:fill-slate-500 hover:scale-125 transition-all duration-150'
          />
        </Link>
        <Link to='/myaccount' className='px-2 '>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='scale-90 hover:fill-slate-500 hover:scale-125 transition-all duration-150'
          />
        </Link>
      </div>
    </div>
  );
}
