const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isUser } = require('../middleware/authMiddleware');

// DO NOT include /user prefix here — it's already added in server.js
router.get('/dashboard', isUser, userController.dashboard);
router.get('/medicine', isUser, userController.searchMedicines);
router.get('/medicine/:id', isUser, userController.viewMedicine);
router.post('/order/:id', isUser, userController.placeOrder);
router.get('/orders', isUser, userController.viewUserOrders);

module.exports = router;
