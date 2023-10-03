import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Countries from "../../../../Data/Countries.json";

export default function CountryInput({ returnCountry }) {
  const [countryValue, setCountryValue] = useState("");

  useEffect(() => {
    // if (countryValue !== undefined) returnCountry(countryValue);
  }, [countryValue]);

  return (
    <Autocomplete
      className='w-[227px]'
      options={Countries}
      renderInput={(params) => (
        <TextField
          variant='filled'
          margin='dense'
          {...params}
          label='Country'
        />
      )}
    />
  );
}
