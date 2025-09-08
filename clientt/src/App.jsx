import Signup from "./Register";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Home from "./Home";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>home</h1>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          signup
        </button>
      </div>

      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
