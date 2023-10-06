import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContinueShoppingBtn() {
  return (
    <div className='flex flex-col items-center  mt-20'>
      <Link to={"/"}>
        <Button variant='contained' className=' bg-black'>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
