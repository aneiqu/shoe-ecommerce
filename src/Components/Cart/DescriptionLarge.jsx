import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { FormControl, MenuItem, Select } from "@mui/material";

export default function DescriptionLarge({ item, quantity, setQuantity }) {
  return (
    <div className='flex ml-2'>
      <div className='flex flex-col h-full w-max justify-between'>
        <span>{item.name}</span>
        <span>{item.style}</span>
        <span>{item.size}</span>
        <FormControl>
          <Select value={quantity} className='h-10 w-20' onChange={(e) => e}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='mx-10'>
        <span>${item.price}</span>
      </div>
    </div>
  );
}
