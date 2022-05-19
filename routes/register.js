const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("register", { title: "Register" });
});

router.get("/wallet", (req, res) => {
	res.render("walletfirst", { title: "Wallet" });
});

module.exports = router;
