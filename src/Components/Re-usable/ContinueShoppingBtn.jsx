import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContinueShoppingBtn() {
  return (
    <div className='flex flex-col items-center  mt-10'>
      <Link to={"/"}>
        <Button variant='contained' className='mt-10 bg-black'>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
