import Navbar from "../Navbar/Navbar";
import PasswordInput from "../Re-usable/Inputs/PasswordInput";
import MailInput from "../Re-usable/Inputs/MailInput";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import FormFooter from "../Re-usable/FormFooter";
import FormInput from "../Re-usable/Inputs/FormInput";
import { Button } from "@mui/material";

export default function RegisterAccount() {
  return (
    <div>
      <Navbar />
      <form className='flex flex-col w-screen items-center pt-10'>
        <span className='text-xl'>Register new account</span>

        <FormInput label={"First Name"}>
          <AssignmentIndOutlinedIcon />
        </FormInput>
        <FormInput label={"Last Name"}>
          <AssignmentIndOutlinedIcon />
        </FormInput>
        <MailInput />
        <PasswordInput forgot={false} />
        <Button
          type='submit'
          color='inherit'
          className='w-3/5 md:w-2/5 m-5'
          variant='outlined'
        >
          Register now
        </Button>
      </form>
      <FormFooter />
    </div>
  );
}
