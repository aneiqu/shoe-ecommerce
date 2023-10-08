import ContinueShoppingBtn from "../Re-usable/ContinueShoppingBtn";
import LoginBtn from "../Re-usable/LoginBtn";

export default function EmptyCart(){
  const logged = JSON.parse(localStorage.getItem("logged"))

  return(
        <div className="flex flex-col items-start">
            <span className="text-xl pt-2">
                Your cart is empty!
            </span>
            <ContinueShoppingBtn/>
             {!logged && <LoginBtn/>}     
        </div>
    )
}