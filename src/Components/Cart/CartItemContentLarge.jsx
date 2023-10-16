import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

export default function CartItemContentLarge({
  item,
  quantity,
  setQuantity,
  test,
}) {
  function handleChange(e) {
    setQuantity(e.target.value);
  }

  useEffect(() => {
    test({ price: item.price * quantity, id: item.id });
  }, [quantity]);
  return (
    <div className='flex ml-2'>
      <div className='flex flex-col h-full w-max justify-between'>
        <span>{item.name}</span>
        <span>{item.style}</span>
        <span>{item.size}</span>
        <FormControl>
          <Select
            value={quantity}
            className='h-10 w-20'
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='mx-10'>
        <span>${item.price * quantity}</span>
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
