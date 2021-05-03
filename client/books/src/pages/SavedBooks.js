import React, { useEffect, useState } from "react";
import API from "../utils/API";

const { findSavedBooks, deleteSavedBook } = API;

const SavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    findSavedBooks()
      .then(({ data }) => setSavedBooks(data))
      .catch((err) => console.log(err));
  }, []);

  const handleViewClick = (link) => {
    //will open the link in a new tab
    window.open(link, "_blank");
  };

  const handleDeleteClick = (_id) => {
    //remvoing the book form view but not the DB - optomistic UI
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
      <ul>
        {savedBooks.map((book) => {
          return (
            <li key={book._id}>
              <div>
                <h4>{book.title} </h4>
                <button onClick={() => handleViewClick(book.link)}>view</button>
                <button onClick={() => handleDeleteClick(book._id)}>
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SavedBooks;
