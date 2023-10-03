import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function PasswordInput({ returnPassword, forgot }) {
  const [passwordValue, setPasswordValue] = useState("");

  useEffect(() => {
    if (returnPassword !== undefined) returnPassword(passwordValue);
  }, [passwordValue]);

  return (
    <div>
      <TextField
        type='password'
        value={passwordValue}
        className='w-max'
        variant='filled'
        label='Password'
        margin='dense'
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <div className='flex w-full justify-start'>
        {forgot && (
          <span className='flex text-left pb-1 text-blue-700 text-sm font-bold cursor-pointer border-b-2 border-transparent transition-all duration-100 hover:border-b-blue-700'>
            Forgot password?
          </span>
        )}
      </div>
    </div>
  );
}
