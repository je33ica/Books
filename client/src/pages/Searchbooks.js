import { useState } from "react";
import { useHistory } from "react-router-dom";
import bookPlaceholder from "../images/bookPlaceholder.jpeg";

import API from "../utils/API";
// const {
//   findBooks,
//   // saveBook
// } = API;

function SearchBooks() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const history = useHistory();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    API.findBooks(search)
      //destructure data from response

      .then((res) => setBooks(res.data.items))

      .catch((err) => console.log(err));
  };
  console.log("im the books", books);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleViewClick = (link) => {
    //will open the link in a new tab
    window.open(link, "_blank");
  };

  const hanldeSaveClick = (book) => {
    API.saveBook(book)
      .then(({ data }) => {
        history.push("/savedBooks");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <form onSubmit={hanldeSubmit}>
          {/* we are controlling the value of the input field */}
          <input
            value={search}
            onChange={handleChange}
            placeholder="Search for books"
          />
          <button role="submit">search</button>
        </form>
      </div>
      <div>
        <div>
          <div className="grid">
            {books.map(({ volumeInfo }, index) => {
              return (
                <div className="bookCard" key={index}>
                  <h5>Title: {volumeInfo.title}</h5>
                  <p>Author: {volumeInfo.authors}</p>
                  <p>Category: {volumeInfo.categories}</p>
                  <p>Description: {volumeInfo.description}</p>
                  <p>
                    <img
                      alt="book"
                      src={
                        //optional chaining
                        volumeInfo.imageLinks?.thumbnail || bookPlaceholder
                      }
                    />
                  </p>

                  <button
                    className="btn"
                    onClick={() => handleViewClick(volumeInfo.previewLink)}
                  >
                    view
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      hanldeSaveClick({
                        title: volumeInfo.title,
                        authors: volumeInfo.authors,
                        description: volumeInfo.description,
                        image: volumeInfo.imageLinks?.thumbnail || "",
                        link: volumeInfo.previewLink,
                      });
                    }}
                  >
                    save
                  </button>
                  <hr style={{ color: "white" }}></hr>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBooks;
