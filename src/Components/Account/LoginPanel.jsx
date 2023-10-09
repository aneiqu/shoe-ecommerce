import { Button, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import MailInput from "../Re-usable/Inputs/MailInput";
import PasswordInput from "../Re-usable/Inputs/PasswordInput";
import FormFooter from "../Re-usable/FormFooter";

export default function LoginPanel({ setLogged }) {
  const handleLogin = () => {
    setLogged(true);
    localStorage.setItem("logged", true);
  };

  return (
    <div className='flex flex-col w-screen items-center pt-10'>
      <form className='flex flex-col w-min items-center'>
        <span className='text-xl m-2'>Welcome back!</span>
        <MailInput />
        <PasswordInput forgot={true} />

        <Button
          type='submit'
          className='bg-black m-2'
          variant='contained'
          onClick={handleLogin}
        >
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
      <FormFooter logoEnabled={true} />
    </div>
  );
}
