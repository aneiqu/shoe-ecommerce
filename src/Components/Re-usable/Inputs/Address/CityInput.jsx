import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MailInput({ returnCity }) {
  const [cityValue, setCityValue] = useState("");

  useEffect(() => {
    // if (cityValue !== undefined) returnCity(cityValue);
  }, [cityValue]);

  return (
    <TextField
      value={cityValue}
      className='w-max'
      variant='filled'
      label='City'
      margin='dense'
      onChange={(e) => setCityValue(e.target.value)}
    />
  );
}
