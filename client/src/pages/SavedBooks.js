import React, { useEffect, useState } from "react";
import API from "../utils/API";
import bookPlaceholder from "../images/bookPlaceholder.jpeg";

const { findSavedBooks, deleteSavedBook } = API;

const SavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    findSavedBooks()
      .then(({ data }) => setSavedBooks(data))

      .catch((err) => console.log(err));
  }, []);
  console.log("th books", savedBooks);
  const handleViewClick = (link) => {
    //will open the link in a new tab
    window.open(link, "_blank");
  };

  const handleDeleteClick = (_id) => {
    //removing the book form view but not the DB - optomistic UI
    const newSavedBooks = savedBooks.filter((book) => book._id !== _id);

    setSavedBooks(newSavedBooks);
    //now it deletes from the db
    deleteSavedBook(_id).catch((err) => {
      console.log(err);

      //will only hit this if the api call didnt work
      setSavedBooks(savedBooks);
    });
  };

  return (
    <div>
      {savedBooks.map((book) => {
        return (
          <div className="bookCard" key={book._id}>
            <div>
              <h4>{book.title} </h4>
              <h5>{book.authors}</h5>
              <img alt="book" src={book.image || bookPlaceholder} />
            </div>
            <button className="btn" onClick={() => handleViewClick(book.link)}>
              view
            </button>
            <button className="btn" onClick={() => handleDeleteClick(book._id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default SavedBooks;
