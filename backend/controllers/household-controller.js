const Household = require('../models/household');

const createHousehold = async (req, res) => {
    try {
        const household = new Household(req.body);
        await household.save();
        res.status(201).send(household);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getHouseholds = async (req, res) => {
    try {
        const households = await Household.find().populate('ward user');
        res.status(200).send(households);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateHousehold = async (req, res) => {
    try {
        const household = await Household.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(household);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteHousehold = async (req, res) => {
    try {
        await Household.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Household deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createHousehold, getHouseholds, updateHousehold, deleteHousehold };
