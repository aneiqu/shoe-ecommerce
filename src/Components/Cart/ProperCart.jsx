import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Re-usable/CartItem";
import Footer from "../Re-usable/Footer";

export default function ProperCart({ items }) {
  const logged = JSON.parse(localStorage.getItem("logged"));

  const [totalPrice, setTotalPrice] = useState(
    items.map((el) => {
      return { price: el.price, id: el.id };
    })
  );

  const updateTotalPrice = (elChanged) => {
    setTotalPrice((prev) => [
      ...prev.map((curEl) => {
        if (curEl.id === elChanged.id) {
          return { price: elChanged.price, id: elChanged.id };
        }
        return curEl;
      }),
    ]);
  };

  const cart = items.map((el) => (
    <CartItem
      key={el.id}
      id={el.id}
      updateTotalPrice={updateTotalPrice}
    ></CartItem>
  ));
  const curPrice = totalPrice.reduce((acc, curVal) => acc + curVal.price, 0);

  const totalItems = items.length
    ? items.length > 1
      ? `${items.length} items`
      : `${items.length} item`
    : "0";

  const deliveryPrice = curPrice.toFixed(2) > 100 ? "Free" : `$${18.9}`;

  return (
    <div className='relative min-h-screen mt-2 pb-16 flex flex-col md:flex-row justify-center'>
      <div className='flex flex-col items-center'>
        <div className='ml-2'>
          <span className='uppercase text-4xl font-bold'>Your bag</span>
          <div>
            <span className='text-lg'>TOTAL: ({totalItems}) -</span>
            <span className='font-bold text-lg'>${curPrice}</span>
          </div>
          <span className='text-md '>Items in your bag are not reserved.</span>
          <div className='w-max'>{cart}</div>
        </div>
      </div>
      <div className='m-10'>
        {!logged && (
          <Link to='/myaccount'>
            <Button className=' p-0'>Login and checkout faster</Button>
          </Link>
        )}
        <div className=' w-full'>
          <span className='uppercase text-lg font-bold'>Order summary</span>
          <div className='my-4'>
            <div className='flex justify-between'>
              <span>{totalItems}</span>
              <span>${(curPrice - curPrice * 0.23).toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Sales tax</span>
              <span>${(curPrice * 0.23).toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Delivery</span>
              <span>{deliveryPrice}</span>
            </div>
            <div className='flex justify-between'>
              <span>Total</span>
              <span>
                $
                {deliveryPrice === "Free"
                  ? curPrice.toFixed(2)
                  : +curPrice.toFixed(2) + +deliveryPrice.slice(1)}
              </span>
            </div>
          </div>
          <Button variant='contained' fullWidth className='bg-black h-12'>
            Checkout
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
