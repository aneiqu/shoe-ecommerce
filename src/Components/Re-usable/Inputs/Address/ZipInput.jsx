import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MailInput({ returnZip }) {
  const [ZipValue, setZipValue] = useState("");

  useEffect(() => {
    // if (ZipValue !== undefined) returnZip(ZipValue);
  }, [ZipValue]);

  return (
    <TextField
      value={ZipValue}
      className='w-max'
      variant='filled'
      label='E-Mail Address'
      margin='dense'
      onChange={(e) => setZipValue(e.target.value)}
    />
  );
}
