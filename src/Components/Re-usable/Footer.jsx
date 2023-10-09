export default function Footer() {
  return (
    <footer className='absolute bg-black w-screen h-16 bottom-0'>
      <div className='h-2/3 text-white flex justify-center items-center'>
        <span className='mx-2 text-sm hover:cursor-pointer'>
          Cookie Settings
        </span>
        <br />
        <span className='mx-2 text-sm hover:cursor-pointer'>Data settings</span>
        <br />
        <span className='mx-2 text-sm hover:cursor-pointer'>
          Privacy Statement
        </span>
        <br />
        <span className='mx-2 text-sm hover:cursor-pointer'>
          Terms and Conditions
        </span>
      </div>
      <div className='text-sm h-1/4 text-white flex justify-center items-center'>
        {String.fromCodePoint(0x000a9)} 2023 Shoe ecomerce
      </div>
    </footer>
  );
}
