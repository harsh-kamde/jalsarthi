import React, { useState, useEffect } from "react";
import { Table, Button, Modal, message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { API_URL } from "../../../store/apiUrl";
import moment from "moment";

const ManageContactMessages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [currentMessageId, setCurrentMessageId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/contact/contactMessages`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
      console.log("ye mila bhai",response.data)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      setLoading(false);
    }
  };

  const deleteContactMessage = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/v1/contact/contactMessages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data.filter((item) => item._id !== id));
      setDeleteModalVisible(false);
      message.success("Contact message deleted successfully");
    } catch (error) {
      console.error("Error deleting contact message:", error);
      message.error("Failed to delete contact message");
    }
  };

  const handleDeleteClick = (id) => {
    setCurrentMessageId(id);
    setDeleteModalVisible(true);
  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
    setCurrentMessageId(null);
  };

  const handleDeleteModalOk = () => {
    if (currentMessageId) {
      deleteContactMessage(currentMessageId);
    }
  };

  useEffect(() => {
    fetchContactMessages();
  }, []);

  return (
    <DashboardLayout>
      <div className="container">
        <h1>Contact Messages</h1>
        <Table
          dataSource={data}
          loading={loading}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
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
              title: "Message",
              dataIndex: "message",
              key: "message",
            },
            {
              title: "Received At",
              dataIndex: "createdAt",
              key: "createdAt",
              render: (date) => moment(date).format("DD-MM-YYYY"),
            },
            {
              title: "Action",
              key: "action",
              render: (text, record) => (
                <Button type="danger" onClick={() => handleDeleteClick(record._id)}>
                  Delete
                </Button>
              ),
            },
          ]}
        />
      </div>
      <Modal
        title="Delete Contact Message"
        visible={deleteModalVisible}
        onCancel={handleDeleteModalCancel}
        onOk={handleDeleteModalOk}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this contact message?</p>
      </Modal>
    </DashboardLayout>
  );
};

export default ManageContactMessages;
