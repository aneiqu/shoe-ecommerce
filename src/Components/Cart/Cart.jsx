import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProperCart from "./ProperCart";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const [itemsInCart, setItemsInCart] = useState([])

  const content = itemsInCart.length > 0 ? <ProperCart/> : <EmptyCart/>
  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
}
