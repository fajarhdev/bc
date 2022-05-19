var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
const walletRouter = require("./routes/wallet");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const session = require("express-session");
const { devNull } = require("os");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 15 * 60 * 1000 },
	})
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/wallet", walletRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
	useNewUriParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
	console.log("Connected to Database");
});

module.exports = app;
