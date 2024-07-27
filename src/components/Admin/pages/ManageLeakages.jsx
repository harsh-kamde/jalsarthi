import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { API_URL } from "../../../store/apiUrl";
import moment from "moment";

const { Option } = Select;

const ManageLeakages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentLeakage, setCurrentLeakage] = useState(null);

  const token = localStorage.getItem("token");

  const fetchLeakages = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/leakage/leakages`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leakages:", error);
      setLoading(false);
    }
  };

  const updateLeakageStatus = async (id, values) => {
    try {
      const response = await axios.put(`${API_URL}/api/leakages/${id}`, values, {
        headers: { token },
      });
      setData((prevData) =>
        prevData.map((item) => (item._id === id ? response.data : item))
      );
      setEditModalVisible(false);
    } catch (error) {
      console.error("Error updating leakage status:", error);
    }
  };

  const handleEditClick = (leakage) => {
    setCurrentLeakage(leakage);
    setEditModalVisible(true);
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
    setCurrentLeakage(null);
  };

  const handleEditModalOk = (values) => {
    updateLeakageStatus(currentLeakage._id, values);
  };

  useEffect(() => {
    fetchLeakages();
  }, []);

  return (
    <DashboardLayout>
      <div className="container">
        <h1>Manage Leakages</h1>
        <Table
          dataSource={data}
          loading={loading}
          columns={[
            {
              title: "Household",
              dataIndex: "household",
              key: "household",
              render: (household) => household.ownerName, // Assuming household has a name field
            },
            {
              title: "Description",
              dataIndex: "description",
              key: "description",
            },
            {
              title: "Status",
              dataIndex: "status",
              key: "status",
              render: (status) => status.charAt(0).toUpperCase() + status.slice(1),
            },
            {
              title: "Date Reported",
              dataIndex: "dateReported",
              key: "dateReported",
              render: (date) => moment(date).format("DD-MM-YYYY"),
            },
            {
              title: "Date Resolved",
              dataIndex: "dateResolved",
              key: "dateResolved",
              render: (date) => (date ? moment(date).format("DD-MM-YYYY") : "N/A"),
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
        title="Edit Leakage"
        visible={editModalVisible}
        onCancel={handleEditModalCancel}
        footer={null}
      >
        <Form
          initialValues={currentLeakage}
          onFinish={handleEditModalOk}
        >
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select>
              <Option value="reported">Reported</Option>
              <Option value="in_progress">In Progress</Option>
              <Option value="resolved">Resolved</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dateResolved"
            label="Date Resolved"
          >
            <Input type="date" />
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

export default ManageLeakages;
