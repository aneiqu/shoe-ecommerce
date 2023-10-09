import { Link } from "react-router-dom";
import Addresses from "./Addresses";
import Overview from "./Ovierview";
import Orders from "./Orders";
import Returns from "./Returns";
import MyData from "./MyData";
import { useEffect, useState } from "react";
import Footer from "../../Re-usable/Footer";

export default function PanelLarge({ curActive, curContent }) {
  const [content, setContent] = useState(curContent);
  const [active, setActive] = useState(curActive);

  useEffect(() => {
    setActive(curActive);
    setContent(curContent);
  }, [curActive]);

  return (
    <div className='flex w-screen justify-center mt-4'>
      <div className='w-3/12 md:w-2/12 lg:w-1/12 border-r-2 h-full min-w-min border-black p-2'>
        <div className='text-xl font-bold pb-2'>My Account</div>
        <div className='flex flex-col ml-2'>
          <Overview
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
          />
          <Orders
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
          />
          <Returns
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
          />
          <MyData
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
          />
          <Addresses
            setContent={setContent}
            isActive={active}
            setIsActive={setActive}
          />
        </div>
      </div>
      <div className='w-2/4 p-2'>{content}</div>
      <Footer />
    </div>
  );
}
