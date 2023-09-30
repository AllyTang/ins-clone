import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import CreatePost from "./components/Post/CreatePost";
import { useDispatch } from "react-redux";
import { saveProfileData } from "./Redux/ProfileData";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const url = "http://localhost:8000/api/profiles";
        const res = await axios.get(url);
        console.log("profileData", res.data);
        dispatch(saveProfileData(res.data));
      } catch (error) {
        console.error("error", error);
      }
    };
    getProfiles();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;

// npm i styled-components react-router-dom
