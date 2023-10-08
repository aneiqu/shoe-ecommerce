import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AccountPanel from "./AccountPanel";
import LoginPanel from "./LoginPanel";

export default function MyAccount({curActive, curContent}) {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  return (
    <div>
      <Navbar />
      {loggedIn ? <AccountPanel curActive={curActive} curContent={curContent}/> : <LoginPanel setLogged={setLoggedIn} />}
    </div>
  );
}
