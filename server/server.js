const express = require('express');
const app = express();

const API_PATH = "/api";

app.get(API_PATH + "/projects", (req, res) => {
  res.json({
    "data": [
      {
        "name": "project1",
        "description": "some text"
      },
      {
        "name": "project2",
        "description": "some more text"
      }
    ]
  })
});

app.listen(3000, () => { console.log("Server started on port 3000")});

