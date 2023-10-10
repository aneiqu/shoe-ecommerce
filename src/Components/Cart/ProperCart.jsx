import { Button } from "@mui/material";
import CartItem from "../Re-usable/CartItem";
import Footer from "../Re-usable/Footer";

export default function ProperCart({ items }) {
  const logged = JSON.parse(localStorage.getItem("logged"));

  const curPrice = items.reduce((acc, curVal) => acc + curVal.price, 0);
  const cart = items.map((el) => <CartItem key={el.id} id={el.id}></CartItem>);

  return (
    <div className='relative w-10/12'>
      <div className='flex pb-16'>
        <div className='flex w-9/12 flex-col items-end'>
          <div className='m-10 flex w-2/3'>
            <div className='flex flex-col '>
              <div>
                <span className='uppercase text-4xl font-bold'>Your bag</span>
                <div>
                  <span className='text-lg'>
                    TOTAL: (
                    {items.length
                      ? items.length > 1
                        ? `${items.length} items`
                        : `${items.length} item`
                      : "0"}
                    ) -
                  </span>
                  <span className='font-bold text-lg'> ${curPrice}</span>
                </div>
                <span className='text-md '>
                  Items in your bag are not reserved.
                </span>
              </div>
            </div>
          </div>
          <div className='w-2/3 flex flex-col m-10'>{cart}</div>
        </div>
        <div className='m-10 flex flex-col w-3/12 items-start'>
          {!logged && <Button>Login and checkout faster</Button>}
          <Button variant='contained' fullWidth className='bg-black h-12'>
            Checkout
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
