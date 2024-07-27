const express = require('express');
const router = express.Router();
const waterUsageController = require('../controllers/water-usage-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require("../enums/roles");

router.post('/', authMiddleware([Roles.ADMIN]), waterUsageController.recordUsage);
router.get('/:householdId', authMiddleware([Roles.ADMIN]), waterUsageController.getUsageByHousehold);
router.put('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.updateUsage);
router.delete('/:id', authMiddleware([Roles.ADMIN]), waterUsageController.deleteUsage);

module.exports = router;
