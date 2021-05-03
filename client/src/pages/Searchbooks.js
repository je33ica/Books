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
          <input value={search} onChange={handleChange} />
          <button role="submit">search</button>
        </form>
      </div>
      <div>
        <ul>
          {books.map(({ volumeInfo }, index) => {
            return (
              <li key={index}>
                <div>
                  <h4>Title {volumeInfo.title}</h4>
                  <h4>Author {volumeInfo.authors}</h4>
                  <h4>Category {volumeInfo.categories}</h4>
                  <p>Description{volumeInfo.description}</p>
                  <h4>
                    <img
                      alt="book"
                      src={
                        //optional chaining
                        volumeInfo.imageLinks?.thumbnail || bookPlaceholder
                      }
                    />
                  </h4>

                  <button
                    onClick={() => handleViewClick(volumeInfo.previewLink)}
                  >
                    view
                  </button>
                  <button
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
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SearchBooks;

// const SearchBooks = () => {
//   return <h1> seach book page</h1>;
// };

// export default SearchBooks;
