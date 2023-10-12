import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Button, FormControl, MenuItem, Select } from "@mui/material";

export default function DescriptionSmall({ item, quantity, setQuantity }) {
  return (
    <div className=' flex flex-row'>
      <div className='flex flex-col h-full justify-between ml-2 w-44'>
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.style}</span>
          <span>{item.size}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>${item.price}</span>
          <FormControl>
            <Select value={quantity} className='h-10' onChange={(e) => e}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='flex flex-col h-min'>
        <Button className='p-0'>
          <CloseOutlinedIcon />
        </Button>
        <Button className='p-0'>
          <FavoriteBorderOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}
