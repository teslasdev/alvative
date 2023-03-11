const express  = require('express');
const  Balance = require('../controllers/Balance.js');
const Login  = require('../controllers/Login.js');
const Transaction = require('../controllers/Transaction.js');

const router = express.Router()

// POST METHODS

router.post('/login' , Login)
router.get('/balance/:key' , Balance)
router.get('/transaction/:key' , Transaction)

module.exports = router;