'use strict';
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var customers = mongoose.model('customers');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adithya7dhoni@gmail.com',
        pass: 'adithyalovesdhoni'
    }
});

router.post('/submit', function(req, res) {
	var mailOptions = {
		to: 'adithyapsv@gmail.com', // list of receivers
		subject: req.body.subject, // Subject line
		text: 'Customer name: '+req.body.name+'\nEmail address: '+req.body.email+'\nMobile number: '+req.body.mobile+'\nMessage: '+req.body.message, // plain text body
	};
	transporter.sendMail(mailOptions, (error, info) => {
    	if (error) {
        	return console.log(error);
    	}
    	console.log('Message %s sent: %s', info.messageId, info.response);
	});
	customers.find(function(err, doc) {
		var totRows = doc.length;
		var cust = new customers();
		cust._id = totRows+1;
		cust.customerName = req.body.name;
		cust.customerEmail = req.body.email;
		cust.customerContact = req.body.mobile;
		cust.customerSubject = req.body.subject;
		cust.customerMessage = req.body.message;
		cust.save(function(err) {
			if(err) throw err;
		})
	});
	res.redirect('../html/Contact.html');
});

module.exports = router;