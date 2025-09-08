import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://login-desk.vercel.app/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
    const obj = { id: email, pass: password };
    alert(obj.id + " " + obj.pass);
  };
  return (
    <div>
      <form>
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* time:23:17
         <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        */}
        <button onClick={handleSubmit} className="btn btn-success ">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
