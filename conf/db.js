const mongoose = require("mongoose");

const url =
	"mongodb+srv://fajar:JkFss5PtI1t6terj@cluster0.yu5ya.mongodb.net/blockchain?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log("MongoDB Connection Succeeded.");
		} else {
			console.log("Error in DB connection: " + err);
		}
	}
);

// module.exports = db;
