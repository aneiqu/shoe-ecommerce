import ContinueShoppingBtn from "../Re-usable/ContinueShoppingBtn";
import Footer from "../Re-usable/Footer";
import LoginBtn from "../Re-usable/LoginBtn";

export default function EmptyCart() {
  const logged = JSON.parse(localStorage.getItem("logged"));

  return (
    <div className='flex flex-col items-center mt-40'>
      <span className='text-3xl pt-2 uppercase font-bold'>
        Your bag is empty!
      </span>
      <span>Once you add something to your bag, it will appear here.</span>

      <ContinueShoppingBtn margin={"mt-5"} />
      {!logged && <LoginBtn />}
      <Footer />
    </div>
  );
}
