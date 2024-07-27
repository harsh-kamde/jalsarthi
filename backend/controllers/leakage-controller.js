const Leakage = require('../models/leakage');

const recordLeakage = async (req, res) => {
    try {
        const leakage = new Leakage(req.body);
        await leakage.save();
        res.status(201).send(leakage);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getLeakages = async (req, res) => {
    try {
        const leakages = await Leakage.find({}).populate('household');
        res.status(200).send(leakages);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateLeakageStatus = async (req, res) => {
    try {
        const leakage = await Leakage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(leakage);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { recordLeakage, getLeakages, updateLeakageStatus };
