import { Autocomplete, Button, TextField } from "@mui/material";
import FormInput from "../Re-usable/Inputs/FormInput";
import Countries from "../../Data/Countries.json";
import FormFooter from "../Re-usable/FormFooter";
import NameInput from "../Re-usable/Inputs/NameInput";
import MiddleNameInput from "../Re-usable/Inputs/MiddleNameInput";
import LastNameInput from "../Re-usable/Inputs/LastNameInput";
import MailInput from "../Re-usable/Inputs/MailInput";
import PhoneInput from "../Re-usable/Inputs/PhoneInput";
import BirthInput from "../Re-usable/Inputs/BirthInput";
import GenderInput from "../Re-usable/Inputs/GenderInput";
import StreetInput from "../Re-usable/Inputs/Address/StreetInput";
import CountryInput from "../Re-usable/Inputs/Address/CountryInput";
import ZipInput from "../Re-usable/Inputs/Address/ZipInput";
import CityInput from "../Re-usable/Inputs/Address/CityInput";
import PanelLarge from "./PanelLarge/PanelLarge";
import { useEffect, useState } from "react";
import PanelSmall from "./PanelSmall/PanelSmall";

export default function AccountPanel({curActive, curContent}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Panel = screenWidth >= 640 ? <PanelLarge curActive={curActive} curContent={curContent} /> : <PanelSmall />;

  return <div className=''>{Panel}</div>;

  // return (
  //   <div className='pt-2 flex flex-col items-center'>
  //     <div className='flex flex-wrap md:flex-nowrap md:w-2/3'>
  //       <form className='flex flex-col w-screen items-center'>
  //         <span className='text-lg mt-4'>Personal information</span>
  //         <NameInput />
  //         <MiddleNameInput />
  //         <LastNameInput />
  //         <MailInput />
  //         <PhoneInput />
  //         <BirthInput />
  //         <GenderInput />
  //         <Button variant='outlined' className='m-2'>
  //           Save
  //         </Button>
  //       </form>
  //       <form className='flex flex-col w-screen items-center'>
  //         <span className='text-lg mt-4'>Address</span>
  //         <StreetInput />
  //         <ZipInput />
  //         <CityInput />
  //         <CountryInput />
  //         <Button variant='outlined' className='m-2'>
  //           Save Address
  //         </Button>
  //       </form>
  //     </div>
  //     <div className='flex justify-center w-2/5'>
  //       <Button
  //         color='inherit'
  //         className='w-3/5 md:w-2/5 m-5 bg-black text-white'
  //         variant='contained'
  //         onClick={handleLogOut}
  //       >
  //         Log out
  //       </Button>
  //     </div>
  //     <FormFooter logoEnabled={false} />
  //   </div>
  // );
}
