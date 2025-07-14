import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Phone, ShoppingBag, ShoppingCart, User, Wifi, WifiOff } from "lucide-react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // selector
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
                  alt="FoodieHub Logo"
                  className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-2 bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                  FoodieHub
                </h1>
                <p className="text-xs text-orange-100">Delicious delivered</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Online Status */}
            <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              {onlineStatus ? (
                <Wifi className="w-4 h-4 text-green-300" />
              ) : (
                <WifiOff className="w-4 h-4 text-red-400" />
              )}
              <span className="text-sm text-white font-medium">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>

            {/* Navigation Links */}
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/20 hover:text-orange-100 transition-all duration-300 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/20 hover:text-orange-100 transition-all duration-300 group"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">About</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/20 hover:text-orange-100 transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Contact</span>
            </Link>

            <Link
              to="/grocery"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/20 hover:text-orange-100 transition-all duration-300 group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Grocery</span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white hover:text-orange-100 transition-all duration-300 group backdrop-blur-sm"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold">Cart</span>
              {totalQuantity > 0 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                  {totalQuantity}
                </div>
              )}
            </Link>

            {/* User Info */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <User className="w-4 h-4 text-orange-100" />
              <span className="text-sm text-orange-100 font-medium">
                {loggedInUser ? `Hey, ${loggedInUser}` : "Guest"}
              </span>
            </div>

            {/* Login Button */}
            <button
              className="px-6 py-2 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/20 text-xs">
              {onlineStatus ? (
                <Wifi className="w-3 h-3 text-green-300" />
              ) : (
                <WifiOff className="w-3 h-3 text-red-400" />
              )}
              <span className="text-white">{onlineStatus ? "Online" : "Offline"}</span>
            </div>

            <Link to="/" className="px-3 py-1 rounded-full bg-white/20 text-white text-xs hover:bg-white/30 transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="px-3 py-1 rounded-full bg-white/20 text-white text-xs hover:bg-white/30 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="px-3 py-1 rounded-full bg-white/20 text-white text-xs hover:bg-white/30 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/grocery" className="px-3 py-1 rounded-full bg-white/20 text-white text-xs hover:bg-white/30 transition-colors duration-300">
              Grocery
            </Link>

            <div className="md:hidden flex items-center space-x-1 px-3 py-1 rounded-full bg-white/20 text-xs">
              <User className="w-3 h-3 text-orange-100" />
              <span className="text-orange-100">
                {loggedInUser ? `${loggedInUser}` : "Guest"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;