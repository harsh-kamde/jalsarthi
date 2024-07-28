import React, { useContext, useState } from "react";
import { Popover, Drawer, Button, Modal, Form, Input, Select, DatePicker } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";
import "../../../stylesheets/Admin/Dashboard/DashboardSidebar.css";
import "../../../stylesheets/Shared/Header.css";
import { FaHome, FaAddressBook, FaPhoneAlt, FaSignInAlt } from "react-icons/fa";

const HeaderNav = ({ open, setOpen, content }) => {
  const { token, getTotalCartAmount, isOfflineOrder, cartItems } = useContext(StoreContext);

  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Function to calculate the sum of all values in the cartItems object
  const calculateSum = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  };

  const totalItems = calculateSum();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        setIsModalVisible(false);
        console.log('Reported leakage details: ', values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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

        {role === "user" && (
          <Button type="primary" onClick={showModal} className="ms-3">
            Report a Leakage
          </Button>
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

      {/* Leakage Reporting Modal */}
      <Modal title="Report a Leakage" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical" name="leakage_report_form">
          <Form.Item
            name="household"
            label="Household"
            rules={[{ required: true, message: 'Please select the household!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Leakage Location"
            rules={[{ required: true, message: 'Please input the location of the leakage!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description of the leakage!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Select.Option value="reported">Reported</Select.Option>
              <Select.Option value="in_progress">In Progress</Select.Option>
              <Select.Option value="resolved">Resolved</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dateReported"
            label="Date Reported"
            rules={[{ required: true, message: 'Please select the date reported!' }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default HeaderNav;
