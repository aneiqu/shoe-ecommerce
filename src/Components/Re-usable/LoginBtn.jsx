import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginBtn(){
    return(
        <div className='flex flex-col items-center m-2'>
        <Link to="/myaccount">
          <Button variant='contained' className=' bg-black'>
            Log in
          </Button>
        </Link>
      </div>
    )
}