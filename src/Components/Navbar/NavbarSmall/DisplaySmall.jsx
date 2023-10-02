import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SmallMenu from "./MenuSmall";
import { Link } from "react-router-dom";
import Logo from "../../Re-usable/Logo";

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
        <Link to='/cart'>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='m-1 active:bg-slate-300'
          />
        </Link>
      </div>
    </div>
  );
}
