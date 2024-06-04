const express = require("express");
const app = express();
const db = require("./utils/db");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/api", require("./routes/user.routes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

db.on("error", console.error.bind(console, "Connection Error :- "));
db.once("open", (error) => {
  if (error) throw Error();
  console.log("Connection success with DB...!");

  app.listen(process.env.PORT, () => {
    console.log(`Server start on ${process.env.PORT} port...!`);
  });
});
