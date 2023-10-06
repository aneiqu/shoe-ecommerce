import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MailInput({ returnEmail }) {
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    if (returnEmail !== undefined) returnEmail(emailValue);
  }, [emailValue]);

  return (
    <TextField
      value={emailValue}
      className='w-max'
      variant='filled'
      label='E-Mail Address'
      margin='dense'
      onChange={(e) => setEmailValue(e.target.value)}
    />
  );
}
