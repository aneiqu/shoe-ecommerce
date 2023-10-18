import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button } from "@mui/material";
import { useState } from "react";

export default function MyDataContentLarge() {
  const [name, setName] = useState("Jerry");
  const [lastName, setLastName] = useState("Berry");
  const [phoneNumber, setPhoneNumber] = useState("+48 123456789");
  const [email, setEmail] = useState("jerry.berry@gmail.com");
  const [password, setPassword] = useState("************");
  return (
    <div className='h-full'>
      <div className='flex lg:flex-row flex-wrap lg:h-1/2 lg:justify-center p-2'>
        <div className='flex justify-center items-center w-1/12 '>
          <PersonOutlineOutlinedIcon
            fontSize='large'
            className='scale-150 m-2'
          />
        </div>
        <div className='flex flex-col w-full lg:flex-row lg:w-9/12 items-center ml-2'>
          <div className='flex w-full flex-col'>
            <span className='font-bold'>First name and last name</span>
            <div>
              {name} {lastName}
            </div>
          </div>
          <div className='flex w-full flex-col lg:ml-2'>
            <span className='font-bold'>Your Phone Number</span>
            <div>{phoneNumber}</div>
          </div>
        </div>
        <div className='flex w-full items-center lg:w-1/12'>
          <Button
            variant='contained'
            className='bg-black w-2/3 lg:h-1/3 lg:w-1/12 m-2'
          >
            Edit
          </Button>
        </div>
      </div>
      <hr className='w-2/3 m-auto' />
      <div className='flex lg:flex-row flex-wrap lg:h-1/2 lg:justify-center p-2'>
        <div className='flex justify-center items-center w-1/12'>
          <MailOutlinedIcon fontSize='large' className='scale-150 m-2' />
        </div>
        <div className='flex flex-col w-full lg:flex-col lg:w-9/12 justify-center ml-2'>
          <span className='font-bold'>Your Email Address</span>
          <div>{email}</div>
        </div>
        <div className='flex w-full items-center lg:w-1/12'>
          <Button
            variant='contained'
            className='bg-black w-2/3 lg:h-1/3 lg:w-1/12 m-2'
          >
            Edit
          </Button>
        </div>
      </div>
      <hr className='w-2/3 m-auto' />
      <div className='flex lg:flex-row flex-wrap lg:h-1/2 lg:justify-center p-2'>
        <div className='flex justify-center items-center w-1/12'>
          <LockOutlinedIcon fontSize='large' className='scale-150 m-2' />
        </div>
        <div className='flex flex-col w-full lg:flex-col lg:w-9/12 justify-center ml-2'>
          <span className='font-bold'>Your Password</span>
          <div>{password}</div>
        </div>
        <div className='flex w-full items-center lg:w-1/12'>
          <Button
            variant='contained'
            className='bg-black w-2/3 lg:h-1/3 lg:w-1/12 m-2'
          >
            Edit
          </Button>
        </div>
      </div>
      <hr className='w-2/3 m-auto' />
    </div>
  );
}
