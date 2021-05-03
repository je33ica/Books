const router = require("express").Router();
const googleController = require("../../controller/googleController");

router.route("/").post(googleController.search);

module.exports = router;
