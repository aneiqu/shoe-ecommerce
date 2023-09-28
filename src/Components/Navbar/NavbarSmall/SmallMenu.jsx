import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export default function SmallMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='group'>
      <a className='m-2' onClick={toggleVisibility}>
        <MenuOutlinedIcon fontSize='large' />
      </a>
      <div
        className={`absolute left-0 top-0 w-0 h-screen bg-white duration-150 ${
          isVisible ? "visible w-[100%]" : "invisible"
        }`}
      >
        <div className='flex justify-end'>
          <a className='m-4' onClick={toggleVisibility}>
            <CloseOutlinedIcon fontSize='large' className='' />
          </a>
        </div>
      </div>
    </div>
  );
}
