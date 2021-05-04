import axios from "axios";

export default {
  //generic as we dont know the specs of the search
  findBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  //could not get it to work with routing via the back end
  // (search) => {
  //   console.log("im the query", search);
  //   return axios.get("/api/google/" + search);
  // },
  saveBook: function (book) {
    return axios.post("/api/books", book);
  },
  findSavedBooks: function () {
    return axios.get("/api/books");
  },

  deleteSavedBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
