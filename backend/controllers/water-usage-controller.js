const WaterUsage = require('../models/waterusage');

const recordUsage = async (req, res) => {
    try {
        const usage = new WaterUsage(req.body);
        await usage.save();
        res.status(201).send(usage);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getUsageByHousehold = async (req, res) => {
    try {
        const usage = await WaterUsage.find({ household: req.params.householdId });
        res.status(200).send(usage);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateUsage = async (req, res) => {
    try {
        const usage = await WaterUsage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(usage);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteUsage = async (req, res) => {
    try {
        await WaterUsage.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Water usage record deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { recordUsage, getUsageByHousehold, updateUsage, deleteUsage };
