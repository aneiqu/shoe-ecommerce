import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Logo from "../../Re-usable/Logo";
import SmallMenu from "./MenuSmall";
import SearchSmall from "./SerachSmall";

export default function SmallDisplay() {
  return (
    <div className='flex w-full justify-between items-center'>
      <SmallMenu />
      <div>
        <Logo />
      </div>
      <div className='flex flex-row'>
        <Link to='/myaccount' className='m-1'>
          <PersonOutlineOutlinedIcon
            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
            fontSize='large'
            className='active:bg-slate-300'
          />
        </Link>
        <SearchSmall />
        <Link to='/cart' className='m-1'>
          <ShoppingBagOutlinedIcon
            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
            fontSize='large'
            className='active:bg-slate-300'
          />
        </Link>
      </div>
    </div>
  );
}
