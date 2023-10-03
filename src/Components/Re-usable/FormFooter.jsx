import Logo from "./Logo";

export default function FormFooter({ logoEnabled }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row w-2/3 justify-around items-center'>
        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            About us
          </span>
        </div>

        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            Privacy Policy
          </span>
        </div>
        <div className='w-1/3 flex justify-center'>
          <span className='text-sm text-center border-b-2 border-transparent transition-all duration-100 active:bg-slate-300 md:hover:border-black cursor-pointer'>
            Terms and Conditions
          </span>
        </div>
      </div>
      <div className='pt-10'>{logoEnabled ? <Logo /> : ""}</div>
    </div>
  );
}
