import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import SignedIn from "../components/SignedIn";

export default function login() {
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      <Login />
    </div>
  );
}
