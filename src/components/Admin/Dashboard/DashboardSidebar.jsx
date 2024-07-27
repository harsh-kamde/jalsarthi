import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../stylesheets/Admin/Dashboard/DashboardSidebar.css";
import { Drawer, Button } from "antd";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile-sidebar">
      {/* Show Drawer Button in Small Devices */}
      <Button
        type="primary"
        shape="circle"
        icon={<i className="fa-solid fa-bars"></i>}
        size="large"
        className="dashboard-drawer-btn"
        onClick={showDrawer}
      />

      <nav className="dashboard-menu dashboard-menu-sidebar">
        <ul>
          <li>
            <NavLink to={"/admin/dashboard"} activeClassName="active" end>
              <i className="fa-solid fa-dashboard icon"></i>{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manage-usage"} activeClassName="active" end>
              <i className="fa-solid fa-tachometer-alt icon"></i>{" "}
              <span>Manage Usage</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manage-distribution"} activeClassName="active" end>
              <i className="fa-solid fa-route icon"></i>{" "}
              <span>Manage Distribution</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manage-leakages"} activeClassName="active" end>
              <i className="fa-solid fa-water icon"></i>{" "}
              <span>Manage Leakages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manage-users"} activeClassName="active" end>
              <i className="fa-solid fa-users icon"></i>{" "}
              <span>Manage Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manage-contact-messages"} activeClassName="active" end>
              <i className="fa-solid fa-envelope icon"></i>{" "}
              <span>Contact Messages</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Drawer title="Dashboard" onClose={onClose} open={open}>
        <nav className="dashboard-menu">
          <ul>
            <li>
              <NavLink to={"/admin/dashboard"} activeClassName="active" end>
                <i className="fa-solid fa-dashboard icon"></i>{" "}
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/manage-usage"} activeClassName="active" end>
                <i className="fa-solid fa-tachometer-alt icon"></i>{" "}
                <span>Manage Usage</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/manage-distribution"} activeClassName="active" end>
                <i className="fa-solid fa-route icon"></i>{" "}
                <span>Manage Distribution</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/manage-leakages"} activeClassName="active" end>
                <i className="fa-solid fa-water icon"></i>{" "}
                <span>Manage Leakages</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/manage-users"} activeClassName="active" end>
                <i className="fa-solid fa-users icon"></i>{" "}
                <span>Manage Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/manage-contact-messages"} activeClassName="active" end>
                <i className="fa-solid fa-envelope icon"></i>{" "}
                <span>Contact Messages</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default DashboardSidebar;
