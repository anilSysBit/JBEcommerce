import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import DarazSmLogo from "../../assets/darazSmLogo.png";
import DarazBigLogo from "../../assets/darazBigLogo.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge  from "@mui/material/Badge";
import { useCart } from "../../Context/CartContext";

const Navigation = () => {

  const {cartItems} = useCart();
  return (
    <div className="navigation_main">
      <div className="navigation_size_manager">
        {/* Items at the Top of navigation */}
        <div className="top_navigation">
          <div className="left_nav">
            <ul>
              <Link>
                <li>Become a seller</li>
              </Link>
              <Link>
                <li>Payments and Rechange</li>
              </Link>
              <Link>
                <li>Help & Support</li>
              </Link>
              <Link>
                <li>Daraz Logistics Partner</li>
              </Link>
            </ul>
          </div>
          <div className="save_more">
            <button>
              <Avatar src={DarazSmLogo} size="20" />
              Save More on App
            </button>
          </div>
        </div>

        {/* Navigation Search Bar Main */}
        <div className="main_navigation">
          <div className="navs logobox">
            <Link to="/">
              <img src={DarazBigLogo} alt="darazLogo" />
            </Link>
          </div>
          <div className="navs search_box">
            <input type="text" placeholder="Search in Daraz" />
          </div>
          <div className="navs login_signup_nav">
            <Link to="/login">
              <span className="login_nav">
                <p>
                  <PersonIcon />
                  Login
                </p>
              </span>
            </Link>
            <Link to="/signup">
              <span className="signup_nav">
                <p>Signup</p>
              </span>
            </Link>
          </div>
          {/* <div className="navs signup">
               </div> */}
          <div className="navs language">
            <span>
              <LanguageIcon />
              EN
            </span>
          </div>
          <div className="navs cart">
          <Badge badgeContent={cartItems} color="error">
               <ShoppingCartIcon/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
