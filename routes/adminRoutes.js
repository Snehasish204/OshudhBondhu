const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', isAdmin, adminController.dashboard);
router.get('/orders', isAdmin, adminController.viewOrders);
router.post('/orders/:id/update', isAdmin, adminController.updateOrder);

module.exports = router;
