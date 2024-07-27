import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { API_URL } from "../../../store/apiUrl";
import moment from "moment";

const { Option } = Select;

const ManageUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/auth/allUsers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("response:",response)
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const updateUser = async (id, values) => {
    try {
      const response = await axios.put(`${API_URL}/api/users/${id}`, values, {
        headers: { token },
      });
      setData((prevData) =>
        prevData.map((item) => (item._id === id ? response.data : item))
      );
      setEditModalVisible(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setEditModalVisible(true);
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
    setCurrentUser(null);
  };

  const handleEditModalOk = (values) => {
    updateUser(currentUser._id, values);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="container">
        <h1>Manage Users</h1>
        <Table
          dataSource={data}
          loading={loading}
          columns={[
            {
              title: "Username",
              dataIndex: "username",
              key: "username",
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
              key: "phone",
            },
            {
              title: "Role",
              dataIndex: "role",
              key: "role",
              render: (role) => role.charAt(0).toUpperCase() + role.slice(1),
            },
            {
              title: "Created At",
              dataIndex: "createdAt",
              key: "createdAt",
              render: (date) => moment(date).format("DD-MM-YYYY"),
            },
            {
              title: "Action",
              key: "action",
              render: (text, record) => (
                <Button type="primary" onClick={() => handleEditClick(record)}>
                  Edit
                </Button>
              ),
            },
          ]}
        />
      </div>
      <Modal
        title="Edit User"
        visible={editModalVisible}
        onCancel={handleEditModalCancel}
        footer={null}
      >
        <Form
          initialValues={currentUser}
          onFinish={handleEditModalOk}
        >
          <Form.Item
            name="username"
            label="User Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Please input the phone number!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select>
              <Option value="admin">Customer</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </DashboardLayout>
  );
};

export default ManageUsers;
