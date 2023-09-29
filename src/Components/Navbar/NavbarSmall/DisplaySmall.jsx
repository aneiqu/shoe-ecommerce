import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SmallMenu from "./MenuSmall";
import Logo from "../../../Images/Logo/Logo.png";
import { Link } from "react-router-dom";

export default function SmallDisplay() {
  return (
    <div className='flex w-full justify-between items-center'>
      <SmallMenu />
      <div>
        <Link to='/'>
          <img src={Logo} className='m-2 w-12 h-12'></img>
        </Link>
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
