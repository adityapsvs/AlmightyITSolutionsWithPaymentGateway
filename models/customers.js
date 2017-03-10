var mongoose = require('mongoose');

var customersSchema = new mongoose.Schema({
	_id: {type: String, required: true},
	customerName: String,
	customerEmail: String,
	customerContact: String,
	customerSubject: String,
	customerMessage: String,
	customerService: String,
	customerServicePrice: String
});

mongoose.model('customers', customersSchema);