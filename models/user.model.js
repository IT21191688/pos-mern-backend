const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({


    fullname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    activestate: {

        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserModel);

module.exports = User;
