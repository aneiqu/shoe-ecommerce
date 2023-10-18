import { Link } from "react-router-dom";
import LogoPng from "../../Images/Logo/Logo.png";

export default function Logo() {
  return (
    <Link to='/'>
      <div className='flex items-center'>
        <img
          alt='logo'
          src={LogoPng}
          className='m-2 h-10 w-10 md:h-12 md:w-12'
        />
      </div>
    </Link>
  );
}
