import { useState } from "react";
import ExampleShoes from "../../Data/ExampleShoes";
import Navbar from "../Navbar/Navbar";
import EmptyCart from "./EmptyCart";
import ProperCart from "./ProperCart";
export default function Cart() {
  const [itemsInCart, setItemsInCart] = useState(ExampleShoes);

  const content =
    itemsInCart.length > 0 ? <ProperCart items={itemsInCart} /> : <EmptyCart />;
  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
}
