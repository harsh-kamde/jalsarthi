
const mongoose = require("mongoose"); //defining the schema
const ReportSchema = new mongoose.Schema({
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true },
    period: { type: String, required: true }, // e.g., 'June 2024'
    totalUsage: { type: Number, required: true }, // in liters
    averageUsagePerHousehold: { type: Number, required: true }, // in liters
    leakageDetected: { type: Boolean, default: false }
}, { timestamps: true });

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;
