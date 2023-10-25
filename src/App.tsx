import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { NavBar } from "./Components/NavBar/NavBar";
import { SideBar } from "./Components/SideBarMenu/SideBar";
import { Footer } from "./Components/Footer/Footer";

// pages
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Login } from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Search } from "./Pages/Search/Search";
import Article from "./Pages/Article/Article";

// styles
import "./App.css";
import Complaint from "./Pages/Complain/Complaint";
import News from "./Pages/News/News";

function App() {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = (): void => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleClick={handleClick} />
        <SideBar onClick={handleClick} state={openNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/article" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
