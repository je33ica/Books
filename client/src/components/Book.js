import bookPlaceholder from "../images/bookPlaceholder.jpeg";

const Book = ({ volumeInfo }, index) => {
  return (
    <>
      <div key={index}>
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
      </div>
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
    </>
  );
};
export default Book;
