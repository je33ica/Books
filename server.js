const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use((req,res, next) => {

// })
// Define API routes here
app.use(routes);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connectes to DB");
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });

// app.use((req, res, next) => {
//   console.log("incoming res", req.path);
//   next();
// });

// Send every other request to the React app
