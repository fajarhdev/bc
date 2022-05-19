var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Home" });
});

router.get("/products", (req, res, next) => {
	res.render("products", { title: "Products" });
});

router.get("/buy", (req, res, next) => {
	// nanti disini di pasang cek session dan masuk ke salah satu view wallet
	res.render("walletfirst", { title: "Wallet" });
});
module.exports = router;
