import ContinueShoppingBtn from "../../../../Re-usable/ContinueShoppingBtn";

export default function OverviewContentLarge() {
  return (
    <div className='m-2'>
      <div>
        <span className='text-3xl font-bold'>Your account</span>
        <br />
        <span className='text-lg'>
          This is place where you can check and manage your orders, returns,
          payments and your data.
        </span>
      </div>
      <div className='flex flex-col items-center  mt-10'>
        <span className='text-xl font-semibold'>You are up to date :)</span>
        <ContinueShoppingBtn />
      </div>
    </div>
  );
}
