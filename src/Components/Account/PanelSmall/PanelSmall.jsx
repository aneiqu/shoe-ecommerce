import React, { useEffect, useState } from "react";
import Addresses from "../PanelLarge/Addresses";
import MyData from "../PanelLarge/MyData";
import Orders from "../PanelLarge/Orders";
import Overview from "../PanelLarge/Ovierview";
import Returns from "../PanelLarge/Returns";

export default function PanelSmall({ curActive, curContent }) {
  const [content, setContent] = useState(curContent);
  const [active, setActive] = useState(curActive);

  useEffect(() => {
    setActive(curActive);
    setContent(curContent);
  }, [curActive]);

  return (
    <div className='flex overflow-auto pb-2'>
      <div className='border-[1px] border-gray-500 p-2'>
        <Overview
          setContent={setContent}
          isActive={active}
          setIsActive={setActive}
        />
      </div>
      <div className='border-[1px] border-gray-500 -mx-[1px] p-2'>
        <Orders
          setContent={setContent}
          isActive={active}
          setIsActive={setActive}
        />
      </div>
      <div className='border-[1px] border-gray-500 p-2'>
        <Returns
          setContent={setContent}
          isActive={active}
          setIsActive={setActive}
        />
      </div>
      <div className='border-[1px] border-gray-500 -mx-[1px] p-2'>
        <MyData
          setContent={setContent}
          isActive={active}
          setIsActive={setActive}
        />
      </div>
      <div className='border-[1px] border-gray-500 p-2'>
        <Addresses
          setContent={setContent}
          isActive={active}
          setIsActive={setActive}
        />
      </div>
    </div>
  );
}
