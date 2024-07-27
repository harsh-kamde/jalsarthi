const express = require('express');
const router = express.Router();
const waterUsageController = require('../controllers/water-usage-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require("../enums/roles");

router.post('/', authMiddleware([Roles.ADMIN]), waterUsageController.recordUsage);
router.get('/:householdId', authMiddleware([Roles.ADMIN]), waterUsageController.getUsageByHousehold);
router.get('/waterusage', authMiddleware([Roles.ADMIN]), waterUsageController.getAllUsage);
router.put('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.updateUsage);
router.delete('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.deleteUsage);
// Route to get ward-wise usage report
router.get('/ward-wise-usage',authMiddleware([Roles.ADMIN]), waterUsageController.getWardWiseUsageReport);

module.exports = router;
