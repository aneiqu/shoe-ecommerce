import { useParams } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();
  const { productName, productId } = params;
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-black'>Product Page</h1>
        <span>Name: {productName}</span>
        <span>ID: {productId}</span>
      </div>
    </div>
  );
}
