const express = require('express');
const waterRouter = express.Router();
const waterUsageController = require('../controllers/water-usage-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require("../enums/roles");

waterRouter.post('/', authMiddleware([Roles.ADMIN]), waterUsageController.recordUsage);
waterRouter.get('/:householdId', authMiddleware([Roles.ADMIN]), waterUsageController.getUsageByHousehold);
waterRouter.get('/waterusage', authMiddleware([Roles.ADMIN]), waterUsageController.getAllUsage);
waterRouter.put('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.updateUsage);
waterRouter.delete('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.deleteUsage);
// Route to get ward-wise usage report
waterRouter.get('/ward-wise-usage',authMiddleware([Roles.ADMIN]), waterUsageController.getWardWiseUsageReport);

module.exports = waterRouter;
