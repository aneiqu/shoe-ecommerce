import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function LastNameInput({ returnLastName }) {
  const [LastNameValue, setLastNameValue] = useState("");

  useEffect(() => {
    // if (LastNameValue !== undefined) returnLastName(LastNameValue);
  }, [LastNameValue]);

  return (
    <TextField
      value={LastNameValue}
      className='w-max'
      variant='filled'
      label='Last Name'
      margin='dense'
      onChange={(e) => setLastNameValue(e.target.value)}
    />
  );
}
