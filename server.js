var express    = require('express');
var bodyParser = require('body-parser');
var exphbs     = require('express-handlebars');
var logger     = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 8000;

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });



// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.set('views', './views')
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require('./routes/apiRoutes')(app)

// Start the server
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });