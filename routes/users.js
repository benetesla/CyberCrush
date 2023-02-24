const router = require('express').Router();

router.get('/users', (req, res) => {
    res.status(200).json({
        name: "John Doe",
        email: "johaha@gmail.com",
    })

})

module.exports = router;