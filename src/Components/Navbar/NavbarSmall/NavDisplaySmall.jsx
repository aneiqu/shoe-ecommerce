import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Logo from "../../Re-usable/Logo";
import SmallMenu from "./MenuSmall";

export default function SmallDisplay() {
  return (
    <div className='flex w-full justify-between items-center'>
      <SmallMenu />
      <div>
        <Logo />
      </div>
      <div>
        <Link to='/myaccount'>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='m-1 active:bg-slate-300'
          />
        </Link>
        <a>
          <SearchIcon fontSize='large' className='m-1 active:bg-slate-300' />
        </a>
        <Link to='/cart' className='px-2'>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='m-1 active:bg-slate-300'
          />
        </Link>
      </div>
    </div>
  );
}
