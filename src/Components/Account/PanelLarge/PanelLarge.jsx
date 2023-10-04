import { Link } from "react-router-dom";

export default function PanelLarge({ active }) {
  return (
    <div className='flex w-screen justify-center mt-4'>
      <div className='w-1/12 border-r-2 border-black p-2'>
        <div className='text-lg font-bold pb-2'>My Account</div>
        <div className='flex flex-col'>
          <Link className='p-2'>
            <span
              className={`p-2 text-md  ${
                active === "Overview"
                  ? "text-blue-700 font-bold"
                  : "font-semibold"
              }`}
            >
              Overview
            </span>
          </Link>
          <Link className='p-2'>
            <span
              className={`p-2 text-md  ${
                active === "Orders"
                  ? "text-blue-700 font-bold"
                  : "font-semibold"
              }`}
            >
              Orders
            </span>
          </Link>
          <Link className='p-2'>
            <span
              className={`p-2 text-md  ${
                active === "Returns"
                  ? "text-blue-700 font-bold"
                  : "font-semibold"
              }`}
            >
              Returns
            </span>
          </Link>
          <Link className='p-2'>
            <span
              className={`p-2 text-md  ${
                active === "MyData"
                  ? "text-blue-700 font-bold"
                  : "font-semibold"
              }`}
            >
              My personal data
            </span>
          </Link>
        </div>
      </div>
      <div className='w-3/5 p-2'>Content</div>
    </div>
  );
}
