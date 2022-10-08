import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home"; 
import ArticleDetail from "./views/ArticleDetail"; 
import Contact from "./views/Contact"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route name="home" path="/"  exact element={<Home/>} />
      <Route name="articulo" path="/articulo/:id_article/:slug" element={<ArticleDetail/>} />
      <Route name="contacto" path="/contacto" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
);
}

export default App;
