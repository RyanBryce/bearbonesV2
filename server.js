const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const session = require('express-session');

//this is for Sequelize comment this out if using mongoose
const db = require('./models')

const PORT = process.env.PORT || 3001;

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: process.env.SESSIONSECRET,
  resave: false,
  saveUninitialized: true
}));

function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      id: null,
      name: '',
      username: '',
      email: '',
      profilePic: null
    }
    req.session.user.loggedIn = false;
    req.session.user.isAdmin = false;
  }
  next()
}

//using middlewhere acrossed the entire application before any route gets hit.
app.use(userSetup)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require("./routes/apiRoutes")

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
