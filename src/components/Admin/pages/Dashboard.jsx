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
} from "recharts";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
  Legend as PieLegend,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "../../../stylesheets/Admin/Dashboard/Dashboard.css";
import { API_URL } from "../../../store/apiUrl";
import moment from "moment";

const Dashboard = () => {
  const [data, setData] = useState({
    totalHouseholds: 0,
    supplyToday: 0,
    monthlySupply: 0,
    yearlySupply: 0,
    usageData: [],
    supplyByCategory: [],
    recentUsages: [],
  });

  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [reportContent, setReportContent] = useState("");

  const dashboardUrl = `${API_URL}/api/dashboard/`;
  const reportApiUrl = `${API_URL}/api/dashboard/report`;

  const token = localStorage.getItem("token");

  const formatDate = (tick) => moment(tick).format("DD-MM-YYYY");

  const generateReport = async (type) => {
    try {
      const response = await axios.get(`${reportApiUrl}?type=${type}`, {
        headers: { token },
      });
      setReportContent(response.data);
      setReportModalVisible(true);
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

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
            href={`${reportApiUrl}?type=download`}
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

  const fetchData = async () => {
    try {
      const response = await axios.get(dashboardUrl, { headers: { token } });
      const dashboardData = response.data;
      setData({
        totalHouseholds: dashboardData.totalHouseholds,
        supplyToday: dashboardData.supplyToday,
        monthlySupply: dashboardData.monthlySupply,
        yearlySupply: dashboardData.yearlySupply,
        usageData: dashboardData.usageData,
        supplyByCategory: dashboardData.supplyByCategory,
        recentUsages: dashboardData.recentUsages,
      });
      console.log("data hi data h",setData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              onClick={() => generateReport("weekly")}
              className="report-btn"
            >
              Weekly Report
            </Button>
            <Button
              type="primary"
              onClick={() => generateReport("monthly")}
              className="report-btn"
            >
              Monthly Report
            </Button>
            <Button
              type="primary"
              onClick={() => generateReport("yearly")}
              className="report-btn"
            >
              Yearly Report
            </Button>
          </div>
        </div>
        <hr />

        <div className="dashboard-cards">
          <div>
            <Card title="Total Households" className="dashboard-card card1">
              {data.totalHouseholds}
            </Card>
          </div>
          <div>
            <Card title="Water Supplied Today" className="dashboard-card card2">
              {data.supplyToday}
            </Card>
          </div>
          <div>
            <Card title="Monthly Water Supply" className="dashboard-card card3">
              {data.monthlySupply}
            </Card>
          </div>
          <div>
            <Card title="Yearly Water Supply" className="dashboard-card card4">
              {data.yearlySupply}
            </Card>
          </div>
        </div>

        <hr />

        {/* Line chart */}
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

        {/* Pie chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.supplyByCategory}
                labelLine={false}
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#00bfff"
                dataKey="count"
                nameKey="_id"
              >
                {data.supplyByCategory.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <PieTooltip
                formatter={(value, name, props) => [
                  `${value}`,
                  `${props.payload._id}`,
                ]}
              />
              <PieLegend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="tableRow">
          <hr />
          <Table
            dataSource={data.recentUsages}
            scroll={{
              x: 500,
            }}
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
