import ContinueShoppingBtn from "../../../../Re-usable/ContinueShoppingBtn";

export default function OrdersContentLarge() {
  return (
    <div className='m-2'>
      <div>
        <span className='text-3xl font-bold'>Orders</span>
        <br />
        <span className='text-lg'>
          Nothing ordered yet? Maybe this is perfect day to do so?
        </span>
      </div>
      <ContinueShoppingBtn />
    </div>
  );
}
