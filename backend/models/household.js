const mongoose = require("mongoose"); //defining the schema

const HouseholdSchema = new mongoose.Schema({
    address: { type: String, required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true },
    meterId: { type: String, required: true, unique: true },
    ownerName: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const HouseHold = mongoose.model("Household",HouseholdSchema);

module.exports = HouseHold;
