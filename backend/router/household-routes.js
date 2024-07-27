const express = require('express');
const router = express.Router();
const householdController = require('../controllers/household-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require('../enums/roles');

router.post('/', authMiddleware([Roles.ADMIN]), householdController.createHousehold);
router.get('/', authMiddleware([Roles.ADMIN]), householdController.getHouseholds);
router.put('/:id', authMiddleware([Roles.ADMIN]), householdController.updateHousehold);
router.delete('/:id', authMiddleware([Roles.ADMIN]), householdController.deleteHousehold);

module.exports = router;
