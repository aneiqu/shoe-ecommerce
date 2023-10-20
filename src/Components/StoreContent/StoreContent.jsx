import ExampleShoes from "../../Data/ExampleShoes.json";
import Shoe from "../Re-usable/Prodcuts/Shoe";

export default function StoreContent() {
  const content = ExampleShoes.map((shoe) => (
    <Shoe key={shoe.id} id={shoe.id} />
  ));

  return (
    <div className='flex flex-wrap min-h-screen w-2/3 content-start'>
      {content}
    </div>
  );
}
