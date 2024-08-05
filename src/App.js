import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
/*import Footer from "./components/Footer";*/
import TeleHealth from "./components/TeleHealth";
import News from "./components/News";
import Login from "./components/Login";
import Join from "./components/Join";
import Home from "./components/Home";
import Gugudan from "./components/Gugudan";
import Capital from "./components/Capital";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* 경로 및 컴포넌트 정의 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TeleHealth" element={<TeleHealth />} />
          <Route path="/News" element={<News />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Gugudan" element={<Gugudan />} />
          <Route path="/Capital" element={<Capital />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;