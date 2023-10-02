import { InputAdornment, TextField } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import PasswordInput from "../Re-usable/PasswordInput";
import MailInput from "../Re-usable/MailInput";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

export default function RegisterAccount() {
  return (
    <div>
      <Navbar />
      <form className='flex flex-col w-screen items-center pt-10'>
        <span className='text-xl'>Welcome!</span>
        <TextField
          className='w-max'
          variant='filled'
          label='First name'
          margin='dense'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AssignmentIndOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className='w-max'
          variant='filled'
          label='Last name'
          margin='dense'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AssignmentIndOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <MailInput />
        <PasswordInput />
      </form>
    </div>
  );
}
