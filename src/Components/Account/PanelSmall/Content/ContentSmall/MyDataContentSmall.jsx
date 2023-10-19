import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button } from "@mui/material";
import { useState } from "react";

export default function MyDataContentSmall() {
  const [name, setName] = useState("Jerry");
  const [lastName, setLastName] = useState("Berry");
  const [phoneNumber, setPhoneNumber] = useState("+48 123456789");
  const [email, setEmail] = useState("jerry.berry@gmail.com");
  const [password, setPassword] = useState("************");
  return (
    <div>
      <div className='flex flex-col items-center m-2'>
        <div className='flex flex-row '>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='scale-150 m-2'
          />
          <div className='flex flex-col m-3 min-w-[250px]'>
            <>
              <span className='font-bold'>First name and last name</span>
              <span>
                {name} {lastName}
              </span>
            </>
            <>
              <span className='font-bold'>Your Phone Number</span>
              <span>{phoneNumber}</span>
            </>
          </div>
        </div>
        <Button variant='contained' className='bg-black w-2/3'>
          Edit
        </Button>
      </div>
      <hr className='w-2/3 m-auto' />
      <div className='flex flex-col items-center m-2'>
        <div className='flex flex-row '>
          <MailOutlinedIcon fontSize='large' className='scale-150 m-2' />
          <div className='flex flex-col m-3 min-w-[250px]'>
            <>
              <span className='font-bold'>Your Email Address</span>
              <span>{email}</span>
            </>
          </div>
        </div>
        <Button variant='contained' className='bg-black w-2/3'>
          Edit
        </Button>
      </div>
      <hr className='w-2/3 m-auto' />
      <div className='flex flex-col items-center m-2'>
        <div className='flex flex-row '>
          <LockOutlinedIcon fontSize='large' className='scale-150 m-2' />
          <div className='flex flex-col m-3 min-w-[250px]'>
            <>
              <span className='font-bold'>Your Password</span>
              <span>{password}</span>
            </>
          </div>
        </div>
        <Button variant='contained' className='bg-black w-2/3'>
          Edit
        </Button>
      </div>
      <hr className='w-2/3 m-auto' />
    </div>
  );
}
