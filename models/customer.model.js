const mongoose = require('mongoose');

const CustomerModel = new mongoose.Schema({


    name: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
});

const Customer = mongoose.model('Customer', CustomerModel);

module.exports = Customer;
