// const Router = require("./router")
// const userModel = require("./model/model");
const mongoose = require("mongoose");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Hoang Long')
  })

const username = "glong25";
const password = "Long2503";
const cluster = "cluster0.x4be1na";
const dbname = "test";



mongoose.connect(
  `mongodb+srv://glong25:Long2503@cluster0.x4be1na.mongodb.net/test`, 
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
// ...


// app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
