const axios = require("axios");

module.exports = {
  search: (req, res) => {
    console.log("im the req", req.body);
    const { search } = req.body;

    const query = search.trim().replace(/\s/g, "-"); //remove leading and ending white spaces, change internal spaces to dash
    console.log("im the body", query);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((result) => res.json(console.log("result.data", result)))
      .catch((err) => res.status(400).json(err));
  },

  // search: {
  //   function(req, res) {
  //     //grabbing the query search, create object
  //     //the query string on the URL
  //     //deconstructing the query off the params
  //     const { search: params } = req.query;
  //     axios
  //       .get("https://www.googleapis.com/book/v1/volumes", {
  //         params,
  //       })
  //       .then((response) => {
  //         const topbooks = response.data.items.splice(0, 10);
  //         const books = topbooks.map(({ volumeInfo }) => {
  //           const {
  //             title,
  //             authors,
  //             description,
  //             imageLinks: { smallThumbnail: image },
  //             previewLink: link,
  //           } = volumeInfo;
  //           return { title, authors, description, image, link };
  //         });

  //         res.json(books);
  //         //do you want to check if the book has already been saved ?
  //         //do we check the db before we search the api ?
  //         //what do i want to give to the front end?
  //       })

  //       .catch((err) => res.status(422).json(err));
  //   },
  //},
};

//test on postman
