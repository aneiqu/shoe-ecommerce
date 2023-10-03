import { InputAdornment, TextField } from "@mui/material";

export default function FormInput({ label, type, children }) {
  return (
    <TextField
      type={type ? type : "text"}
      className='min-w-[227px] w-max'
      variant='filled'
      label={label}
      margin='dense'
    />
  );
}
