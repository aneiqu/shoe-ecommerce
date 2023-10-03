import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MiddleNameInput({ returnMiddleName }) {
  const [MiddleNameValue, setMiddleNameValue] = useState("");

  useEffect(() => {
    // if (MiddleNameValue !== undefined) returnMiddleName(MiddleNameValue);
  }, [MiddleNameValue]);

  return (
    <TextField
      value={MiddleNameValue}
      className='w-max'
      variant='filled'
      label='Middle Name'
      margin='dense'
      onChange={(e) => setMiddleNameValue(e.target.value)}
    />
  );
}
