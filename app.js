const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale"
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond"
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland"
    }
  ]);
});

app.get("/hi", (req, res) => {
    res.json([
      {
        id: "1",
        title: "Hello"
      }
    ]);
  });

  app.get('/err', (req, res) => {
    throw new Error("Hello error!")
  })

app.listen(process.env.PORT , () => {
  console.log("listening for requests on port 4000");
});