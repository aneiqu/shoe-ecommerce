import { useEffect, useState } from "react";
import itemsData from "../../Data/ExampleShoes.json";
import { default as CartItemContentLarge } from "../Cart/CartItemContentLarge";
import { default as CartItemContentSmall } from "../Cart/CartItemContentSmall";

export default function CartItem({ id, test }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const item = itemsData.find((el) => el.id === id);

  const Description =
    screenWidth >= 640 ? (
      <CartItemContentLarge
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
        test={test}
      />
    ) : (
      <CartItemContentSmall
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    );

  return (
    <div className='flex flex-row m-2 ml-0'>
      <div className='h-32 w-32'>
        <img
          className='h-32 w-32 bg-slate-200'
          src={require(`../../Images/Shoes${item.logo}`)}
          alt='Shoe'
        ></img>
      </div>
      {Description}
    </div>
  );
}

{
  // <div className='flex w-min lg:min-w-full mx border-b-2 border-slate-600 justify-between text-lg shadow-lg my-2'>
  //   <div className='min-w-44 min-h-44 h-44 w-44'>
  //     <img
  //       className='min-w-44 min-h-44 h-44 w-44 bg-slate-200'
  //       src={require(`../../Images/Shoes${item.logo}`)}
  //     ></img>
  //   </div>
  //   <div className='w-6/12'>
  //     <div className='flex flex-col m-3'>
  //       <span>{item.name}</span>
  //       <span className='text-ellipsis w-max overflow-hidden whitespace-nowrap'>
  //         {item.style}
  //       </span>
  //       <span>Size: 10</span>
  //     </div>
  //     <FormControl className='w-4/12 lg:w-16 m-3 mb-0 '>
  //       <Select
  //         value={quantity}
  //         className='h-10'
  //         onChange={(e) => handleChange(e)}
  //       >
  //         <MenuItem value={1}>1</MenuItem>
  //         <MenuItem value={2}>2</MenuItem>
  //         <MenuItem value={3}>3</MenuItem>
  //       </Select>
  //     </FormControl>
  //   </div>
  //   <div className='flex w-2/12 justify-end'>
  //     <span className='p-2'>${item.price * quantity}</span>
  //   </div>
  //   <div className='flex flex-col '>
  //     <Button>
  //       <CloseOutlinedIcon />
  //     </Button>
  //     <Button>
  //       <FavoriteBorderOutlinedIcon />
  //     </Button>
  //   </div>
  // </div>
}
