import OverviewContentLarge from "./Content/ContentLarge/OverviewContentLarge";

export default function Overview({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<OverviewContentLarge />);
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
