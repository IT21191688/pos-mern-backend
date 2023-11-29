const userSchema = require('../models/user.model');
const bcrypt = require('bcrypt')
const saltRounds = 10;



const register = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (err) {
            res.status(500).json(err);
        } else {
            const user = new userSchema({
                fullname: req.body.fullname,
                password: hash,
                email: req.body.email,
                activestate: req.body.activestate
            });

            user.save()
                .then(() => {
                    res.status(201).json({ "message": "Success" });
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        }
    });
};

const login = (req, res) => {


}


module.exports = {

    register, login
}