const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
// const db = require("../models");

// module.exports = {
//   findAll: (req, res) => {
//     //empty obj as no params
//     db.Book.find({})
//       .then((response) => res.json(response))
//       .catch((err) => res.status(422).json(err));
//   },
//   //save a book to the db
//   create: function (req, res) {
//     db.Book.create(req.body)
//       .then((response) => res.json(response))
//       .catch((err) => res.status(422).json(err));
//   },
//   delete: function (req, res) {
//     db.Book.findByIdAndDelete(req.params.id)
//       .then((response) => res.json(response))
//       .catch((err) => res.status(422).json(err));
//   },
// };
