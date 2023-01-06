
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/SignUp/Signup";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} >   </Route>
        <Route path="/login" element={<Login/>} >   </Route>
        <Route path="/Signup" element={<Signup/>} >   </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
