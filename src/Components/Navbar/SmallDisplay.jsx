import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function SmallDisplay() {
  return (
    <div className='flex flex-row items-center'>
      <form className='flex items-center bg-slate-50 rounded-lg w-40 m-2'>
        <input className='w-3/4 h-8 border-solid rounded-md p-2 focus:outline-none'></input>
        <button type='submit'>
          <SearchIcon fontSize='large' />
        </button>
      </form>
      <div className='group'>
        <>
          <MenuOutlinedIcon
            className='fill-white scale-125 mx-2 hover:-rotate-90 duration-100 transition-all'
            fontSize='large'
          />
        </>
        <div className='invisible absolute flex flex-col w-full h-30 py-2 bg-slate-800 shadow-xl group-hover:visible'>
          <a href='./'>
            <ShoppingCartOutlinedIcon
              className='fill-white scale-125 m-2'
              fontSize='large'
            />
          </a>
          <a href='./'>
            <PersonOutlineOutlinedIcon
              className='fill-white scale-125 m-2'
              fontSize='large'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
