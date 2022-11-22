import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Novels from "./Novels";
import Manga from "./Manga";
import Art from "./Art";
import ViewNovel from "./ViewNovel";
import ShowNovels from "./ShowNovels";

const App = () => {
  return (
    <div className="site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Novels" element={<Novels />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/ViewNovel" element={<ViewNovel />} />
        <Route path="/ShowNovels" element={<ShowNovels />} />
      </Routes>
    </div>
  );
};

export default App;

//<Route path="/ShowBook/:bookid" element={<ShowBook />} />
//<Route path="/EditBook/:bookid" element={<EditBook />} />
