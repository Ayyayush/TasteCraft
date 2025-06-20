import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>

          <li>
             <Link to="/">Home</Link>
          </li>

           <li> 
            <Link to="/About">About</Link>
            </li>

          <li>
            <Link to="/Contact">Contact Us</Link>
            </li>

          <li>
            Cart
            </li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "login" ? "logout" : "login");
              console.log(btnName === "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;