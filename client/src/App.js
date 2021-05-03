// import "./utils/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import SearchBooks from "./pages/Searchbooks";
import SavedBooksPage from "./pages/SavedBooks";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Nav />

      <div className="App">
        <Route exact path="/about" component={About} />
        <Route exact path="/searchBooks" component={SearchBooks} />
        <Route exact path="/savedBooks" component={SavedBooksPage} />
      </div>
    </Router>
  );
}

export default App;
