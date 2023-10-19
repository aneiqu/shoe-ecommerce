import AddressesContentLarge from "../../Account/PanelLarge/Content/ContentLarge/AddressesContentLarge";
import AddressesContentSmall from "../../Account/PanelSmall/Content/ContentSmall/AddressesContentSmall";

export default function Addresses({
  setContent,
  isActive,
  setIsActive,
  display,
}) {
  function handleClick() {
    display === "large"
      ? setContent(<AddressesContentLarge />)
      : setContent(<AddressesContentSmall />);
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
