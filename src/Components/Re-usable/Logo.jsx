import { Link } from "react-router-dom";
import LogoPng from "../../Images/Logo/Logo.png";

export default function Logo() {
  return (
    <Link to='/'>
      <img src={LogoPng} className='m-2 h-12 w-14 md:h-14 md:w-14' />
    </Link>
  );
}
