import { Link } from "react-router-dom";
import ExampleShoes from "../../../Data/ExampleShoes.json";
export default function Shoe(id) {
  const shoe = ExampleShoes.filter((shoe) => shoe.id === id.id)[0];

  return (
    <div className='w-36 md:w-44 lg:w-11/12 h-max m-2'>
      <Link
        to={`/products/${shoe.name}/${shoe.id}`}
        className='flex flex-col h-full'
      >
        <div className='flex h-36 md:h-44 lg:h-72 bg-gray-200 justify-center items-center'>
          <img
            src={require(`../../../Images/Shoes${shoe.img}`)}
            alt={shoe.name}
            className='h-36 w-36 md:w-40 md:h-44 lg:h-2/3 lg:w-2/3 '
          ></img>
        </div>
        <div className='my-2 ml-2'>
          <div className='flex justify-between'>
            <span className='font-light'>{shoe.name}</span>
            <span className='font-semibold mr-2'>${shoe.price}</span>
          </div>
          <span className='font-light'>{shoe.category}</span>
        </div>
      </Link>
    </div>
  );
}
