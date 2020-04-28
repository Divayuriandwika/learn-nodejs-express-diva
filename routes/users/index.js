const express = require("express");
const router = express.Router();


const { getAll, addUser, editUser, filterByAddress} = require ("./controller");

router.get ("/", getAll);
router.post ("/", addUser);
router.put ("/:id", editUser);
router.get ("/filterByAddress", filterByAddress);


module.exports = router;