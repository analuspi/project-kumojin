const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const DUMMY_EVENTS = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get("/events", (req, res, next) => {
  res.status(200).json({ events: DUMMY_EVENTS });
});

app.post("/event", (req, res, next) => {
  const { title, description, startDate, endDate } = req.body;

  const createdEvent = {
   title,
   description,
   startDate,
   endDate
  };

  DUMMY_EVENTS.push(createdEvent);

  res
  .status(201)
  .json({ message: "Created new event", event: createdEvent });
});

app.listen(5000);
