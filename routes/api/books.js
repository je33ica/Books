const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

// const router = require("express").Router();
// const booksController = require("../../controller/booksController");

// //will retun all the books we have
// router.route("/").get(booksController.findAll);
// router.route("/").post(booksController.create);
// //delete req to paramatised route
// router.route("/:id").delete(booksController.delete);

// module.exports = router;
