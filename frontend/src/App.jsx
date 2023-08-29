import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

// npm i styled-components react-router-dom
