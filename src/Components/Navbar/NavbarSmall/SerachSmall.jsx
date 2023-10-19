import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, TextField } from "@mui/material";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect, useState } from "react";

export default function SearchSmall() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    isVisible ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [isVisible]);

  return (
    <div className='group'>
      <div className='active:bg-slate-300' onClick={toggleVisibility}>
        <SearchIcon
          sx={{ stroke: "#ffffff", strokeWidth: 1 }}
          fontSize='large'
          className='active:bg-slate-300 m-1'
        />
      </div>
      <div
        className={`fixed z-10 overflow-hidden right-0 top-0 w-0 h-screen bg-transparent duration-300 ${
          isVisible ? "visible w-[100%]" : "invisible"
        }`}
      >
        <div className='flex flex-row items-center h-16 border-b-2 bg-white'>
          <div>
            <CloseOutlinedIcon
              sx={{ stroke: "#ffffff", strokeWidth: 1 }}
              fontSize='large'
              className='m-4 active:bg-slate-300'
              onClick={toggleVisibility}
            />
          </div>
          <Autocomplete
            freeSolo
            id='combo-box-demo'
            open={open}
            onOpen={handleOpen}
            onClose={() => setOpen(false)}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={["Abibas", "Nide", "Gordan", "Pnikers"]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} variant='outlined' />
            )}
          />
          <div
            className='absolute fixe backdrop-blur-sm w-screen h-screen top-16 left-0'
            onClick={toggleVisibility}
          ></div>
        </div>
      </div>
    </div>
  );
}
