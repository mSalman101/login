import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const dburi = process.env.DB_URL;
app.use(express.json());
app.use(cors());

mongoose
  .connect(dburi)
  .then(console.log("mogngo setup success"))
  .catch((er) => {
    console.log(`Err..${er}`);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("password incorrect");
      }
    } else {
      res.json("Not registered");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((er) => res.json(er));
});

app.get("/", (req, res) => {
  res.send("<p>hello user i m server</p>");
});

app.listen(3000, (req, res) => {
  console.log("server running on 3000");
});
