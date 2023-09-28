export default function MenLarge() {
  return (
    <div className='group'>
      <a
        href='./'
        className='font-bold border-b-2 pb-5 border-transparent hover:border-black group-hover:border-black'
      >
        MEN
      </a>
      <div className='invisible absolute left-0 flex flex-col w-screen group-hover:visible bg-slate-100 bg-opacity-50 mt-5 p-5'>
        <div className='flex flex-row justify-around'>
          <a
            href='./'
            className='hover:scale-110 duration-75 hover:font-bold text-xl'
          >
            Sport
          </a>
          <a
            href='./'
            className='hover:scale-110 duration-75 hover:font-bold text-xl'
          >
            Elegant
          </a>
          <a
            href='./'
            className='hover:scale-110 duration-75 hover:font-bold text-xl'
          >
            Casual
          </a>
          <a
            href='./'
            className='hover:scale-110 duration-75 hover:font-bold text-xl'
          >
            Heavy
          </a>
          <a
            href='./'
            className='hover:scale-110 duration-75 hover:font-bold text-xl'
          >
            Sandals
          </a>
        </div>
      </div>
    </div>
  );
}
