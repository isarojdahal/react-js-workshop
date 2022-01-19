import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import BookDetails from "./pages/BookDetails";
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="books">
            <Route index element={<b>Books pages</b>} />
            <Route path=":id/:author" element={<BookDetails />} />
          </Route>
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div> Copyright &copy; {new Date().getFullYear()}</div>
      </Router>
    </div>
  );
};

export default App;
