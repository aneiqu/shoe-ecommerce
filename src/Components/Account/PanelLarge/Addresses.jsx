export default function Addresses({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<Addresses />);
    setIsActive("Addresses");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer whitespace-nowrap${
          isActive === "Addresses" ? "font-semibold border-b-2" : ""
        }`}
        onClick={handleClick}
      >
        Addresses
      </span>
    </div>
  );
}
