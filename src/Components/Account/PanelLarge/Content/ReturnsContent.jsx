import ContinueShoppingBtn from "../../../Re-usable/ContinueShoppingBtn";

export default function ReturnsContent() {
  return (
    <div className='m-2'>
      <div>
        <span className='text-3xl font-bold'>Returns</span>
        <br />
        <span className='text-lg'>Nothing to return yet.</span>
      </div>
      <div className='flex flex-col items-center  mt-10'>
        <ContinueShoppingBtn />
      </div>
    </div>
  );
}
