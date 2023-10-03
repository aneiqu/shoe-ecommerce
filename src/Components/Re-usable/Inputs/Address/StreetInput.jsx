import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MailInput({ returnStreet }) {
  const [StreetValue, setStreetValue] = useState("");

  useEffect(() => {
    // if (StreetValue !== undefined) returnStreet(StreetValue);
  }, [StreetValue]);

  return (
    <TextField
      value={StreetValue}
      className='w-max'
      variant='filled'
      label='E-Mail Address'
      margin='dense'
      onChange={(e) => setStreetValue(e.target.value)}
    />
  );
}
