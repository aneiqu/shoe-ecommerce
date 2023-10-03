import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function PhoneInput({ returnPhoneNumber }) {
  const [PhoneNumberValue, setPhoneNumberValue] = useState("");

  useEffect(() => {
    // if (PhoneNumberValue !== undefined) returnPhoneNumber(PhoneNumberValue);
  }, [PhoneNumberValue]);

  return (
    <TextField
      type='number'
      value={PhoneNumberValue}
      className='w-max'
      variant='filled'
      label='Phone Number'
      margin='dense'
      onChange={(e) => setPhoneNumberValue(e.target.value)}
    />
  );
}
