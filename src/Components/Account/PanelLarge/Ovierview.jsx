import OverviewContent from "./Content/OverviewContent";

export default function Overview({ setContent, isActive, setIsActive }) {
  function handleClick() {
    setContent(<OverviewContent />);
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
