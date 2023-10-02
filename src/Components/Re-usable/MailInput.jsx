import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MailInput({ returnEmail }) {
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    if (returnEmail !== undefined) returnEmail(emailValue);
  }, [emailValue]);

  return (
    <TextField
      className='w-max'
      variant='filled'
      label='E-Mail Address'
      margin='dense'
      onChange={(e) => setEmailValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <MailOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
