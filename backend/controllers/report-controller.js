const Report = require("../models/report");
const WaterUsage = require("../models/waterusage");
const Household = require("../models/household");
const User = require("../models/user-model");

// Generate Monthly or Yearly Report
const generateReport = async (req, res) => {
  try {
    const { wardId, period } = req.body;
    console.log(req.body);
    if (!["monthly", "yearly"].includes(period)) {
      return res
        .status(400)
        .send({ error: "Invalid period. Use 'monthly' or 'yearly'." });
    }

    // Calculate start and end dates based on period
    let startDate, endDate;
    const today = new Date();

    if (period === "monthly") {
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    } else if (period === "yearly") {
      startDate = new Date(today.getFullYear(), 0, 1);
      endDate = new Date(today.getFullYear() + 1, 0, 0);
    }
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);

    const totalUsage = await WaterUsage.aggregate([
      {
        $match: { ward: wardId, timestamp: { $gte: startDate, $lte: endDate } },
      },
      { $group: { _id: null, total: { $sum: "$usage" } } },
    ]);
    console.log(totalUsage);
    const householdCount = await Household.countDocuments({ ward: wardId });
    const averageUsagePerHousehold =
      householdCount > 0 ? (totalUsage[0]?.total || 0) / householdCount : 0;

    const leakageDetected = false; // Placeholder logic, needs proper implementation

    const report = new Report({
      ward: wardId,
      period: period,
      startDate: startDate,
      endDate: endDate,
      totalUsage: totalUsage[0]?.total || 0,
      averageUsagePerHousehold: averageUsagePerHousehold,
      leakageDetected: leakageDetected,
    });
    console.log("report:", report);
    await report.save();
    res.status(201).send(report);
  } catch (error) {
    res.status(400).send({ error: "Failed to generate report." });
  }
};

// Get All Reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).send(reports);
  } catch (error) {
    res.status(500).send({ error: "Failed to retrieve reports." });
  }
};

// Get Reports Within Start and End Date
const getReportsByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate) {
      return res
        .status(400)
        .send({ error: "Please provide both startDate and endDate." });
    }

    const reports = await Report.find({
      startDate: { $gte: new Date(startDate) },
      endDate: { $lte: new Date(endDate) },
    }).populate("ward");

    res.status(200).send(reports);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve reports by date range." });
  }
};

// Update Report
const updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!report) {
      return res.status(404).send({ error: "Report not found." });
    }
    res.status(200).send(report);
  } catch (error) {
    res.status(400).send({ error: "Failed to update report." });
  }
};

// Delete Report
const deleteReport = async (req, res) => {
  try {
    const result = await Report.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ error: "Report not found." });
    }
    res.status(200).send({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete report." });
  }
};

// Get Dashboard Data
const getDashboardData = async (req, res) => {
  try {
    const totalHouseholds = await Household.countDocuments();
    const totalUsers = await User.countDocuments({ role: "user" });

    const totalUsage = await WaterUsage.aggregate([
      { $group: { _id: null, total: { $sum: "$usage" } } },
    ]);

    const totalUsageToday = await WaterUsage.aggregate([
      {
        $match: {
          timestamp: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      },
      { $group: { _id: null, total: { $sum: "$usage" } } },
    ]);

    const monthlyUsage = await WaterUsage.aggregate([
      {
        $match: {
          timestamp: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            $lt: new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              0
            ),
          },
        },
      },
      { $group: { _id: null, total: { $sum: "$usage" } } },
    ]);

    const yearlyUsage = await WaterUsage.aggregate([
      {
        $match: {
          timestamp: {
            $gte: new Date(new Date().getFullYear(), 0, 1),
            $lt: new Date(new Date().getFullYear(), 12, 31),
          },
        },
      },
      { $group: { _id: null, total: { $sum: "$usage" } } },
    ]);

    const recentReports = await Report.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).send({
      totalHouseholds,
      totalUsers,
      totalUsage: totalUsage[0]?.total || 0,
      totalUsageToday: totalUsageToday[0]?.total || 0,
      monthlyUsage: monthlyUsage[0]?.total || 0,
      yearlyUsage: yearlyUsage[0]?.total || 0,
      recentReports,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to retrieve dashboard data." });
  }
};

module.exports = {
  generateReport,
  getReports,
  getReportsByDateRange,
  updateReport,
  deleteReport,
  getDashboardData,
};
