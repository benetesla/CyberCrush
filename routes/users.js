const router = require('express').Router();

router.get('/users', (req, res) => {
    res.status(200).json({
        name: "John Doe",
        email: "johaha@gmail.com",
    })

})
router.post('/UserName', (req, res) => {
    const UserName = req.body.UserName;
    const email = req.body.email;
    res.status(200).json({
        UserName: UserName,
        email: email,
    })
    console.log(UserName);
    console.log(email);
});

module.exports = router;