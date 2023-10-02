import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AccountPanel from "./LoginPanel";
import LoginPanel from "./LoginPanel";

export default function MyAccount() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      {loggedIn ? <AccountPanel /> : <LoginPanel />}
    </div>
  );
}
