const express = require('express');
const router = express.Router();
const wardController = require('../controllers/ward-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Roles = require("../enums/roles");

router.post('/', authMiddleware([Roles.ADMIN]), wardController.createWard);
router.get('/', authMiddleware([Roles.ADMIN]), wardController.getWards);
router.put('/:id', authMiddleware([Roles.ADMIN]), wardController.updateWard);
router.delete('/:id', authMiddleware([Roles.ADMIN]), wardController.deleteWard);

module.exports = router;
