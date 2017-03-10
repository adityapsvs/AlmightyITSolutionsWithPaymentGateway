var mongoose = require('mongoose');

var servicesSchema = new mongoose.Schema({
	_id: {type: String, required: true},
	serviceName: String,
	servicePrice: String,
	servicePriceINR: String
});

mongoose.model('services', servicesSchema);