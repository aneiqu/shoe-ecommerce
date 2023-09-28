import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SmallMenu from "./SmallMenu";

export default function SmallDisplay() {
  return (
    <div className='flex w-full justify-between items-center'>
      <SmallMenu />
      <div>
        <img src='./' className='m-2'></img>
      </div>
      <div>
        <a>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='active:fill-slate-500 m-1'
          />
        </a>
        <a>
          <SearchIcon fontSize='large' className='active:fill-slate-500 m-1' />
        </a>
        <a>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='active:fill-slate-500 m-1'
          />
        </a>
      </div>
    </div>
  );
}
