import React, { useState, useEffect } from "react";
import { Layout, Card, Table, Button, Modal } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend } from "recharts";
import { ResponsiveContainer } from "recharts";
import axios from "axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "../../../stylesheets/Admin/Dashboard/Dashboard.css";
import { API_URL } from "../../../store/apiUrl";
import moment from "moment";

const Dashboard = () => {
  const [data, setData] = useState({
    totalHouseholds: 0,
    totalUsers: 0,
    totalUsage: 0,
    totalUsageToday: 0,
    monthlyUsage: 0,
    yearlyUsage: 0,
    recentReports: [],
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
        totalUsers: dashboardData.totalUsers,
        totalUsage: dashboardData.totalUsage,
        totalUsageToday: dashboardData.totalUsageToday,
        monthlyUsage: dashboardData.monthlyUsage,
        yearlyUsage: dashboardData.yearlyUsage,
        recentReports: dashboardData.recentReports,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Card title="Total Users" className="dashboard-card card2">
              {data.totalUsers}
            </Card>
          </div>
          <div>
            <Card title="Total Usage" className="dashboard-card card3">
              {data.totalUsage}
            </Card>
          </div>
          <div>
            <Card title="Water Supplied Today" className="dashboard-card card4">
              {data.totalUsageToday}
            </Card>
          </div>
          <div>
            <Card title="Monthly Water Supply" className="dashboard-card card5">
              {data.monthlyUsage}
            </Card>
          </div>
          <div>
            <Card title="Yearly Water Supply" className="dashboard-card card6">
              {data.yearlyUsage}
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
            dataSource={data.recentReports}
            scroll={{
              x: 500,
            }}
            columns={[
              { title: "Period", dataIndex: "period", key: "period" },
              { title: "Start Date", dataIndex: "startDate", key: "startDate", render: (date) => moment(date).format("DD-MM-YYYY") },
              { title: "End Date", dataIndex: "endDate", key: "endDate", render: (date) => moment(date).format("DD-MM-YYYY") },
              { title: "Total Usage", dataIndex: "totalUsage", key: "totalUsage" },
              { title: "Average Usage Per Household", dataIndex: "averageUsagePerHousehold", key: "averageUsagePerHousehold" },
              { title: "Leakage Detected", dataIndex: "leakageDetected", key: "leakageDetected", render: (text) => text ? "Yes" : "No" },
            ]}
          />
        </div>
      </div>
      {renderReportModal()}
    </DashboardLayout>
  );
};

export default Dashboard;
