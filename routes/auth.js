const router = require('express').Router();
const User = require('../models/User');
router.post('/register', async (req, res) => {
   
    const NewUser = new User({
        UserName: req.body.UserName,
        email: req.body.email,
        password: req.body.password,
       
    })
    try {
        const savedUser = await NewUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }

});

module.exports = router;