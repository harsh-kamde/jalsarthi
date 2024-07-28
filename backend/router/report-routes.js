const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const Roles = require('../enums/roles');

// Generate Monthly or Yearly Report 
router.post('/generate', reportController.generateReport);

// Get All Reports 
router.get('/', authMiddleware([Roles.ADMIN]), reportController.getReports);

// Get All dashboard data 
router.get('/dashboard', authMiddleware([Roles.ADMIN]), reportController.getDashboardData);

// Get Reports by Date Range 
router.get('/date-range', authMiddleware([Roles.ADMIN]), reportController.getReportsByDateRange);

// Update Report 
router.put('/:id', authMiddleware([Roles.ADMIN]), reportController.updateReport);

// Delete Report 
router.delete('/:id', authMiddleware([Roles.ADMIN]), reportController.deleteReport);

module.exports = router;
