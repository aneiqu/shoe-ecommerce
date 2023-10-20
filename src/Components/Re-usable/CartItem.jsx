import { useEffect, useState } from "react";
import itemsData from "../../Data/ExampleShoes.json";
import { default as CartItemContentLarge } from "../Cart/CartItemContentLarge";
import { default as CartItemContentSmall } from "../Cart/CartItemContentSmall";

export default function CartItem({ id, updateTotalPrice }) {
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
        updateTotalPrice={updateTotalPrice}
      />
    ) : (
      <CartItemContentSmall
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
        updateTotalPrice={updateTotalPrice}
      />
    );

  return (
    <div className='flex flex-row m-2 ml-0 border-b-2 border-slate-600'>
      <div className='h-32 w-32'>
        <img
          className='h-32 w-32 bg-slate-200'
          src={require(`../../Images/Shoes${item.img}`)}
          alt='Shoe'
        ></img>
      </div>
      {Description}
    </div>
  );
}
