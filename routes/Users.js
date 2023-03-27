const express = require("express");
const router = express.Router();
const { Users } = require("../models");
// Add User
router.post("/reg", async (req, res) => {
    const { name, email, whatsapp, age, country } = req.body;

    await Users.create({
        name: name,
        email: email,
        whatsapp: whatsapp,
        age: age,
        country: country,
    });
    res.json("Success");

});


module.exports = router;