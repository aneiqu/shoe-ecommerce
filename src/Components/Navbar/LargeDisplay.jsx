import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function LargeDisplay() {
  return (
    <div className='flex flex-row'>
      <form className='flex items-center bg-slate-50 rounded-lg w-52 m-2'>
        <input className='w-4/5 h-8 border-solid rounded-md p-2 focus:outline-none'></input>
        <button type='submit'>
          <SearchIcon fontSize='large' />
        </button>
      </form>
      <a href='./'>
        <ShoppingCartOutlinedIcon className='fill-white scale-150 m-4' />
      </a>
      <a href='./' className='cursor-pointer'>
        <PersonOutlineOutlinedIcon className='fill-white scale-150 m-4' />
      </a>
    </div>
  );
}
