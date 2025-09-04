import Signup from "./Signup";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

// import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>home</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
