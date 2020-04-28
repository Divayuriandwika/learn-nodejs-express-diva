const express = require ("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).json({ message: "Hello this is my first API"});
});

module.exports = router;