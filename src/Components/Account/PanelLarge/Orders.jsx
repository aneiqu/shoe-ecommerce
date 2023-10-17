import OrdersContent from "./Content/OrdersContent";

export default function Orders({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<OrdersContent />);
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
