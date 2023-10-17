import ReturnsContent from "./Content/ReturnsContent";

export default function Returns({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<ReturnsContent />);
    setIsActive("Returns");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer whitespace-nowrap ${
          isActive === "Returns" ? "font-semibold border-b-2" : ""
        }`}
        onClick={handleClick}
      >
        Returns
      </span>
    </div>
  );
}
