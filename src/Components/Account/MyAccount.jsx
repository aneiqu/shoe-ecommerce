import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AccountPanel from "./AccountPanel";
import LoginPanel from "./LoginPanel";

export default function MyAccount() {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  return (
    <div>
      <Navbar />
      {loggedIn ? (
        <AccountPanel setLogged={setLoggedIn} />
      ) : (
        <LoginPanel setLogged={setLoggedIn} />
      )}
    </div>
  );
}
