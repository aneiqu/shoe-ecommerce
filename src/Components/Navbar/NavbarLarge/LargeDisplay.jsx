import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import WomenLarge from "./WomenLarge";
import MenLarge from "./MenLarge";

export default function LargeDisplay() {
  return (
    <div className='flex flex-row items-center w-full justify-between'>
      <div className='w-1/7'>
        <img src='./' className='m-2'></img>
      </div>
      <div className='flex flex-row items-center justify-around w-1/4'>
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
        <a href='./' className='px-2 '>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='scale-90 hover:fill-slate-500 hover:scale-125 transition-all duration-150'
          />
        </a>
        <a href='./' className='px-2 '>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='scale-90 hover:fill-slate-500 hover:scale-125 transition-all duration-150'
          />
        </a>
      </div>
    </div>
  );
}
