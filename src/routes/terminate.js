const express = require('express');
const Terminate = require('../controllers/terminate');


const router = express.Router();

router.post('/',Terminate.terminatesession);
router.post('/all', Terminate.terminateall);

module.exports=router