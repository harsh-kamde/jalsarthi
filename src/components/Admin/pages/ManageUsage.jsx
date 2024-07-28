import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardLayout from "../Dashboard/DashboardLayout";

const MyLeakageReports = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy data for ward-wise usage reports
    const dummyData = [
      { _id: "1", wardName: "Ward 1", totalUsage: 1200 },
      { _id: "2", wardName: "Ward 2", totalUsage: 950 },
      { _id: "3", wardName: "Ward 3", totalUsage: 1600 },
      { _id: "4", wardName: "Ward 4", totalUsage: 1100 },
      { _id: "5", wardName: "Ward 5", totalUsage: 1300 },
    ];
    
    setData(dummyData);
    setLoading(false);
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
      <h1>Ward Wise Usage Reports</h1>
      {loading ? (
        <Spin tip="Loading..." />
      ) : (
        <>
          <Table
            dataSource={data}
            columns={columns}
            rowKey="_id"
          />
          <h2>Water Usage by Ward</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="wardName" label={{ value: 'Ward', position: 'insideBottomRight', offset: 0 }} />
              <YAxis label={{ value: 'Total Usage (liters)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalUsage" fill="#8884d8" name="Total Usage (liters)" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </DashboardLayout>
  );
};

export default MyLeakageReports;
