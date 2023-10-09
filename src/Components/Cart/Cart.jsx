import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProperCart from "./ProperCart";
import EmptyCart from "./EmptyCart";
import ExampleShoes from "../../Data/ExampleShoes";
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
