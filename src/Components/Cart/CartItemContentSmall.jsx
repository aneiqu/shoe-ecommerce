import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Button, FormControl, MenuItem, Select } from "@mui/material";

export default function CartItemContentSmall({ item, quantity, setQuantity }) {
  function handleChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className=' flex flex-row'>
      <div className='flex flex-col h-full justify-between ml-2 w-44'>
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.style}</span>
          <span>{item.size}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>${item.price * quantity}</span>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <Button className='p-0'>
            <CloseOutlinedIcon />
          </Button>
          <Button className='p-0'>
            <FavoriteBorderOutlinedIcon />
          </Button>
        </div>
        <FormControl>
          <Select
            value={quantity}
            className='h-10'
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
