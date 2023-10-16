import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Re-usable/CartItem";
import Footer from "../Re-usable/Footer";

export default function ProperCart({ items }) {
  const logged = JSON.parse(localStorage.getItem("logged"));

  const [price, setPrice] = useState(
    items.map((el) => {
      return { price: el.price, id: el.id };
    })
  );

  const test = (e) => {
    setPrice((prev) => [
      ...prev.map((el) => {
        if (el.id === e.id) {
          return { price: e.price, id: el.id };
        }
        return el;
      }),
    ]);
    console.log(e);
    //   console.log(e.id);
    //   // const existing = price.findIndex((el) => el.id === e.id);
    //   // if (existing !== -1) {
    //   //   const newArray = [...price].map((el) =>
    //   //     el.id === e.id ? (el.price = e.price) : "test"
    //   //   );
    //   //   setPrice(newArray);
    //   // } else {
    //   //   setPrice((prev) => [...prev, { price: e.price, id: e.id }]);
    //   // }
  };

  useEffect(() => {
    console.log(price);
  }, [price]);

  const cart = items.map((el) => (
    <CartItem key={el.id} id={el.id} test={test}></CartItem>
  ));
  const curPrice = price.reduce((acc, curVal) => acc + curVal.price, 0);

  const totalItems = items.length
    ? items.length > 1
      ? `${items.length} items`
      : `${items.length} item`
    : "0";

  const deliveryPrice = curPrice.toFixed(2) > 100 ? "Free" : `$${18.9}`;

  return (
    <div className='relative min-h-screen mt-2 pb-16'>
      <div className='ml-2'>
        <span className='uppercase text-4xl font-bold'>Your bag</span>
        <div>
          <span className='text-lg'>TOTAL: ({totalItems}) -</span>
          <span className='font-bold text-lg'>
            {" "}
            ${price.reduce((acc, curVal) => acc + curVal.price, 0)}
          </span>
        </div>
        <span className='text-md '>Items in your bag are not reserved.</span>
        <div className='w-max'>{cart}</div>
      </div>
      <div>
        {!logged && (
          <Link to='/myaccount'>
            <Button>Login and checkout faster</Button>
          </Link>
        )}
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div className='flex w-9/12 flex-col items-center lg:items-end'>
          <div className='m-10 flex w-2/3 justify-start lg:justify-start'>
            <div className='flex flex-col '>
              <div>
                <span className='uppercase text-4xl font-bold'>Your bag</span>
                <div>
                  <span className='text-lg'>TOTAL: ({totalItems}) -</span>
                  <span className='font-bold text-lg'> ${curPrice}</span>
                </div>
                <span className='text-md '>
                  Items in your bag are not reserved.
                </span>
              </div>
            </div>
          </div>
          <div className='w-2/3 flex flex-col items-center lg:items-start m-10'>
            {cart}
          </div>
        </div>
        <div className='flex flex-col w-3/12 items-start pb-2 mb-10 h-min border-slate-600 border-b-2'>
          {!logged && (
            <Link to='/myaccount'>
              <Button>Login and checkout faster</Button>
            </Link>
          )}
          <div className='mt-10 w-full'>
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
        </div> */
}
