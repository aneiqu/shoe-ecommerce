import { Link } from "react-router-dom";
import ExampleShoes from "../../../Data/ExampleShoes.json";
export default function Shoe(id) {
  const shoe = ExampleShoes.filter((shoe) => shoe.id === id.id)[0];

  return (
    <div className='w-56 h-max shadow-md m-2'>
      <Link
        to={`/products/${shoe.name}/${shoe.id}`}
        className='flex flex-col h-full'
      >
        <div className='flex h-64 bg-gray-200 items-center'>
          <img
            src={require(`../../../Images/Shoes${shoe.img}`)}
            alt={shoe.name}
            className='h-56 w-56 '
          ></img>
        </div>
        <div className='my-2 ml-2'>
          <span>
            {shoe.name} - {shoe.category}
          </span>
          <br />
          <span>${shoe.price}</span>
        </div>
      </Link>
    </div>
  );
}
