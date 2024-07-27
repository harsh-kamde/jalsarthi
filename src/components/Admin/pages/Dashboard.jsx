import React, { useState, useEffect } from "react";
import { Layout, Card, Table, Button, Modal } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "../../../stylesheets/Admin/Dashboard/Dashboard.css";
import moment from "moment";

const Dashboard = () => {
  const [data, setData] = useState({
    totalHouseholds: 100,
    supplyToday: 1500,
    monthlySupply: 45000,
    yearlySupply: 540000,
    totalSupply: 6000000,
    usageData: [
      { date: "2023-07-01", amount: 100 },
      { date: "2023-07-02", amount: 150 },
      { date: "2023-07-03", amount: 200 },
      { date: "2023-07-04", amount: 250 },
      { date: "2023-07-05", amount: 300 },
      { date: "2023-07-06", amount: 350 },
      { date: "2023-07-07", amount: 400 },
    ],
    totalUsers: 50,
    recentUsages: [
      {
        status: "Completed",
        address: {
          firstName: "John",
          lastName: "Doe",
          phone: "1234567890",
        },
        amount: 100,
        date: "2023-07-01",
      },
      {
        status: "Pending",
        address: {
          firstName: "Jane",
          lastName: "Smith",
          phone: "0987654321",
        },
        amount: 150,
        date: "2023-07-02",
      },
    ],
  });

  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [reportContent, setReportContent] = useState("");

  const formatDate = (tick) => moment(tick).format("DD-MM-YYYY");

  const handleCloseReportModal = () => {
    setReportModalVisible(false);
    setReportContent("");
  };

  const renderReportModal = () => {
    return (
      <Modal
        title="Generated Report"
        visible={reportModalVisible}
        onCancel={handleCloseReportModal}
        footer={[
          <Button
            key="download"
            type="primary"
            href="#"
            download
          >
            Download
          </Button>,
          <Button key="close" onClick={handleCloseReportModal}>
            Close
          </Button>,
        ]}
      >
        <div dangerouslySetInnerHTML={{ __html: reportContent }} />
      </Modal>
    );
  };

  const colors = [
    "#1e90ff",
    "#00bfff",
    "#87cefa",
    "#4682b4",
    "#5f9ea0",
    "#6495ed",
  ];

  return (
    <DashboardLayout>
      <div className="container dashboard-content">
        <div className="dashboard-top">
          <div>
            <h3>Dashboard</h3>
          </div>

          <div className="report-buttons">
            <Button
              type="primary"
              onClick={() => console.log("Generate Weekly Report")}
              className="report-btn"
            >
              Weekly Report
            </Button>
            <Button
              type="primary"
              onClick={() => console.log("Generate Monthly Report")}
              className="report-btn"
            >
              Monthly Report
            </Button>
            <Button
              type="primary"
              onClick={() => console.log("Generate Yearly Report")}
              className="report-btn"
            >
              Yearly Report
            </Button>
          </div>
        </div>
        <hr />

        <div className="dashboard-cards">
          <Card title="Total Households" className="dashboard-card card1">
            {data.totalHouseholds}
          </Card>
          <Card title="Total Water Supplied" className="dashboard-card card2">
            {data.totalSupply}
          </Card>
          <Card title="Monthly Water Supply" className="dashboard-card card3">
            {data.monthlySupply}
          </Card>
          <Card title="Yearly Water Supply" className="dashboard-card card4">
            {data.yearlySupply}
          </Card>
        </div>

        <hr />

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={formatDate} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#1e90ff"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.usageData}
                dataKey="amount"
                nameKey="date"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.usageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="tableRow">
          <hr />
          <Table
            dataSource={data.recentUsages}
            scroll={{ x: 500 }}
            columns={[
              { title: "Status", dataIndex: "status", key: "status" },
              {
                title: "User Name",
                key: "userName",
                render: (text, record) =>
                  `${record.address.firstName} ${record.address.lastName}`,
              },
              {
                title: "User Phone",
                key: "phone",
                render: (text, record) => `${record.address.phone}`,
              },
              {
                title: "Total Amount",
                key: "amount",
                render: (text, record) => `${record.amount}`,
              },
              {
                title: "Date",
                dataIndex: "date",
                key: "date",
                render: (date) => moment(date).format("DD-MM-YYYY"),
              },
            ]}
          />
        </div>
      </div>
      {renderReportModal()}
    </DashboardLayout>
  );
};

export default Dashboard;
