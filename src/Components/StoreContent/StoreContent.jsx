import { Pagination } from "@mui/material";
import { useState } from "react";
import ExampleShoes from "../../Data/ExampleShoes.json";
import Shoe from "../Re-usable/Prodcuts/Shoe";

export default function StoreContent() {
  const [curPage, setCurPage] = useState({
    from: 0,
    to: 0,
  });

  const handleChange = () => {
    setCurPage((prev) => ({ prev, to: prev.to + 1 }));
  };
  const content = ExampleShoes.map((shoe) => (
    <Shoe key={shoe.id} id={shoe.id} />
  ));

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {content}
      <div className='flex w-screen justify-end items-center pb-2 pr-2'>
        test
        <Pagination
          count={ExampleShoes.length / 40 > 1 ? ExampleShoes.length / 40 : 1}
        ></Pagination>
      </div>
    </div>
  );
}
