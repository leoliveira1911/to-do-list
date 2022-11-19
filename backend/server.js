const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();

const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all tasks
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

// Route for creating the task
app.post("/api/create", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const deadline = req.body.deadline;
  const concluded = req.body.concluded;

  console.log(name, description, deadline, concluded);

  db.query(
    `INSERT INTO tasks (name, description, deadline, concluded) VALUES (?,?,?,?)`,
    [name, description, deadline, concluded],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send("OK");
      console.log(result);
    }
  );
});
//Route to update a post
app.post("/api/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const deadline = req.body.deadline;
  const concluded = req.body.concluded;

  console.log(name, description, deadline, concluded);

  db.query(
    `UPDATE tasks
    set name = ?,description = ?, deadline = ?, concluded=?
    WHERE id = ?`,
    [name, description, deadline, concluded, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.status(200).send("OK");
    }
  );
});

// Route to delete a post

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("O ID É:" + id);
  db.query(`DELETE FROM tasks WHERE id=?`, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send("OK");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
