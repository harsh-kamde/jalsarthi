import React, { useState, useEffect } from "react";
import { Table, Spin, Alert, Card } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import DashboardLayout from "../Dashboard/DashboardLayout";

const ManageDistribution = () => {
  const [wardData, setWardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dummy data for ward-wise usage reports
    const dummyData = [
      { _id: "1", wardName: "Ward 1", totalUsage: 1200 },
      { _id: "2", wardName: "Ward 2", totalUsage: 950 },
      { _id: "3", wardName: "Ward 3", totalUsage: 1600 },
      { _id: "4", wardName: "Ward 4", totalUsage: 1100 },
      { _id: "5", wardName: "Ward 5", totalUsage: 1300 },
    ];

    setWardData(dummyData);
    setLoading(false);
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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

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
        <>
          <Card title="Ward Wise Water Distribution" style={{ marginBottom: "20px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wardData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="wardName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalUsage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Water Distribution Pie Chart" style={{ marginBottom: "20px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={wardData} dataKey="totalUsage" nameKey="wardName" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {wardData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Table
            dataSource={wardData}
            columns={columns}
            rowKey="_id"
            pagination={false}
            style={{ marginTop: "20px" }}
          />
        </>
      )}
    </DashboardLayout>
  );
};

export default ManageDistribution;
