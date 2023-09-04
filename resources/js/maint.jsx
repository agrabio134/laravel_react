import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
   
function main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route path="/blog"  element={<Blog/>} />
                <Route path="/about"  element={<About/>} />
                <Route path="/contact"  element={<Contact/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    );
}
   
export default main;
   
if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}