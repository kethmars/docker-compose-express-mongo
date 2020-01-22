const express = require('express');
const router = express.Router();

// Registered entity routes
router.use(require('./users/router'));

module.exports = router;
