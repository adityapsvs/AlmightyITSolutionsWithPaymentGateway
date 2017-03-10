var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var services = mongoose.model('services');
var customers = mongoose.model('customers');
var request = require('request');

router.get('/service', function(req, res) {
	var id = req.query.id;
	services.findById(id, function(err, data) {
		res.render('service', {data});
	});
});

router.post('/details', function(req, res) {
	var id = req.query.id;
	var serviceName;
	var servicePrice;
	services.findById(id, function(err, data) {
		serviceName = data.serviceName;
		servicePrice = data.servicePrice;
		customers.find(function(err, doc) {
			var cust = new customers();
			var totRows = doc.length;
			cust._id = totRows+1;
			cust.customerName = req.body.name;
			cust.customerEmail = req.body.email;
			cust.customerContact = req.body.mobile;
			cust.customerService = serviceName;
			cust.customerServicePrice = servicePrice;
			// cust.save(function(err) {
			// 	if(err) throw err;
			// });
			res.render('invoice' , {cust})
		})
	});
});

module.exports = router;