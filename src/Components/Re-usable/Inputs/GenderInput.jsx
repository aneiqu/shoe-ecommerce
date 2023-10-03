import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Gender from "../../../Data/Gender.json";

export default function GenderInput({ returnGender }) {
  const [genderValue, setGenderValue] = useState("");

  useEffect(() => {
    // if (genderValue !== undefined) returnGender(genderValue);
  }, [genderValue]);

  return (
    <Autocomplete
      className='w-[227px]'
      options={Gender}
      renderInput={(params) => (
        <TextField variant='filled' margin='dense' {...params} label='Gender' />
      )}
    />
    // <TextField
    //   value={genderValue}
    //   className='w-max'
    //   variant='filled'
    //   label='E-Mail Address'
    //   margin='dense'
    //   onChange={(e) => setgenderValue(e.target.value)}
    //   InputProps={{
    //     startAdornment: (
    //       <InputAdornment position='start'>
    //         <MailOutlinedIcon />
    //       </InputAdornment>
    //     ),
    //   }}
    // />
  );
}
