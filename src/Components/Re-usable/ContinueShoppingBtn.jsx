import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContinueShoppingBtn({ margin }) {
  return (
    <div className={`flex flex-col items-center  ${margin ? margin : "mt-20"}`}>
      <Link to={"/"}>
        <Button variant='contained' className=' bg-black'>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
