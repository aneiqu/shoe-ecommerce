import MyDataContent from "./Content/MyDataContent";

export default function MyData({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<MyDataContent />);
    setIsActive("MyData");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer ${
          isActive === "MyData" ? "font-semibold border-b-2" : ""
        }`}
        onClick={handleClick}
      >
        My Data
      </span>
    </div>
  );
}
