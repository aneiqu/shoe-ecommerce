import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function BirthInput({ returnBirth }) {
  const [birthValue, setBirthValue] = useState("");

  useEffect(() => {
    // if (birthValue !== undefined) returnBirth(birthValue);
  }, [birthValue]);

  return (
    <TextField
      type='date'
      defaultValue={"2000-10-10"}
      className='min-w-[227px] w-max'
      variant='filled'
      label='Date of birth'
      margin='dense'
      onChange={(e) => setBirthValue(e.target.value)}
    />
  );
}
