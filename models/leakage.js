const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leakageSchema = new Schema({
    household: { type: Schema.Types.ObjectId, ref: 'Household', required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['reported', 'in_progress', 'resolved'], default: 'reported' },
    dateReported: { type: Date, default: Date.now },
    dateResolved: { type: Date }
},{ timestamps: true });

const Leakage = mongoose.model('Leakage', leakageSchema);

module.exports = Leakage;
