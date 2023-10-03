import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function NameInput({ returnName }) {
  const [NameValue, setNameValue] = useState("");

  useEffect(() => {
    // if (NameValue !== undefined) returnName(NameValue);
  }, [NameValue]);

  return (
    <TextField
      value={NameValue}
      className='w-max'
      variant='filled'
      label='First Name'
      margin='dense'
      onChange={(e) => setNameValue(e.target.value)}
    />
  );
}
