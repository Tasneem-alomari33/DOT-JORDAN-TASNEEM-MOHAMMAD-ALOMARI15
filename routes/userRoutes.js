const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const isAdmin = require("../middleware/role");

const { getUsers } = require("../controllers/userController");

router.get("/", auth, isAdmin, getUsers);

module.exports = router;