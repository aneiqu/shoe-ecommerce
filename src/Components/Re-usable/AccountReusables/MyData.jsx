import MyDataContentLarge from "../../Account/PanelLarge/Content/ContentLarge/MyDataContentLarge";
import MyDataContentSmall from "../../Account/PanelSmall/Content/ContentSmall/MyDataContentSmall";

export default function MyData({ setContent, isActive, setIsActive, display }) {
  function handleClick() {
    display === "large"
      ? setContent(<MyDataContentLarge />)
      : setContent(<MyDataContentSmall />);
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
