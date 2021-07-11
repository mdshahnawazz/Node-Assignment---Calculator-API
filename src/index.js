const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// your code goes here
app.get("/", function (req, res) {
  res.send("Hello world!");
});
app.post("/add", function (req, res) {
  const sumObj = {
    status: "",
    message: "",
    sum: ""
  };
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    sumObj.status = "error";
    sumObj.message = "Invalid data types";
  } else {
    if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
      sumObj.status = "error";
      sumObj.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
      sumObj.status = "error";
      sumObj.message = "Overflow";
    } else {
      sumObj.status = "success";
      sumObj.message = "the sum of given two numbers";
      sumObj.sum = num1 + num2;
    }
  }
  res.send(sumObj);
});
app.post("/sub", function (req, res) {
  const sumObj = {
    status: "",
    message: "",
    difference: ""
  };
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    sumObj.status = "error";
    sumObj.message = "Invalid data types";
  } else {
    if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
      sumObj.status = "error";
      sumObj.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
      sumObj.status = "error";
      sumObj.message = "Overflow";
    } else {
      sumObj.status = "success";
      sumObj.message = "the difference of given two numbers";
      sumObj.difference = num1 - num2;
    }
  }
  res.send(sumObj);
});
app.post("/multiply", function (req, res) {
  const sumObj = {
    status: "",
    message: "",
    result: ""
  };
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    sumObj.status = "error";
    sumObj.message = "Invalid data types";
  } else {
    if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
      sumObj.status = "error";
      sumObj.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
      sumObj.status = "error";
      sumObj.message = "Overflow";
    } else {
      sumObj.status = "success";
      sumObj.message = "The product of given numbers";
      sumObj.result = num1 * num2;
    }
  }
  res.send(sumObj);
});
app.post("/divide", function (req, res) {
  const sumObj = {
    status: "",
    message: "",
    result: ""
  };
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    sumObj.status = "error";
    sumObj.message = "Invalid data types";
  } else {
    if (num2 === 0) {
      sumObj.status = "error";
      sumObj.message = "Cannot divide by zero";
    } else if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
      sumObj.status = "error";
      sumObj.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
      sumObj.status = "error";
      sumObj.message = "Overflow";
    } else {
      sumObj.status = "success";
      sumObj.message = "The division of given numbers";
      sumObj.result = num1 / num2;
    }
  }
  res.send(sumObj);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;