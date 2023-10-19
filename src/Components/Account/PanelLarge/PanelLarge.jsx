import { useEffect, useState } from "react";
import Addresses from "../../Re-usable/AccountReusables/Addresses";
import MyData from "../../Re-usable/AccountReusables/MyData";
import Orders from "../../Re-usable/AccountReusables/Orders";
import Overview from "../../Re-usable/AccountReusables/Overview";
import Returns from "../../Re-usable/AccountReusables/Returns";
import Footer from "../../Re-usable/Footer";

export default function PanelLarge({ curActive, curContent }) {
  const [content, setContent] = useState(curContent);
  const [active, setActive] = useState(curActive);

  useEffect(() => {
    setActive(curActive);
    setContent(curContent);
  }, [curActive]);

  return (
    <div className='relative min-h-screen'>
      <div className='flex w-screen justify-center mt-4 pb-16'>
        <div className='w-3/12 md:w-2/12 lg:w-1/12 border-r-2 h-full min-w-min border-black p-2'>
          <div className='text-xl font-bold pb-2'>My Account</div>
          <div className='flex flex-col ml-2'>
            <Overview
              setContent={setContent}
              isActive={active}
              setIsActive={setActive}
              display={"large"}
            />
            <Orders
              setContent={setContent}
              isActive={active}
              setIsActive={setActive}
              display={"large"}
            />
            <Returns
              setContent={setContent}
              isActive={active}
              setIsActive={setActive}
              display={"large"}
            />
            <MyData
              setContent={setContent}
              isActive={active}
              setIsActive={setActive}
              display={"large"}
            />
            <Addresses
              setContent={setContent}
              isActive={active}
              setIsActive={setActive}
              display={"large"}
            />
          </div>
        </div>
        <div className='w-2/4 p-2'>{content}</div>
      </div>
      <Footer />
    </div>
  );
}
