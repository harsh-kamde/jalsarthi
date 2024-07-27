const mongoose = require("mongoose"); //defining the schema

const WardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true }
}, { timestamps: true });

const Ward = mongoose.model('Ward', WardSchema);

module.exports = Ward;
