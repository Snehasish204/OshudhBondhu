const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // make sure path is correct

// GET login & register
router.get('/login', authController.getLogin);
router.get('/register', authController.getRegister);

// POST login & register
router.post('/login', authController.postLogin);     // <== THIS was missing
router.post('/register', authController.postRegister);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
