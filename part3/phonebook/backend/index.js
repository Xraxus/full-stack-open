require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

// const generateNewId = () => {
//   const usedIds = persons.map((person) => person.id);
//   let newId;
//   do {
//     newId = Math.floor(Math.random() * 99999);
//   } while (usedIds.includes(newId));

//   return newId;
// };

// app.get("/api/info", (req, res) => {
//   const date = new Date();
//   res.send(
//     `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
//   );
// });

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id).then((person) => {
    res.json(person);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).end();
  });
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "number or name missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
