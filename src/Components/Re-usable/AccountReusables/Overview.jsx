import OverviewContentLarge from "../../Account/PanelLarge/Content/ContentLarge/OverviewContentLarge";
import OverviewContentSmall from "../../Account/PanelSmall/Content/ContentSmall/OverviewContentSmall";

export default function Overview({
  setContent,
  isActive,
  setIsActive,
  display,
}) {
  function handleClick() {
    display === "large"
      ? setContent(<OverviewContentLarge />)
      : setContent(<OverviewContentSmall />);
    setIsActive("Overview");
  }

  return (
    <div className='p-1'>
      <span
        className={`hover:border-b-2 border-black cursor-pointer whitespace-nowrap ${
          isActive === "Overview" ? "font-semibold border-b-2" : ""
        } `}
        onClick={handleClick}
      >
        Overview
      </span>
    </div>
  );
}
