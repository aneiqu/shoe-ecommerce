import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import WomenLarge from "./WomenLarge";
import MenLarge from "./MenLarge";
import { Link } from "react-router-dom";
import Logo from "../../Re-usable/Logo";
import NavMyAccountLarge from "./NavMyAccountLarge";

export default function LargeDisplay() {
  return (
    <div className='flex flex-row items-center w-full justify-between'>
      <div className='w-1/7'>
        <Logo />
      </div>
      <div className='flex flex-row items-center justify-around w-1/4 h-16'>
        <MenLarge />
        <WomenLarge />
      </div>
      <div className='w-2/4 flex flex-row justify-end items-center h-16'>
        <form className='relative px-2'>
          <SearchIcon fontSize='medium' className='absolute my-1.5 ml-0.5' />
          <input
            className='border-0 py-1.5 pl-7 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-black focus:pr-20 duration-150'
            placeholder='Search'
          ></input>
        </form>
        <div className='flex items-center h-full'>
          <NavMyAccountLarge />
        </div>
        <div className='flex items-center h-full'>
          <Link to='/cart' className='px-2'>
            <ShoppingBagOutlinedIcon
              fontSize='large'
              className='scale-90 hover:border-black border-b-2 border-transparent hover:scale-125 transition-all duration-150 mr-3'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
