import { Button, InputAdornment, TextField } from "@mui/material";
import Logo from "../Re-usable/Logo";
import { Link } from "react-router-dom";

import MailInput from "../Re-usable/MailInput";
import PasswordInput from "../Re-usable/PasswordInput";

export default function LoginPanel() {
  return (
    <div className='flex flex-col w-screen items-center pt-10'>
      <form className='flex flex-col w-min items-center'>
        <span className='text-xl m-2'>Welcome back!</span>
        <MailInput />
        <PasswordInput />

        <Button type='submit' className='bg-black m-2' variant='contained'>
          Log in
        </Button>
      </form>
      <hr className='w-screen' />
      <div className='flex flex-col items-center m-4 w-screen'>
        <span className='text-xl'>Your first time here?</span>
        <Link className='flex w-screen justify-center' to='/myaccount/register'>
          <Button
            type='submit'
            color='inherit'
            className='w-3/5 md:w-2/5 m-5'
            variant='outlined'
          >
            Register now
          </Button>
        </Link>
      </div>
      <div className='flex flex-row w-2/3 justify-around items-center'>
        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            About us
          </span>
        </div>

        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            Privacy Policy
          </span>
        </div>
        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            Terms and Conditions
          </span>
        </div>
      </div>
      <div className='pt-10'>
        <Logo />
      </div>
    </div>
  );
}
