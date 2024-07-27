import React, { useContext } from "react";
import { Popover, Drawer, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";
import "../../../stylesheets/Admin/Dashboard/DashboardSidebar.css";
import "../../../stylesheets/Shared/Header.css";

import {
  FaHome,
  FaAddressBook,
  FaPhoneAlt,
  FaSignInAlt,
} from "react-icons/fa";

const HeaderNav = ({ open, setOpen, content }) => {
  const { token, getTotalCartAmount, isOfflineOrder, cartItems } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const role = localStorage.getItem("userRole");

  // Function to calculate the sum of all values in the cartItems object
  const calculateSum = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  };

  const totalItems = calculateSum();

  console.log("User role = ", role);
  console.log("Total cart items = ", totalItems);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {role !== "admin" && role !== "staff" && (
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                Home
              </NavLink>
            </li>
          )}

          {role !== "admin" && role !== "staff" && (
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                About
              </NavLink>
            </li>
          )}

          {role !== "admin" && role !== "staff" && (
            <li>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                Our Services
              </NavLink>
            </li>
          )}

          {role !== "admin" && role !== "staff" && (
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          )}

          {!token && (
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Mobile Mode */}
        {role !== "admin" && role !== "staff" && (
          <div>
            <Button
              className="mobile-nav-toggle bucket-btn navbar-search-icon cart-icon-mobile"
              onClick={() =>
                navigate(getTotalCartAmount() === 0 ? "/menu" : "/cart")
              }
              style={{
                color: getTotalCartAmount() > 0 && "tomato",
                background: "transparent",
              }}
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "1.5rem" }}
              ></i>

              <div className={getTotalCartAmount() === 0 ? "" : "dot"}>
                {totalItems === 0 ? "" : totalItems}
              </div>
            </Button>
          </div>
        )}

        {token && (
          <div>
            <Popover content={content}>
              <div className="profileImage">
                <img
                  src={assets.profile_icon}
                  alt=""
                  className="profileImage img-fluid"
                />
              </div>
            </Popover>
          </div>
        )}

        {role !== "admin" && role !== "staff" && (
          <FaBars className="mobile-nav-toggle" onClick={showDrawer} />
        )}
      </nav>

      {/* Mobile drawer */}
      <Drawer
        placement={"right"}
        onClose={onClose}
        open={open}
        size={"default"}
        extra={
          <Button
            type="primary"
            onClick={onClose}
            style={{
              background: "var(--primaryColor)",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Close
          </Button>
        }
      >
        <nav className="dashboard-menu">
          <ul>
            {role !== "admin" && role !== "staff" && (
              <li>
                <NavLink to={"/"} activeClassName="active">
                  <FaHome className="icon" /> <span>Home</span>
                </NavLink>
              </li>
            )}

            {role !== "admin" && role !== "staff" && (
              <li>
                <NavLink to={"/about"} activeClassName="active">
                  <FaAddressBook className="icon" /> <span>About</span>
                </NavLink>
              </li>
            )}
           
            {role !== "admin" && role !== "staff" && (
              <li>
                <NavLink to={"/contact"} activeClassName="active">
                  <FaPhoneAlt className="icon" /> <span>Contact Us</span>
                </NavLink>
              </li>
            )}

            {!token && (
              <li>
                <NavLink to={"/login"} activeClassName="active">
                  <FaSignInAlt className="icon" /> <span>Login</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default HeaderNav;
