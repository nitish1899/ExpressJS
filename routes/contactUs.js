
const express = require('express');

const contactUsController = require('../controllers/contact');

const router = express.Router();

router.get('/contactUS', contactUsController.contactPerson);

// router.post('/contactUS',(req,res,next) => {
//     res.redirect('/');
// });

module.exports = router;