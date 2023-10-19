import React, { useEffect, useState } from "react";
import Addresses from "../../Re-usable/AccountReusables/Addresses";
import MyData from "../../Re-usable/AccountReusables/MyData";
import Orders from "../../Re-usable/AccountReusables/Orders";
import Overview from "../../Re-usable/AccountReusables/Overview";
import Returns from "../../Re-usable/AccountReusables/Returns";
import OverviewContentSmall from "./Content/ContentSmall/OverviewContentSmall";

export default function PanelSmall({ curActive, curContent }) {
  const [content, setContent] = useState(<OverviewContentSmall />);
  const [active, setActive] = useState("Overview");

  return (
    <div className='flex flex-col overflow-hidden pb-2 w-full'>
      <div className='flex flex-row overflow-auto pb-2'>
        <div className='border-[1px] border-gray-500 p-2'>
          <Overview
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
            display={"small"}
          />
        </div>
        <div className='border-[1px] border-gray-500 -mx-[1px] p-2'>
          <Orders
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
            display={"small"}
          />
        </div>
        <div className='border-[1px] border-gray-500 p-2'>
          <Returns
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
            display={"small"}
          />
        </div>
        <div className='border-[1px] border-gray-500 -mx-[1px] p-2'>
          <MyData
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
            display={"small"}
          />
        </div>
        <div className='border-[1px] border-gray-500 p-2'>
          <Addresses
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
            display={"small"}
          />
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}
