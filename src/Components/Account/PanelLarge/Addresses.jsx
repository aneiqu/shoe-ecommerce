import { default as AddressesContentLarge } from "./Content/ContentLarge/AddressesContentLarge";

export default function Addresses({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<AddressesContentLarge />);
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
