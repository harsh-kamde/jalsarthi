import React, { useState, useEffect } from "react";
import { Table, Spin, Alert } from "antd";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { API_URL } from "../../../store/apiUrl";

const ManageDistribution = () => {
  const [wardData, setWardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchWardData = async () => {
    const distributionUrl = `${API_URL}/api/v1/water-usage/ward-wise-usage`;
    try {
      const response = await axios.get(distributionUrl, {
        headers: { token }}); // Adjust API URL as needed
      setWardData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch ward-wise usage data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWardData();
  }, []);

  const columns = [
    {
      title: "Ward Name",
      dataIndex: "wardName",
      key: "wardName",
    },
    {
      title: "Total Usage (Liters)",
      dataIndex: "totalUsage",
      key: "totalUsage",
    },
  ];

  return (
    <DashboardLayout>
      <h1>Manage Distribution</h1>
      <p>Manage water distribution details and operations.</p>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : error ? (
        <Alert message={error} type="error" showIcon />
      ) : (
        <Table
          dataSource={wardData}
          columns={columns}
          rowKey="_id"
          pagination={false}
          style={{ marginTop: "20px" }}
        />
      )}
    </DashboardLayout>
  );
};

export default ManageDistribution;
