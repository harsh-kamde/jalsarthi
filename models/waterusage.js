const mongoose = require("mongoose"); //defining the schema

const WaterUsageSchema = new mongoose.Schema({
    household: { type: mongoose.Schema.Types.ObjectId, ref: 'Household', required: true },
    timestamp: { type: Date, required: true, default: Date.now },
    usage: { type: Number, required: true } // in liters
}, { timestamps: true });

const WaterUsage = mongoose.model("WaterUsage", WaterUsageSchema);

module.exports = WaterUsage;
