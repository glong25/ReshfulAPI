const express = require("express");
const userModel = require("./model/model");
const app = express();
app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
})
module.exports = app;