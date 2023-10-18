import MyDataContentLarge from "./Content/ContentLarge/MyDataContentLarge";

export default function MyData({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<MyDataContentLarge />);
    setIsActive("MyData");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer whitespace-nowrap ${
          isActive === "MyData" ? "font-semibold border-b-2" : ""
        }`}
        onClick={handleClick}
      >
        My Data
      </span>
    </div>
  );
}
