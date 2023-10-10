import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import itemsData from "../../Data/ExampleShoes.json";

export default function CartItem({ id }) {
  const [quantity, setQuantity] = useState(1);

  const item = itemsData.find((el) => el.id === id);

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className='flex w-11/12 mx border-b-2 border-slate-600 justify-between text-lg shadow-lg my-2'>
      <div className='w-44 h-44'>
        <img
          className='min-w-44 min-h-44 w-44 h-44 bg-slate-200'
          src={require(`../../Images/Shoes${item.logo}`)}
        ></img>
      </div>
      <div className='w-6/12'>
        <div className='flex flex-col m-3'>
          <span>{item.name}</span>
          <span>{item.style}</span>
          <span>Size: 10</span>
        </div>
        <FormControl className='w-3/12 m-3 mb-0 '>
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
      <div className='flex w-2/12 justify-end'>
        <span className='p-2'>${item.price * quantity}</span>
      </div>
      <div className='flex flex-col '>
        <Button>
          <CloseOutlinedIcon />
        </Button>
        <Button>
          <FavoriteBorderOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}
