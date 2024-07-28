const Ward = require('../models/ward');

const createWard = async (req, res) => {
    try {
        const ward = new Ward(req.body);
        await ward.save();
        res.status(201).send(ward);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getWards = async (req, res) => {
    try {
        const wards = await Ward.find();
        res.status(200).send(wards);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateWard = async (req, res) => {
    try {
        const ward = await Ward.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(ward);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteWard = async (req, res) => {
    try {
        await Ward.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Ward deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createWard, getWards, updateWard, deleteWard };
