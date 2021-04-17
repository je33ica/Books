// import "./utils/";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import SearchBooks from "./pages/Searchbooks";
import SavedBooks from "./pages/SavedBooks";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div className="App">
        <Route exact path="/about" component={About} />
        <Route exact path="/SearchBooks" component={SearchBooks} />
        <Route exact path="/SavedBooks" component={SavedBooks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
