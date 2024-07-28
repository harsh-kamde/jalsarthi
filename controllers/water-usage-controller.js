const WaterUsage = require('../models/waterusage');
const Ward = require('../models/ward');
const Household = require('../models/household');

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

const getAllUsage = async (req, res) => {
    try {
        const usage = await WaterUsage.find({});
        console.log("here is our usage:",usage);
        res.status(200).send(usage);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getWardWiseUsageReport = async (req, res) => {
    try {
        // Aggregate water usage by ward 
        const usageByWard = await WaterUsage.aggregate([
            {
                $lookup: {
                    from: 'households',
                    localField: 'household',
                    foreignField: '_id',
                    as: 'householdInfo'
                }
            },
            {
                $unwind: '$householdInfo'
            },
            {
                $lookup: {
                    from: 'wards',
                    localField: 'householdInfo.ward',
                    foreignField: '_id',
                    as: 'wardInfo'
                }
            },
            {
                $unwind: '$wardInfo'
            },
            {
                $group: {
                    _id: '$wardInfo._id',
                    wardName: { $first: '$wardInfo.ward' },
                    totalUsage: { $sum: '$usage' }
                }
            },
            {
                $sort: { totalUsage: -1 } // Sort by total usage descending
            }
        ]);

        res.status(200).json(usageByWard);
    } catch (error) {
        console.error("Error fetching ward-wise usage report:", error);
        res.status(500).send({ error: "Failed to retrieve ward-wise usage report." });
    }
};


module.exports = { recordUsage, getUsageByHousehold, updateUsage, deleteUsage, getAllUsage, getWardWiseUsageReport };
