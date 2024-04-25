const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 5,
    name: "Din Djarin",
    number: "066-1234567",
  },
];

const generateNewId = () => {
  const usedIds = persons.map((person) => person.id);
  let newId;
  do {
    newId = Math.floor(Math.random() * 99999);
  } while (usedIds.includes(newId));

  return newId;
};

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.statusMessage = "Person of such ID wasn't found";
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  persons = persons.filter((person) => person.id !== id);

  res.json(persons);
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  const usedNames = persons.map((person) => person.name);

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "number or name missing",
    });
  } else if (usedNames.includes(body.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    id: generateNewId(),
    name: body.name,
    number: body.number,
  };

  persons = [...persons, person];

  res.json(person);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
