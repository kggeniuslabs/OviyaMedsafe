const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/login', authController.login);
router.patch('/update-password',authController.updatePassword);
module.exports = router;
                                                                                                                                                                                                                    