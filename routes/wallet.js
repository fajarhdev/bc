const express = require("express");
// const user = require("../models/user");
const router = express.Router();

router.get("/", (req, res, next) => {
	// nanti disini tambahkan session validation, jadi nanti akan ada 2 view dan hanya satu yg tampil sesuai session
	// res.render("wallet", { title: "Wallet", address: "126egdqjwet6q2eqejdqhwge" });
	res.render("walletfirst", { title: "wallet" });
});

// router.get("/login", async (req, res, next) => {
// 	// kirim isi form
// 	const data = {
// 		username: req.body.username,
// 		email: req.body.email,
// 		pass: req.body.password,
// 	};
// 	// user.insertMany();
// 	res.render("login", { title: "Login" });
// });

// router.get("/register", async (req, res, next) => {
// 	await res.render("register", { title: "Register" });
// });

module.exports = router;
