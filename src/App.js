import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("ls") === null)) {
      JSON.stringify(localStorage.setItem("ls", false));
      setAuth(JSON.parse(localStorage.getItem("ls")));
    } else {
      setAuth(JSON.parse(localStorage.getItem("ls")));
    }
  }, [localStorage.getItem("ls")]);

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("ls")));
  console.log(auth);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login setAuth={setAuth} />} />
          <Route element={<ProtectedRoutes auth={auth} setAuth={setAuth} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
