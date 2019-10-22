const express = require("express");
const userRoutes = require("./routes/user");
const tasksRoutes = require("./routes/tasks");

require("./db/mongoose");

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(tasksRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
