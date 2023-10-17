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
        <Link to='/myaccount' className='m-1'>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='active:bg-slate-300'
          />
        </Link>
        <Link to='/' className='m-1'>
          <SearchIcon fontSize='large' className='active:bg-slate-300' />
        </Link>
        <Link to='/cart' className='m-1'>
          <ShoppingBagOutlinedIcon
            fontSize='large'
            className='active:bg-slate-300'
          />
        </Link>
      </div>
    </div>
  );
}
