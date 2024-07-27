import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { API_URL } from "../../../store/apiUrl";
const token = localStorage.getItem("token");

const MyLeakageReports = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWardWiseUsageReport = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/water-usage/ward-wise-usage`, {
        headers: { token }});
      setData(response.data);
    } catch (error) {
      console.error("Error fetching ward-wise usage report:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWardWiseUsageReport();
  }, []);

  const columns = [
    {
      title: 'Ward Name',
      dataIndex: 'wardName',
      key: 'wardName',
    },
    {
      title: 'Total Usage (liters)',
      dataIndex: 'totalUsage',
      key: 'totalUsage',
    },
  ];

  return (
    <DashboardLayout>
      <h1>Ward Wise Usages Reports</h1>
      {loading ? (
        <Spin tip="Loading..." />
      ) : (
        <Table
          dataSource={data}
          columns={columns}
          rowKey="_id"
        />
      )}
    </DashboardLayout>
  );
};

export default MyLeakageReports;
