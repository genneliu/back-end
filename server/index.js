const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

let userPost = [];
let song = [];

//compliment
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//fortune
app.get("/api/fortune", (req, res) => {
  const fortune = ["May fortune fall upon your horse",
    "Western Winds bring Big Money",
    "A pleasant surprise is waiting for you",
    "An inch of time is an inch of gold",
    "May your cow give birth to twin calves",
    "Sloth makes all seem slow"
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

//feelings
app.get("/api/happy", (req, res) => {
  const happy = ["Yay!"];
  res.status(200).send(happy);
});


app.get("/api/sad", (req, res) => {
  const sad= ["Sorry you feel that way :("];
  res.status(200).send(sad);
});

app.get("/api/angry", (req, res) => {
  const angry= ["Take some deep breaths"];
  res.status(200).send(angry);
});


app.post("/api/post", (req, res) => {
  console.log(req.body.text)
  userPost.push(req.body.text)
  res.status(200).send(userPost);
});

app.post("/api/song", (req, res) => {
  console.log(req.body.text)
  song.push(req.body.text)
  res.status(200).send(song);
});


app.listen(4000, () => console.log("Server running on 4000"));

