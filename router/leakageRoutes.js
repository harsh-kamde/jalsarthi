const express = require('express');
const { recordLeakage, getLeakages, updateLeakageStatus } = require('../controllers/leakage-controller');
const leakageRouter = express.Router();

leakageRouter.post('/', recordLeakage);
leakageRouter.get('/leakages', getLeakages);
leakageRouter.put('/leakages/:id', updateLeakageStatus);

module.exports = leakageRouter;
