import OrdersContentLarge from "../../Account/PanelLarge/Content/ContentLarge/OrdersContentLarge";
import OrdersContentSmall from "../../Account/PanelSmall/Content/ContentSmall/OrdersContentSmall";

export default function Orders({ setContent, isActive, setIsActive, display }) {
  function handleClick() {
    display === "large"
      ? setContent(<OrdersContentLarge />)
      : setContent(<OrdersContentSmall />);
    setIsActive("Orders");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer whitespace-nowrap ${
          isActive === "Orders" ? "font-semibold border-b-2" : ""
        }`}
        onClick={handleClick}
      >
        Orders
      </span>
    </div>
  );
}
