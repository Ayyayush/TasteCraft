 import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);


  // selector
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  return (
    <header
      className="flex flex-col md:flex-row justify-between text-white font-[500] shadow-lg"
      style={{ backgroundColor: "#9BC09C" }}
    >
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Logo"
            className="w-16 mx-6 mt-2"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <ul className="flex flex-wrap justify-center md:justify-end p-2 m-2 text-sm md:text-base">
          <li className="px-2 md:px-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-2 md:px-4">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li className="px-2 md:px-4 font-bold text-lg md:text-xl">
            <Link to="/cart" className="links">🛒({totalQuantity})</Link>
          </li>
          <button
            className="loginBtn px-2 md:px-4 py-2 bg-white text-green-700 rounded hover:bg-gray-100 transition-colors text-sm md:text-base"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>

             <li className="px-2 md:px-4">
            <span className="text-yellow-200 text-sm md:text-base">
              {loggedInUser ? `Hey,${loggedInUser}` : "Guest"}
            </span>
          </li>
       
        </ul>
      </div>
    </header>
  );
};

export default Header;
