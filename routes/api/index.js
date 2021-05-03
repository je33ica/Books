const router = require("express").Router();

const bookRoutes = require("./books");
const googleRoutes = require("./search");
// const apiRoutes = require("./api");

router.use("/books", bookRoutes);
router.use("/search", googleRoutes);

// // If no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
