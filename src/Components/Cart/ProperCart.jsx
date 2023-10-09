import { Button } from "@mui/material";

export default function ProperCart({ items }) {
  const curPrice = items.reduce((acc, curVal) => acc + curVal.price, 0);

  const test = items.map((el) => {
    return (
      <div key={el.name}>
        <span>{el.name} - </span>
        <span>{el.price}$</span>
      </div>
    );
  });
  return (
    <div className='flex justify-center w-screen'>
      <div className='w-2/3 flex mt-10'>
        <div className='w-2/3 m-10'>
          <span className='uppercase text-3xl font-bold m-1'>Your bag</span>
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
            <span className='font-bold text-lg'>${curPrice}</span>
          </div>
          <span className='text-md '>Items in your bag are not reserved.</span>
        </div>
        <div className='flex w-1/3 h-full'>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
