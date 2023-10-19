import ReturnsContentLarge from "../../Account/PanelLarge/Content/ContentLarge/ReturnsContentLarge";
import ReturnsContentSmall from "../../Account/PanelSmall/Content/ContentSmall/ReturnsContentSmall";

export default function Returns({
  setContent,
  isActive,
  setIsActive,
  display,
}) {
  function handleClick() {
    display === "large"
      ? setContent(<ReturnsContentLarge />)
      : setContent(<ReturnsContentSmall />);
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
